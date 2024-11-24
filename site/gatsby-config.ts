import type { GatsbyConfig, NodeInput } from "gatsby";
import * as admin from "firebase-admin";

type Tag = {
  id: string;
  name: string;
  slug: string;
};

type TagDoc = NodeInput & {
  name: string;
  slug: string;
};

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

const config: GatsbyConfig = {
  // @see https://www.gatsbyjs.com/docs/reference/release-notes/v4.1/#jsx-runtime-options-in-gatsby-configjs
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Starter gatsby firebase site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-firesource",
      options: {
        types: [
          {
            type: "Tag",
            collection: "tags",
            map: (doc: TagDoc): Tag => ({
              id: doc.id,
              name: doc.name,
              slug: doc.slug,
            }),
          },
          {
            type: "Blog",
            collection: "blogs",
            map: (doc: BlogDoc): Blog => ({
              id: doc.id,
              slug: doc.slug,
              title: doc.title,
              body: doc.body,
              tags___NODE: doc.tagIds || [],
              createdAt: doc.createdAt.toDate(),
            }),
          },
        ],
      },
    },
  ],
};

export default config;
