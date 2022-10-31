import React, { useEffect, useState } from 'react'

import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../../component/es/BreadHero";
import Header from '../../../component/es/Navbar'
import Footer from "../../../component/es/Footer"
import Pageerror from "../../../component/es/Pageerror"
import MetaHead from '../../../component/MetaHead';


export default function Single(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Header />

      {
        props.singleflight?.length > 0 ?
          <>

            <MetaHead
              MetaTitle={props.singleflight[0].metaTitle}
              MetaDescription={props.singleflight[0].metaDesc}
              MetaKeywords={props.singleflight[0].metaKeyword}
              MetaCanonical={`https://www.usairling.com/es/vuelos-baratos/${props.singleflight[0].url}-${props.singleflight[0].pageValue}`}
              MetaLocate={"es_ES"}
              MetablogType={false}
              MetaSitename={"www.usairling.com"}
              MetaWeburl={"https://www.usairling.com"} />

            <div className='blogadda'>

              <div className="page-title page-title--small page-title--blog align-left" >
                <div className="container">
                  <div className="page-title__content">
                    <h1 className="page-title__name">{props.singleflight[0].metaTitle} </h1>
                    <BreadHero linkhtml={<>
                      <ul className='bradcum'>
                        <li> <Link href="/es/">Casa</Link> </li>
                        <li className='breadcrumb-item active' aria-current="page">{props.singleflight[0].metaTitle}</li>
                      </ul></>} />
                  </div>

                </div>

              </div>
              <div className='popular-destination blogaddalist details full-w'>
                <Container>
                  <div className='blogaddalist-round about-uspage privacy__policy full-w pyblock-80 mb-5'>
                    <div className='blogaddalist-inner'>
                      <div className="blog-inner-box2">
                        {props.singleflight[0].contentData?.length == 0 ?
                          <p className='pb-2'>No Content found</p>
                          :
                          <div dangerouslySetInnerHTML={{ __html: props.singleflight[0].contentData }}></div>
                        }
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </>
          : <Pageerror />
      }


      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  const { params } = context
  const pageurl = params.single.substring(0, params.single.lastIndexOf("-"));
  const pageValue = params.single.split("-").pop()

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "CityS",
    "pageValue": pageValue,
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "145",
    "status": "",
    "count": "",
    "url": pageurl,
    "modifyBy": "",
    "modifyDate": ""
  });


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("http://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleflight: json.response }
  }
}