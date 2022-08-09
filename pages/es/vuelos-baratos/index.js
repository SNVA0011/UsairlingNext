import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../../component/es/BreadHero'
import { Button, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../../component/es/Navbar'
import Footer from '../../../component/es/Footer'
import Image from 'next/image'

export default function Flights(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>
          Usairling | Lista de vuelos baratos, boletos, ofertas y descuentos
        </title>
        <meta name="description" content="Aproveche vuelos baratos y ofertas de tarifas aéreas para todos los boletos de avión. Busque y compare ofertas de última hora y reserve vuelos con USAirling." />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.usairling.com/es/vuelos-baratos'} />
      </Head>

      <Header />

      <div className="blogadda">
        <div className="page-title page-title--small page-title--blog align-left">
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Vuelos Baratos</h1>
            </div>
          </div>



          <BreadHero
            linkhtml={
              <>
                <ul className="bradcum">
                  <li>
                    <Link href="/es/">Casa</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Vuelos Baratos
                  </li>
                </ul>
              </>
            }
          />



        </div>

        <div className="popular-destination blogaddalist full-w m-0 pb-2">
          <Container className=" pb-2">
            <Row className="about-uspage privacy__policy full-w pyblock-80 my-5"
              id="content">
              <Col md="12">
                <h2>¿Cómo puedo encontrar vuelos baratos hoy?</h2>
                <p>
                  Cuando tienes alguna urgencia y buscas un vuelo barato de inmediato,
                  USAirling te ofrece vuelos de última hora a cualquier parte del mundo. Puede
                  obtener fácilmente estas ofertas de última hora para volar a la ciudad
                  seleccionada a una tarifa de vuelo más barata una vez que se comunique con
                  USAirling. Además, se le proporcionarán muchas ofertas y vuelos con
                  descuento para que pueda optar por el que más le convenga según sus
                  necesidades. Revisa la lista que obtendrás para reservar un vuelo para tu
                  ciudad y llámanos en cualquier momento para hacer reservas con un gran
                  ahorro
                </p>
                <h2 className="mt-4 mb-2">
                  ¿Qué meses ofrecen las mejores ofertas en vuelos?
                </h2>
                <p>
                  Depende completamente de la ubicación de su viaje previsto. Sin embargo,
                  puede contar con pagar más por sus boletos de avión durante el período de
                  mayor actividad de viaje de un destino. porque más personas están haciendo
                  el viaje a la ubicación. Por lo tanto, la temporada baja es el momento
                  perfecto para reservar un vuelo barato. Además, es fundamental estar al
                  tanto de las condiciones climáticas cuando se va fuera de temporada.
                </p>
                <p className="mt-3 mb-0">
                  <strong>Los mejores destinos de viaje económicos para 2022-23</strong>
                </p>
                <ul className="row mb-0">
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    San Dieg
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Costa Rica
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    San Francisco
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Montenegro
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Orlando
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Bogota
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Georgia
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Cancun
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Houston
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Bali
                  </li>
                  <li className="col-12 col-sm-6 col-md-4 col-xl-3">
                    Rio de Janeiro
                  </li>
                </ul>


                <h2 className="mt-4 mb-2">
                  ¿Cómo puedo obtener vuelos baratos en cualquier lugar?&nbsp;
                </h2>
                <p>
                  Utilice la función Explorar de USAirling en el sitio web para encontrar
                  vuelos asequibles a cualquier destino del mundo. Puede obtener los mejores
                  precios de vuelos de hoy y comprar sus boletos al precio más bajo. Incluso
                  usted puede obtener fácilmente todas las tarifas no publicadas con una sola
                  llamada telefónica. Además, USAirling le garantiza la mejor tarifa aérea
                  para su reserva de viaje de última hora. Puede viajar a cualquier parte del
                  mundo aprovechando los descuentos actuales de las aerolíneas, ya sea que
                  esté buscando boletos de vuelos nacionales o internacionales con ofertas de
                  bajo costo.&nbsp;
                </p>
                <h2 className="mt-4 mb-2">
                  ¿Cómo encuentro la mejor oferta para los aeropuertos cercanos?
                </h2>
                <p>
                  Mediante el uso de las herramientas en su sitio web o poniéndose en contacto
                  con el soporte de USAirling, USAirling hace que sea simple y directo para
                  usted encontrar el costo más bajo para un aeropuerto local. Puede optar por
                  buscar el aeropuerto más cercano hasta 50 millas de distancia de la
                  ubicación elegida. Puede buscar una oferta de vuelos económicos para ese
                  aeropuerto en particular con este método. Además, puede descubrir una lista
                  de todos los aeropuertos locales e internacionales cercanos simplemente
                  escribiendo el nombre de la ciudad.
                </p>
              </Col>

            </Row>
          </Container>
        </div>
      </div>

      <section className="top_airlines_area">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <h2 className="title title-border-bottom align-center offset-item animate">
                Nuestro destino
              </h2>



              {props.allflights.filter((items) => items.pageType === 'CityS').length > 0 ? (
                <Row className="alldeals-vi justify-content-center">
                  {props.allflights.filter((items) => items.pageType === 'CityS').map((items, i) => (
                    <Col xs={12} lg={4} sm={6} className="mb-4">
                      <Link href={`/es/vuelos-baratos/${items.url}-${items.pageValue}`}>
                        <a className="airplane-iconbx sm d-flex align-items-center h-100">
                          <div className="cities__thumb hover__box__thumb">
                            <Image
                              src="/images/airplane-icon.png"
                              alt="airlineone"
                              width={58}
                              height={58}
                              layout="responsive"
                            />
                          </div>
                          <div className="cities__info flex-grow-1">
                            <h3 className="cities__capital">
                              {items.pageName}-{items.pageValue}
                            </h3>
                          </div>
                        </a>
                      </Link>
                    </Col>
                  ))}
                </Row>
              ) : (
                <p className='text-center'>No se encontraron artículos !</p>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var raw = JSON.stringify({
    contentId: '',
    pageType: '',
    pageValue: '',
    pageName: '',
    metaTitle: '',
    metaKeyword: '',
    metaDesc: '',
    otherMeta: '',
    dealCode: '',
    dealTitle: '',
    contentTitle: '',
    contentData: '',
    contentImage: '',
    siteId: '145',
    status: '',
    count: '',
    url: '',
    modifyBy: '',
    modifyDate: '',
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  const res = await fetch(
    'https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876',
    requestOptions,
  )
  const json = await res.json()
  return {
    props: { allflights: json.response },
  }
}
