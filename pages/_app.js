import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}