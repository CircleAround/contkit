import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export function Seo ({
  title,
  description,
  children
} : {
  title?: string,
  description?: string,
  children?: React.ReactNode
}) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          host
          tagline
          description
          author
        }
      }
    }
  `)
  const metaTitle = `${data.site.siteMetadata.title} 〜 ${data.site.siteMetadata.tagline} 〜`
  const customTitle = title ? `${title} | ${metaTitle}` : metaTitle

  const metaDescription = data.site.siteMetadata.description
  const customDescription = description ? description : metaDescription

  const metaAuthor = data.site.siteMetadata.author

  const host = process.env.HOST || data.site.siteMetadata.host
  const protcol = process.env.PROTCOL || 'https'
  const ogpImgUrl = `${protcol}://${host}/images/ogp_image.jpg`

  return (
    <>
      <title>{customTitle}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content={customDescription}
      />
      <meta
        property="og:title"
        content={customTitle}
      />
      <meta
        property="og:description"
        content={customDescription}
      />
      <meta
        property="og:image"
        content={ogpImgUrl}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content={metaAuthor}
      />
      <meta
        name="twitter:title"
        content={customTitle}
      />
      {children}
    </>
  );
}
