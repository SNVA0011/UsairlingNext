import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'


const MetaHead = ({ MetaTitle, MetaDescription, MetaKeywords, MetaCanonical, MetaLocate, MetablogType, MetaSitename, MetaWeburl }) => {
    const router = useRouter()

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
            {MetaTitle ? <title>{MetaTitle}</title> : ""}
            {MetaKeywords ? <meta name="keywords" content={MetaKeywords} /> : ""}
            {MetaCanonical ? <link rel="canonical" href={MetaCanonical} /> : ""}
            <meta name="description" key="description" content={MetaDescription} />
            <meta name="title" key="title" content={MetaTitle} />
            <meta property="og:site_name" content={MetaSitename} />
            <meta property="og:title" key="og:title" content={MetaTitle} />
            <meta property="og:description" key="og:description" content={MetaDescription} />
            <meta property="og:locale" key="og:locale" content={MetaLocate} />
            <meta property="og:url" key="og:url" content={`${MetaWeburl + router.asPath}`} />
            <meta property="og:type" key="og:type" content={MetablogType ? "article" : "website"} />
        </Head>
    )
}

export default MetaHead

