import Head from 'next/head';
import React, { useEffect } from "react"; 
import { useRouter } from "next/router";
require('bootstrap/dist/css/bootstrap.min.css')
require("./../public/styles/globals.css") 
require("./../public/styles/responsive.css") 



function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const lang = pathname.startsWith("/es") ? "es" : "en";
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Head></Head> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
