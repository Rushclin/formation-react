// "use-client";
import type { NextPage } from "next";
import React from "react";
import './../styles/globals.css'
import Script from "next/script";

// Import librairies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { app } from "@/configs/app";

interface AppProps {
  Component: NextPage;
}

const App = (props: AppProps) => {
  const { Component } = props
  const {defaultProps} = Component

  // const getLayout = Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>)

  return (
    <>
    <Head>
        <title>{app.fullName}</title>
        <meta name="description" content={app.description} />
        <meta name="keywords" content={app.keywords} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-16x16.png" />
        <meta name="application-name" content={app.fullName} />
        <meta name="theme-color" content={app.themeColor} />
      </Head>

      <Component {...defaultProps} />
      <Script src="./js/script.js" />
    </>
  );
};

export default App;
