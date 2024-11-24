import blogMap from "./maps/blog";
import tagMap from "./maps/tag";

export const firestoreOptions = {
  types: [
    {
      type: "Tag",
      collection: "tags",
      map: tagMap,
    },
    {
      type: "Blog",
      collection: "blogs",
      map: blogMap,
    },
  ],
};
