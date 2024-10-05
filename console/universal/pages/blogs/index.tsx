import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { PaginationAttrs, useNavigate, usePagination, useUIEvent } from 'bistrio/client'
import { Pagination } from '@/universal/components/Pagination'
import { useRenderSupport } from '@bistrio/routes/main'
import { blogs$show, blogs$edit, blogs$build, blogs$index } from '@bistrio/routes/main/named_endpoints'

export function Index() {
  const rs = useRenderSupport()
  const l = rs.getLocalizer()

  return (
    <>
      <h1>{l.t`Blog list`}</h1>
      <Link to={blogs$build.path()}>{l.t`Create new blog`}</Link>
      <Suspense fallback={<p>{l.t`Loading...`}</p>}>
        <BlogTable />
      </Suspense>
    </>
  )
}

const BlogTable = () => {
  const rs = useRenderSupport()

  const limits = [3, 5, 10]

  const { data: blogs, ...paginationAttrs } = usePagination({
    loader: (pageParams) => rs.suspendedResources().blogs.list(pageParams),
    limit: limits[1],
  })

  return (
    <>
      <PageTool {...paginationAttrs} limits={limits} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DONE</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <BlogRecord key={blog.id} blog={blog} />
          ))}
        </tbody>
      </table>
      <Pagination {...paginationAttrs} listSize={2} />
    </>
  )
}

function PageTool({ page, maxPage, limit, limits, navigateTolimitChanged }: PaginationAttrs & { limits: number[] }) {
  return (
    <div>
      <span>
        {page} / {maxPage}
      </span>
      <select name="limit" defaultValue={limit} onChange={(ev) => navigateTolimitChanged(Number(ev.target.value))}>
        {limits.map((limitItem) => (
          <option value={limitItem} key={limitItem}>
            {limitItem}
          </option>
        ))}
      </select>
    </div>
  )
}

function BlogRecord({ blog: src }: { blog: any }) {
  const [blog, setBlog] = useState(src)
  const rs = useRenderSupport()
  const l = rs.getLocalizer()

  return (
    <tr>
      <td>{blog.id}</td>
      <td></td>
      <td>
        <Link to={blogs$show.path({ id: blog.id })}>{blog.title}</Link>
      </td>
      <td>{blog.description}</td>
      <td>
        <Link to={blogs$edit.path({ id: blog.id })}>{l.t`Edit`}</Link>&nbsp;|&nbsp;
        <Remover blog={blog} />
      </td>
    </tr>
  )
}

function Remover({ blog }: { blog: any }) {
  const navigate = useNavigate()
  const rs = useRenderSupport()
  const l = rs.getLocalizer()

  const { handleEvent: handleDeleteClick, pending } = useUIEvent({
    modifier: () => rs.resources().blogs.destroy(blog),
    onSuccess: () => {
      navigate(blogs$index.path(), {
        purge: true,
        flashMessage: { text: `Blog deleted '${blog.title}'`, type: 'info' },
      })
    },
  })

  return <>{pending ? '...' : <a href="#" onClick={handleDeleteClick}>{l.t`Delete`}</a>}</>
}

export { Index as Page }
