import type { NodeInput } from "gatsby";
import * as admin from "firebase-admin";

type Blog = {
  id: string;
  slug: string;
  title: string;
  body: string;
  tags___NODE: string[];
  createdAt: Date;
};

type BlogDoc = NodeInput & {
  body: string;
  slug: string;
  title: string;
  tagIds: string[];
  createdAt: admin.firestore.Timestamp;
};

export default function convertBlog(doc: BlogDoc): Blog | undefined {
  try {
    return {
      id: doc.id,
      slug: doc.slug,
      title: doc.title,
      body: doc.body,
      tags___NODE: doc.tagIds || [],
      createdAt: doc.createdAt.toDate(),
    };
  } catch (e) {
    console.error("Failed to convert blog", doc, e);
  }
}
