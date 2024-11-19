import React from "react";

const Seo = ({ title, children } : { title: string, children?: React.ReactNode }) => (
  
  <>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="WEBプログラミングの基礎を動画でわかりやすく解説してここに集約します。" />
    <meta property="og:title" content="Tech lib 〜 WEBプログラミング基礎の動画解説をここに集約 〜" />
    <meta property="og:description" content="WEBプログラミングの基礎を動画でわかりやすく解説してここに集約します。" />
    <meta property="og:image" content="https://techlib.circlearound.co.jp/images/ogp_image.jpg" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@CircleAroundCo" />
    <meta name="twitter:title" content="Tech lib 〜 WEBプログラミング基礎の動画解説をここに集約 〜" />
    {children}
  </>
);

Seo.displayName = 'Seo';

export { Seo };
