import { defineResource, Paginated } from 'bistrio'
import { CustomActionOptions } from '@/server/customizers'
import { BlogsResource } from '@bistrio/resources'
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'
import { Blog } from '@/universal/params'

let app: App
const appName = 'starter-gatsby-firestore'

if(!getApps() || !getApps().length) {
  app = initializeApp({}, appName)
} else {
  app = getApp(appName)
}

const db = getFirestore(app)

type BlogDoc = {
  createdAt: FirebaseFirestore.Timestamp
  updatedAt: FirebaseFirestore.Timestamp
  slug: string
  title: string
  body: string
}

const toBlog = (doc: FirebaseFirestore.DocumentSnapshot<BlogDoc>): Blog => {
  const data = doc.data()
  if (!data) {
    throw new Error('Not found')
  }

  const { createdAt, updatedAt, ...attrs } = data
  return { id: doc.id, createdAt: createdAt.toDate(), updatedAt: updatedAt.toDate(), ...attrs } as Blog
}

const toBlogs = (snapshot: FirebaseFirestore.QuerySnapshot<BlogDoc>) => {
  const blogs: Blog[] = []
  snapshot.forEach((doc) => {
    blogs.push(toBlog(doc))
  })
  return blogs
}

const blogCollection = () => {
  return db.collection('blogs') as FirebaseFirestore.CollectionReference<BlogDoc>
}

export default defineResource(
  () =>
    ({
      list: async (params): Promise<Paginated<Blog>> => {
        const blogs = toBlogs(await blogCollection().get())

        return {
          data: blogs,
          count: blogs.length,
          params,
        }
      },

      load: async ({ id }): Promise<Blog> => {
        const blogDoc = await blogCollection().doc(id).get()
        const data = blogDoc.data()
        if (!data) {
          throw new Error('Not found')
        }
        return toBlog(blogDoc)
      },

      create: async (params): Promise<Blog> => {
        const doc = await blogCollection().add({
          ...params,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        })
        return toBlog(await doc.get())
      },

      update: async ({ id, ...attrs }): Promise<Blog> => {
        const blogRef = blogCollection().doc(id)
        await blogRef.update({ ...attrs, updatedAt: FieldValue.serverTimestamp() })
        return toBlog(await blogRef.get())
      },

      destroy: async (): Promise<void> => {},
    }) as const satisfies BlogsResource<CustomActionOptions>,
)
