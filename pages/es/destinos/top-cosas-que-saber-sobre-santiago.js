import React, { useEffect, useState } from 'react'

import Link from "next/link";
import BreadHero from "../../../component/es/BreadHero";
import Header from '../../../component/es/Navbar';
import Footer from "../../../component/es/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentDestination from '../../../component/RecentDestination';
import MetaHead from "../../../component/MetaHead";


export default function SantiagoDeals(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Header />

      <MetaHead
        MetaTitle={'Usairling | Lo mejor que debes saber sobre Santiago'}
        MetaDescription={""}
        MetaKeywords={""}
        MetaCanonical={'https://www.usairling.com/es/destinos/top-cosas-que-saber-sobre-santiago'}
        MetaLocate={"es_ES"}
        MetablogType={false}
        MetaSitename={"www.usairling.com"}
        MetaWeburl={"https://www.usairling.com"}
      />

      <div className="page-title page-title--small align-left">
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Lo mejor que debes saber sobre Santiago</h1>
            <BreadHero linkhtml={<>
              <ul className='bradcum'>
                <li><Link href="/es/">Casa</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Detalles del destino</li>
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
                    <p>
                      Santiago es una de las ciudades más famosas y más grandes de Chile y es
                      considerada la capital. También es el gran corazón del antiguo núcleo
                      colonial y se ha convertido en el hogar de dos hitos neoclásicos. También
                      está rodeada por los Andes nevados y la cordillera de la costa chilena.{" "}
                      Puedes reservar el&nbsp; <strong>vuelo a Santiago</strong> &nbsp;y volar
                      desde cualquier parte del mundo para explorar esta hermosa ciudad. Para
                      ello, puede consultar la siguiente información.&nbsp;
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">
                      Mejor época para explorar Santiago:
                    </p>
                    <p>
                      Para tener una experiencia maravillosa, puedes viajar a Santiago entre
                      septiembre a noviembre o de marzo a mayo. Está marcado como una estación de
                      primavera que le brinda un clima agradable para explorar los diversos
                      lugares.
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">
                      Los mejores lugares para viajar en Santiago:
                    </p>
                    <p>
                      Si vas a Santiago, puedes conocer algunos lugares que puedes visitar antes
                      de encontrar los&nbsp; <strong>mejores vuelos a Santiago</strong>{" "}
                      &nbsp;desde tu destino. Por lo tanto, puede seguir leyendo para obtener
                      todos los detalles:
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">Cerro San Cristóbal:</p>
                    <p>
                      Es el tercer pico más alto de la ciudad de Santiago, ya que es el cerro en
                      el norte de Santiago. Dista 850m de AMSL y unos 300m más arriba del resto de
                      Santiago. San Cristóbal nombró a esta colina para usarla como punto de
                      referencia.&nbsp;
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">
                      Museo de la memoria y los derechos humanos:
                    </p>
                    <p>
                      Es considerado el museo conocido en Chile por estar dedicado a las víctimas
                      de los derechos humanos violados durante el régimen cívico-militar que
                      ostenta Augusto Pinochet, además este museo ha pasado a formar parte de la
                      conmemoración gubernamental.
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">
                      Museo Chileno de Arte Precolombino:
                    </p>
                    <p>
                      Es el museo de arte de Chile que se dedica al estudio y exhibición de
                      artefactos y obras de arte precolombinos. Está situado en el centro de la
                      ciudad de Santiago y Chile que contiene las instalaciones de una colección
                      privada de artefactos precolombinos.
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">Mercado Central:</p>
                    <p>
                      Es el mercado central de Santiago que fue inaugurado en 1872, y Fermín
                      Vivaceta fue el encargado cuando se construyó. Edward Woods y el conductor
                      Charles Henry fueron los diseñadores de este mercado. Este mercado está
                      situado en el edificio de viviendas en el que es principalmente del techo de
                      hierro fundido. Puede conocer el&nbsp;
                      <strong>tiempo de vuelo de Santiago</strong> &nbsp;para el viaje y explorar
                      este hermoso mercado para ir de compras.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <RecentDestination
                title="Destinos Recientes"
                data={
                  [
                    {
                      'place': 'Aruba',
                      'placeimg': '/images/tour-destination-1.jpg',
                      'placelink': '/es/destinos/suntuosas-ofertas-a-aruba',
                      'placetitle': 'Ofertas suntuosas a Aruba'
                    },
                    {
                      'place': 'Cartagena',
                      'placeimg': '/images/tour-destination-2.jpg',
                      'placelink': '/es/destinos/suntuosos-ofertas-a-cartagena',
                      'placetitle': 'Ofertas suntuosas a Cartagena'
                    },
                    {
                      'place': 'Santiago',
                      'placeimg': '/images/tour-destination-3.jpg',
                      'placelink': '/es/destinos/top-cosas-que-saber-sobre-santiago',
                      'placetitle': 'Lo mejor que debes saber sobre Santiago'
                    },
                    {
                      'place': 'Quito',
                      'placeimg': '/images/tour-destination-4.jpg',
                      'placelink': '/es/destinos/top-cosas-para-aprender-sobre-quito',
                      'placetitle': 'Lo mejor para aprender sobre Quito'
                    },
                    {
                      'place': 'Territorio',
                      'placeimg': '/images/tour-destination-5.jpg',
                      'placelink': '/es/destinos/explora-el-territorio-boliviano',
                      'placetitle': 'Explora el territorio boliviano'
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

