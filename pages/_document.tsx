import React from 'react';
import { Head, Html, Main, NextScript, DocumentProps } from 'next/document';

export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
