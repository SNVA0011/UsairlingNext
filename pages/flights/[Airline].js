import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../component/BreadHero";
import Header from '../../component/Navbar'
import Footer from "../../component/Footer"
import Pageerror from "../../component/Pageerror"
import MetaHead from '../../component/MetaHead';
import { useRouter } from 'next/router';

export default function Airline(props) {

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
              MetaCanonical={`https://www.usairling.com/flights/${props.singleflight[0].url}-${props.singleflight[0].pageValue}`}
              MetaLocate={"en_US"}
              MetablogType={false}
              MetaSitename={"www.usairling.com"}
              MetaWeburl={"https://www.usairling.com"}
            />


            <div className='blogadda'>

              <div className="page-title page-title--small page-title--blog align-left" >
                <div className="container">
                  <div className="page-title__content">
                    <h1 className="page-title__name">{props.singleflight[0].metaTitle} </h1>
                    <BreadHero linkhtml={<>
                      <ul className='bradcum'>
                        <li> <Link href="/">Home</Link> </li>
                        <li className='breadcrumb-item active' aria-current="page">{props.singleflight[0].metaTitle}</li>
                      </ul>
                    </>} />
                  </div>

                </div>

              </div>
              <div className='popular-destination blogaddalist details full-w'>
                <Container>
                  <div className='blogaddalist-round about-uspage privacy__policy full-w pyblock-80 mb-5'>
                    <div className='blogaddalist-inner'>
                      <div className="blog-inner-box2">
                        {props.singleflight[0].contentData.length == 0 ?
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


export async function getStaticProps(context) {
  const { params } = context
  const pageurl = params.Airline

  var cityname = pageurl.split("-")[2]
  let actualURLParts = pageurl.split("-")

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "Airline",
    "pageValue": cityname,
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
    "url": actualURLParts[0] + '-' + actualURLParts[1],
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleflight: json.response },
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
    "contentId": "",
    "pageType": "",
    "pageValue": "",
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
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { Airline: post.url + "-" + post.pageValue }
    })
  })

  return {
    paths,
    fallback: true
  }
}