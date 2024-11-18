import type { GatsbyConfig } from 'gatsby';
import { firestoreOptions } from './gatsby-firestore';

const config: GatsbyConfig = {
  // @see https://www.gatsbyjs.com/docs/reference/release-notes/v4.1/#jsx-runtime-options-in-gatsby-configjs
  jsxRuntime: 'automatic',
  siteMetadata: {
    siteUrl: "https://techlib.circlearound.co.jp/",
    title: "Tech lib",
    host: "techlib.circlearound.co.jp",
    tagline: "WEBプログラミング基礎の動画解説をここに集約",
    description: "WEBプログラミングの基礎を動画でわかりやすく解説してここに集約します。「ここに来ればWEBシステム開発の基礎がわかる」という場所を作っています。",
    author: "@CircleAroundCo"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo_white.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-firesource',
      options: firestoreOptions,
    },
    'gatsby-plugin-postcss',
  ],
}

export default config
