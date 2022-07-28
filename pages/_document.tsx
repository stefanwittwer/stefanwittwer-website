import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
