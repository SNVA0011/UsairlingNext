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

export default function BlogDetails({singleblog, recentblog}) {
  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  return (
    <>

      <Header />


      {singleblog.length === 0 ? <Pageerror /> :

        <>
          <Head>
            <title>{singleblog[0].title}</title>
            <meta name="description" content={singleblog[0].description} />
            <meta name="keywords" content={singleblog[0].keywords} />
            <link rel="canonical" href={'https://www.usairling.com/baggage-policy/' + singleblog[0].titleUrl} />
          </Head>

          <div className='blogadda'>

            <div className="page-title page-title--small page-title--blog align-left" >
              <div className="container">
                <div className="page-title__content">
                  <h1 className="page-title__name">
                    {singleblog[0].heading}
                  </h1>

                  <BreadHero linkhtml={<><ul className='bradcum'> <li>
                    <Link href="/">Home</Link></li>
                    <li> <Link href="/baggage-policy">Baggage Policy</Link></li>
                    <li className='breadcrumb-item active' aria-current="page">
                      {singleblog[0].heading}</li> </ul></>} />

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
                            singleblog[0].content === '' ?
                              <p className='pb-2'>No Content found</p>
                              :
                           <>
                              <span className='badge badge-secondary baggagebadge mb-2 single'>{singleblog[0].categoryName}</span>
                              <div dangerouslySetInnerHTML={{ __html: singleblog[0].content }}></div>
                           </>
                          }
                        </div>

                      </div>
                    </div>
                  </Col>

             

                  <Col xs={12} lg={4} className="mt-5 mt-lg-0">
                    {console.log('recentblog-',recentblog)}
                    <RecentDestination
                      title="Recent Baggage Policy"
                      langrecent="en" 
                      baggagelist={
                        recentblog.slice(0, 7)
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
    "categoryName": "",
    "siteId": "145",
    "pageType": "baggage-policy",
    "extraTag": "",
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
  const blogres = await fetch('http://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876', requestOptions)
  const allblogjson = await blogres.json()

  // single blogDetail  
  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": params.baggage,
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "categoryName": "",
    "siteId": "145",
    "pageType": "baggage-policy",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
}
);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("http://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876", requestOptions)
  const onejson = await res.json()

  return {
    props: ({
      singleblog: onejson.response,
      recentblog: allblogjson.response 
    })
  }
}
