import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?&family=Syncopate&family=Qwigley&family=Montserrat:wght@300&family=Open+Sans:wght@300&family=Rajdhani:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <body className='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}