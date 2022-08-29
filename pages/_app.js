import Head from 'next/head';
import React, { useEffect } from "react";   
import { useRouter } from "next/router"; 
import "bootstrap/dist/css/bootstrap.min.css";  

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  console.log('pathname-',pathname)
  const lang = pathname.startsWith("/es") ? "es" : "en";
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Head></Head> 
      <link rel="stylesheet" href="/styles/globals.css"></link>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
