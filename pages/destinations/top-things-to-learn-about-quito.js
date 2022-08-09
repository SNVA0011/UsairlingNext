import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import BreadHero from "../../component/BreadHero";
import Header from '../../component/Navbar'
import Footer from "../../component/Footer"
import { Container } from 'react-bootstrap';

export default function QuitoDeals(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Header />

      <Head>
        <title>Usairling | Top things to learn about Quito</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.usairling.com/destinations/top-things-to-learn-about-quito" />
      </Head>

      <div className="page-title page-title--small align-left">
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Top things to learn about Quito</h1>
            <BreadHero linkhtml={<>
              <ul className='bradcum'>
                <li> <Link href="/">Home</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Destination details</li>
              </ul>
            </>} />
          </div>
        </div>
      </div>

      <div className='popular-destination blogaddalist details full-w'>
        <Container >
          <div className='blogaddalist-round about-uspage privacy__policy full-w pyblock-80 mb-5'>
            <div className='blogaddalist-inner'>
              <div className="blog-inner-box2 destination-single">
                <p>Quito is the capital of Ecuador that is situated at an altitude of 2850m in the Andean foothills. It is well known for its rich and preserved colonial center and other structures that put together the European, Moorish, and indigenous styles. You can explore various places and read further to know more about all the places to reserve the flight seat from your preferred location accordingly.</p>

                <p className='font-weight-bold mt-4 mb-0'>Best time to travel to Quito:</p>

                <p>If you want to travel to Quito, you can make the trip during the dry season, between June and September. The climate of Quito is most suitable for the trip and enjoying the beautiful places.</p>

                <p className='font-weight-bold mt-4 mb-0'>Best places to explore in Quito:</p>

                <p>It is the tract of land owned by the prefecture that is part of Pichincha, Ecuador. It contains the monument to the equator that describes the equator's exact location that shows the geodesic mission held in the eighteen century. It is a 30-meter tall monument that was built between 1979 to 1982. </p>

                <p className='font-weight-bold mt-4 mb-0'>The bun:</p>

                <p>It is a 200-meter high hill of volcanic origin made up of loess soil, situated in central and southern Quito. The original name was Yavirac, which was used by the aboriginal inhabitants of Quito. Earlier, there was a temple at the top of the hill, and Indians worshiped the sun when before the Spanish conquistadors destroyed it. </p>

                <p className='font-weight-bold mt-4 mb-0'>TeleferiQo Cable car:</p>

                <p>It is the gondola lift that runs from the edge of the city center to the east side of Pichincha volcano to look at the cross hill. It is considered as one of the highest aerial lifts in the world that upsurge from 3117m to 3945m, and it takes almost 20 minutes of walking.</p>

                <p className='font-weight-bold mt-4 mb-0'>Big square:</p>

                <p>It is one of the main and central public squares of Quito, Ecuador. It denotes the nation's executive power and is considered the central square of the city. One of the main features is the monument that shows the first cry of independence of the royal audience on August 10, 1809, from the Spanish monarchy. </p>

                <p className='font-weight-bold mt-4 mb-0'>Chapel of man:</p>

                <p>It is a purpose-built art museum that dedicates to the people of Latin America. This building provides an atmosphere related to the artwork of Guayasamin that work as a history of human suffering and violence in Latin America and the world. It was designed by the oswaldo guayasamin and handel guayasamin.</p>

              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  )
}

