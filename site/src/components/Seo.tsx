import React from "react";

export function Seo({ title, children } : { title?: string, children?: React.ReactNode }) {
  const defaultTitle = "Tech lib 〜 WEBプログラミング基礎の動画解説をここに集約 〜"
  const customTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <>
      <title>
        {customTitle}
      </title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="WEBプログラミングの基礎を動画でわかりやすく解説してここに集約します。「ここに来ればWEBシステム開発の基礎がわかる」という場所を作っています。"
      />
      <meta
        property="og:title"
        content={customTitle}
      />
      <meta
        property="og:description"
        content="WEBプログラミングの基礎を動画でわかりやすく解説してここに集約します。「ここに来ればWEBシステム開発の基礎がわかる」という場所を作っています。"
      />
      <meta
        property="og:image"
        content="https://techlib.circlearound.co.jp/images/ogp_image.jpg"
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
        content="@CircleAroundCo"
      />
      <meta
        name="twitter:title"
        content={customTitle}
      />
      {children}
    </>
  );
}
