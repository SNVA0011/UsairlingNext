import React, { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '../../../component/es/Footer';
import Header from "../../../component/es/Navbar";
import BreadHero from '../../../component/es/BreadHero';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Pageerror from "../../../component/es/Pageerror"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentDestination from '../../../component/RecentDestination';
import MetaHead from '../../../component/MetaHead';

export default function BlogDetails(props, router) {
  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  if (location.isFallback) {
    return <>
      <Header />

      <div className='text-center full-w my-5 py-5'>
        <div class="spinner-border text-secondary mr-2" role="status">
        </div>  Loading...
      </div>

      <Footer />
    </>
  }

  const monthlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


  return (
    <>
      <Header />

      {props.singleblog.length === 0 ? <Pageerror /> :
        <>

          <MetaHead
            MetaTitle={props.singleblog[0].title}
            MetaDescription={props.singleblog[0].description}
            MetaKeywords={props.singleblog[0].keywords}
            MetaCanonical={'https://www.usairling.com/es/articulos/' + props.singleblog[0].titleUrl}
            MetaLocate={"es_ES"}
            MetablogType={true}
            MetaSitename={"www.usairling.com"}
            MetaWeburl={"https://www.usairling.com"} />


          <div className='blogadda'>

            <div className="page-title page-title--small page-title--blog align-left" >
              <div className="container">
                <div className="page-title__content">



                  <h1 className="page-title__name">
                    {props.singleblog[0].heading}
                  </h1>

                  <BreadHero linkhtml={<><ul className='bradcum'>
                    <li><Link href="/es/">Casa</Link> </li>
                    <li><Link href="/es/articulos">Articulos</Link></li>
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
                              <>
                                <div className="text-left text-secondary mb-2  text-sm">
                                  <i className="bi bi-calendar4 mr-2"></i>{" "}
                                  {(monthlist[new Date(props.singleblog[0].posttime).getMonth()]) + " " + (new Date(props.singleblog[0].posttime)).getDate() + ", " + (new Date(props.singleblog[0].posttime)).getFullYear()}
                                </div>
                                <hr></hr>
                                <div dangerouslySetInnerHTML={{ __html: props.singleblog[0].content }}></div>
                              </>
                          }
                        </div>

                      </div>
                    </div>
                  </Col>

                  <Col xs={12} lg={4} className="mt-5 mt-lg-0">
                    <RecentDestination
                      title="BLOGS RECIENTES"
                      langrecent="es"
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



export async function getStaticProps(context) {
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
    "pageType": "Articulo",
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
  const blogres = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
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
    "categoryName": "",
    "siteId": "145",
    "pageType": "Articulo",
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
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876", requestOptions)
  const onejson = await res.json()

  return {
    props: ({
      singleblog: onejson.response,
      recentblog: allblogjson.response
    }),
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}




// paths -> slugs which are allowed
export const getStaticPaths = async () => {
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
    "categoryName": "",
    "siteId": "145",
    "pageType": "Articulo",
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
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { blogDetail: post.titleUrl }
    })
  })

  return {
    paths,
    fallback: true
  }
}