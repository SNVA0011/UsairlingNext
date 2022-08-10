import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import BreadHero from "../../../component/es/BreadHero";
import Header from '../../../component/es/Navbar';
import Footer from "../../../component/es/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentDestination from '../../../component/RecentDestination';

export default function QuitoDeals(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Header />

      <Head>
        <title>Usairling | Las mejores cosas para aprender sobre Quito</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.usairling.com/es/destinos/top-cosas-para-aprender-sobre-quito" />
      </Head>

      <div className="page-title page-title--small align-left">
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Las mejores cosas para aprender sobre Quito</h1>
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
                      Quito es la capital de Ecuador que está situada a una altitud de 2850m en
                      las estribaciones de los Andes. Es bien conocido por su rico y conservado
                      centro colonial y otras estructuras que combinan los estilos europeo,
                      morisco e indígena. Puede explorar varios lugares y leer más para saber más
                      sobre todos los lugares para reservar el asiento de vuelo desde su ubicación
                      preferida en consecuencia.
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">Mejor época para viajar a Quito:</p>
                    <p>
                      Si desea viajar a Quito, puede realizar el viaje durante la estación seca,
                      entre junio y septiembre. El clima de Quito es el más adecuado para el viaje
                      y disfrutar de los hermosos lugares.
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">
                      Los mejores lugares para explorar en Quito:
                    </p>
                    <p>
                      Es la extensión de terreno propiedad de la prefectura que forma parte de
                      Pichincha, Ecuador. Contiene el monumento al ecuador que describe la
                      ubicación exacta del ecuador que muestra la misión geodésica realizada en el
                      siglo XVIII. Es un monumento de 30 metros de altura que fue construido entre
                      1979 y 1982.&nbsp;
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">el bollo:</p>
                    <p>
                      Es un cerro de origen volcánico de 200 metros de altura formado por suelo de
                      loess, situado en el centro y sur de Quito. El nombre original era Yavirac,
                      que era usado por los habitantes aborígenes de Quito. Anteriormente, había
                      un templo en la cima de la colina, y los indios adoraban al sol antes de que
                      los conquistadores españoles lo destruyeran.&nbsp;
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">TeleferiQo Cable car:</p>
                    <p>
                      Es la telecabina que va desde el borde del centro de la ciudad hasta el lado
                      este del volcán Pichincha para mirar la cruz del cerro. Es considerado como
                      uno de los elevadores aéreos más altos del mundo que se eleva de 3117m a
                      3945m, y toma casi 20 minutos de caminata.
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">Gran cuadrado:</p>
                    <p>
                      Es una de las principales y céntricas plazas públicas de Quito, Ecuador.{" "}
                      Denota el poder ejecutivo de la nación y se considera la plaza central de la
                      ciudad. Uno de los elementos principales es el monumento que muestra el
                      primer grito de independencia de la audiencia real el 10 de agosto de 1809
                      de la monarquía española.&nbsp;
                    </p>
                    <p className="font-weight-bold mt-4 mb-0">Capilla del hombre:</p>
                    <p>
                      Es un museo de arte especialmente diseñado que se dedica a la gente de
                      América Latina. Este edificio brinda una atmósfera relacionada con la obra
                      de arte de Guayasamín que funciona como una historia del sufrimiento humano
                      y la violencia en América Latina y el mundo. Fue diseñado por oswaldo
                      guayasamin y handel guayasamin.
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

