import { useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '../../component/es/Footer';
import Header from "../../component/es/Navbar";

import BlogTile from '../../component/es/BlogTile';
import BreadHero from '../../component/es/BreadHero'
import MetaHead from '../../component/MetaHead';


export default function Blog(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <MetaHead
        MetaTitle={'Usairling | Obtenga las últimas actualizaciones es Artículos'}
        MetaDescription={"Obtenga las últimas actualizaciones en blogs para vuelos, automóviles, reservas de hoteles, etc."}
        MetaKeywords={"actualizaciones de reservas de vuelos, actualizaciones de reservas de automóviles, actualizaciones de reservas de hoteles"}
        MetaCanonical={'https://www.usairling.com/es/articulos'}
        MetaLocate={"es_ES"}
        MetablogType={true}
        MetaSitename={"www.usairling.com"}
        MetaWeburl={"https://www.usairling.com"} />

      <Header />

      <div className='blogadda'>

        <div className="page-title page-title--small page-title--blog align-left" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Artículos </h1>
              <p className="page-title__slogan">Deja que nuestros expertos te inspiren</p>
            </div>

          </div>
          <BreadHero linkhtml={<>
            <ul className='bradcum'>
              <li><Link href="/es/">Casa</Link> </li>
              <li className='breadcrumb-item active' aria-current="page">Artículos</li>
            </ul>
          </>} />
        </div>

        <div className='popular-destination blogaddalist full-w'>
          <BlogTile allbloglist={props.allbloglist} />
        </div>
      </div>

      <Footer />
    </>


  )
}



export async function getStaticProps() {
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
  return {
    props: { allbloglist: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

