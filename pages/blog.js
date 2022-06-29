import { useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '../component/Footer';
import Header from "../component/Navbar";
import Head from 'next/head';
import BlogTile from '../component/BlogTile';
import BreadHero from '../component/BreadHero'


export default function Blog(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <title>Usairling | Get The Latest Updates on Blogs</title>
        <meta name="description" content="Get the latest all updates on blogs for flights, car, hotel booking etc." />
        <meta name="keywords" content="flights booking updates, car booking updates, hotel booking updates" />
        <link rel="canonical" href={'https://www.usairling.com/blog'} />
      </Head>

      <Header />

      <div className='blogadda'>

        <div className="page-title page-title--small page-title--blog align-left" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Blog </h1>
              <p className="page-title__slogan">Let our experts inspire you</p>
            </div>

          </div>
          <BreadHero linkhtml={<><ul className='bradcum'> <li>
            <Link href="/">Home</Link> </li> <li aria-current="page">Blog</li> </ul></>} />
        </div>

        <div className='popular-destination blogaddalist full-w'>
          <BlogTile allbloglist={props.allbloglist} />
        </div>
      </div>

      <Footer />
    </>


  )
}



export async function getServerSideProps() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "img_url": "",
    "siteId": "145",
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response }
  }
}

