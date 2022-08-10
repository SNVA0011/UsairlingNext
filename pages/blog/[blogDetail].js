import React, { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";
import BreadHero from '../../component/BreadHero';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Pageerror from "../../component/Pageerror"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentDestination from '../../component/RecentDestination';

export default function BlogDetails(props, router) {
  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>

      <Header />


      {props.singleblog.length === 0 ? <Pageerror /> :

        <>
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta name="description" content={props.singleblog[0].description} />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link rel="canonical" href={'https://www.usairling.com/blog/' + props.singleblog[0].titleUrl} />
          </Head>

          <div className='blogadda'>

            <div className="page-title page-title--small page-title--blog align-left" >
              <div className="container">
                <div className="page-title__content">
                  <h1 className="page-title__name">
                    {props.singleblog[0].heading}
                  </h1>

                  <BreadHero linkhtml={<><ul className='bradcum'> <li>
                    <Link href="/">Home</Link></li>
                    <li> <Link href="/blog"> Blogs </Link></li>
                    <li className='breadcrumb-item active' aria-current="page">
                      {props.singleblog[0].title}</li> </ul></>} />

                </div>
              </div>
            </div>

            <div className='popular-destination blogaddalist details full-w'>
              <Container>
                <Row>
                  <Col xs={12} lg={8}>
                    <div className='blogaddalist-round about-uspage privacy__policy full-w pyblock-80'>
                      <div className='blogaddalist-inner'>

                        <div className="blog-inner-box2">
                          {
                            props.singleblog[0].content === '' ?
                              <p className='pb-2'>No Content found</p>
                              :
                              <div dangerouslySetInnerHTML={{ __html: props.singleblog[0].content }}></div>
                          }
                        </div>

                      </div>
                    </div>
                  </Col>

                  <Col xs={12} lg={4} className="mt-5 mt-lg-0">
                    <RecentDestination
                      title="RECENT BLOGS"
                      langrecent="en"
                      recentblog={
                        props.recentblog.slice(0, 6)
                      }
                    />
                  </Col>
                </Row>
              </Container>
            </div>

          </div>
        </>
      }



      <Footer />


    </>
  )
}



export async function getServerSideProps(context) {
  const { params } = context
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // All Blog
  var blograw = JSON.stringify({
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
    body: blograw,
    redirect: 'follow'
  };
  const blogres = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const allblogjson = await blogres.json()

  // single blogDetail  
  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": `${params.blogDetail}`,
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
  const res = await fetch("https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876", requestOptions)
  const onejson = await res.json()

  return {
    props: ({
      singleblog: onejson.response,
      recentblog: allblogjson.response
    })
  }
}
