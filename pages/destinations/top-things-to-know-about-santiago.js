import React, { useEffect, useState } from 'react'

import Link from "next/link";
import BreadHero from "../../component/BreadHero";
import Header from '../../component/Navbar';
import Footer from "../../component/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentDestination from '../../component/RecentDestination';
import MetaHead from '../../component/MetaHead';

export default function SantiagoDeals(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Header />

      <MetaHead 
        MetaTitle={'Usairling | Top things to know about Santiago'}
        MetaDescription={""}
        MetaKeywords={""}
        MetaCanonical={'https://www.usairling.com/destinations/top-things-to-know-about-santiago'} 
        MetaLocate={"en_US"} 
        MetablogType={false}
        MetaSitename={"www.usairling.com"}
        MetaWeburl={"https://www.usairling.com"}
      />
 

      <div className="page-title page-title--small align-left">
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Top things to know about Santiago</h1>
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
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <div className='blogaddalist-round about-uspage privacy__policy full-w pyblock-80 mb-5'>
                <div className='blogaddalist-inner'>
                  <div className="blog-inner-box2 destination-single">
                    <p>Santiago is one of the most famous and largest cities in Chile and is considered the capital. It is also the grand heart of the old colonial core and has become the home of two neoclassical landmarks. It is also surrounded by the snow-capped Andes and the Chilean coast range. You can reserve the <strong>Santiago flight</strong> and fly from anywhere across the globe to explore this beautiful city. For this, you can check the below information. </p>

                    <p className='font-weight-bold mt-4 mb-0'>Best time to explore Santiago:</p>

                    <p>To have a wonderful experience, you can travel to Santiago between September to November or from March to May. It is marked as a spring season that gives you pleasant weather to explore the various places.</p>

                    <p className='font-weight-bold mt-4 mb-0'>Top places to travel in Santiago:</p>

                    <p>If you are heading on to Santiago, you can know some places that you can visit before finding the <strong>best Santiago flights</strong> from your destination. Hence, you can read further to grab all the details:</p>

                    <p className='font-weight-bold mt-4 mb-0'>San Cristobal hill:</p>

                    <p>It is the third highest peak in Santiago city as it is the hill in northern Santiago. It is 850m from AMSL and about 300m above from the rest of Santiago. St Christopher named this hill to use as a landmark. </p>

                    <p className='font-weight-bold mt-4 mb-0'>Museum of memory and human rights:</p>

                    <p>It is considered the known museum in Chile as it devotes to the victims of human rights that were violated during the civic-military regime which is held by Augusto Pinochet, and also this museum has become part of government commemoration.</p>

                    <p className='font-weight-bold mt-4 mb-0'>Chilean Museum of pre-Columbian art:</p>

                    <p>It is the art museum of Chile that devotes to the study and display of pre-Columbian artifacts and artworks. It is situated in the city center of Santiago and Chile that contains the premises of a private collection of pre-Columbian artifacts.</p>

                    <p className='font-weight-bold mt-4 mb-0'>Central market:</p>

                    <p>It is the central market of Santiago that was opened in 1872, and Fermin Vivaceta was the incharge when it was constructed. Edward woods and Charles Henry driver was the designer of this market. This market is situated in the housed building at which it is mainly of the cast-iron roof. You can know the <strong>Santiago flight time</strong> for the travel and explore this beautiful market for the shopping.</p>

                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <RecentDestination
                title="Recent Destinations"
                data={
                  [
                    {
                      'place': 'Aruba',
                      'placeimg': '/images/tour-destination-1.jpg',
                      'placelink': '/destinations/sumptuous-deals-to-aruba',
                      'placetitle': 'Sumptuous Deals to Aruba'
                    },
                    {
                      'place': 'Cartagena',
                      'placeimg': '/images/tour-destination-2.jpg',
                      'placelink': '/destinations/sumptuous-deals-to-cartagena',
                      'placetitle': 'Sumptuous Deals to Cartagena'
                    },
                    {
                      'place': 'Santiago',
                      'placeimg': '/images/tour-destination-3.jpg',
                      'placelink': '/destinations/top-things-to-know-about-santiago',
                      'placetitle': 'Top things to know about Santiago'
                    },
                    {
                      'place': 'Quito',
                      'placeimg': '/images/tour-destination-4.jpg',
                      'placelink': '/destinations/top-things-to-learn-about-quito',
                      'placetitle': 'Top things to learn about Quito'
                    },
                    {
                      'place': 'Territory',
                      'placeimg': '/images/tour-destination-5.jpg',
                      'placelink': '/destinations/explore-the-bolivian-territory',
                      'placetitle': 'Explore the Bolivian Territory'
                    }
                  ]
                }
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  )
}

