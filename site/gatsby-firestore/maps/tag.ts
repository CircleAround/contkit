import type { NodeInput } from "gatsby";

type Tag = {
  id: string;
  name: string;
  slug: string;
};

type TagDoc = NodeInput & {
  name: string;
  slug: string;
};

export default (doc: TagDoc): Tag => ({
  id: doc.id,
  name: doc.name,
  slug: doc.slug,
})
