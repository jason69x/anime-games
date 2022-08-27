import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'></meta>
        <link rel='canonical' href='https://itsukichan.vercel.app/'></link>
        <meta
          name='image'
          content='https://itsukichan.vercel.app/images/logo.png'
        ></meta>
        <meta property='og:title' content='itsukichan'></meta>
        <meta property='og:url' content='https://itsukichan.vercel.app/'></meta>
        <meta
          property='og:image'
          content='https://itsukichan.vercel.app/images/logo.png'
        ></meta>
        <meta
          property='og:description'
          content='random anime quote with a waifu picture + a waifu memory game'
        ></meta>
        <meta name='twitter:title' content='itsukichan'></meta>
        <meta
          name='twitter:description'
          content='random anime quote with a waifu picture + a waifu memory game'
        ></meta>
        <meta
          name='twitter:image'
          content='https://itsukichan.vercel.app/images/logo.png'
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
