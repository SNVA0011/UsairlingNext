import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../../component/es/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../../../component/es/Navbar'
import Footer from "../../../component/es/Footer"
import Image from "next/image"


export default function politicadeequipaje({baggagepolicy}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    return (
        <>
            <Head>
                <title>Usairling | Política de equipaje, franquicia y tarifas de todas las aerolíneas</title>
                <meta name="description" content="Encuentre la guía de políticas de equipaje de todas las aerolíneas en usairling. Consulte las tarifas de equipaje, la franquicia, los artículos restringidos y otra información." />
                <meta name="keywords" content="politica-de-equipaje" />
                <link rel="canonical" href={'https://www.usairling.com/es/politica-de-equipaje'} />
            </Head>

            <Header />

            <div className='blogadda'>

                <div className="page-title page-title--small page-title--blog align-left" >
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">Politica de equipaje</h1>
                        </div>
                    </div>
                    <BreadHero linkhtml={<><ul className='bradcum'> 
                        <li><Link href="/es/">Casa</Link></li> 
                        <li className='breadcrumb-item active' aria-current="page">Politica de equipaje</li></ul></>} />
                </div>


                <div className='popular-destination blogaddalist full-w m-0 pb-2'>
                    <Container>
                        <Row className='about-uspage privacy__policy full-w pyblock-80 my-5' id="content" >
                            <Col md="12" >
                            <h2 className='mb-3'>¿Cuál es exactamente la política de equipaje de las aerolíneas?</h2>
                                 <p>Si tiene curiosidad acerca de las políticas de equipaje o las reglas de equipaje de la aerolínea, siga leyendo para obtener más información. La política de equipaje es un conjunto de pautas básicas que especifica los tipos, el peso y las dimensiones de las maletas que un pasajero puede llevar en un vuelo.</p>
                                 <p>Muchos consumidores que compran vuelos tienen confusión sobre el equipaje o desconocen las normas de equipaje. Puede causar un problema en el aeropuerto o durante el procedimiento de check-in. Puede leer más sobre la política de equipaje aquí para comprender cómo evitar que esto suceda.</p>

                                <Row className='mt-3'> 
                                    <Col lg="4" xs="12" className=' mb-3'>
                                        <div className='border p-3 h-100 rounded-xl'>
                                        <p className='mb-2'><b className='text-dark'>Equipaje facturado:</b></p>
                                         <p>El único equipaje que los viajeros pueden llevar a bordo es el que se ha facturado. Existen ciertas restricciones sobre el equipaje facturado en cuanto a su tamaño y peso. Cargamos este equipaje en el área de carga.</p>
                                        </div>
                                    </Col>

                                    <Col lg="4" xs="12" className=' mb-3'>
                                        <div className='border p-3 h-100 rounded-xl'>
                                        <p className='mb-2'><b className='text-dark'>Bolsas de mano;</b></p>
                                         <p>Las bolsas de mano están permitidas en la sección de pasajeros para pasajeros. Generalmente se le conoce como equipaje de mano. Puede guardarse debajo del asiento o en el compartimento superior.</p>
                                        </div>
                                    </Col>

                                    <Col lg="4" xs="12" className=' mb-3'>
                                        <div className='border p-3 h-100 rounded-xl'>
                                        <p className='mb-2'><b className='text-dark'>¿Tipos de Equipaje?</b></p>
                                         <p>En cuanto a las compañías aéreas, el equipaje se divide en dos grupos, que son los siguientes:</p>
                                        </div>
                                    </Col>
                                </Row>
 
                                <h2 className='mt-5 mb-3'>¿Cuánto equipaje puedo llevar en la Aerolínea?</h2>
                                 <p>Al viajar, el elemento más importante es el equipaje. Con frecuencia se considera un aspecto crucial de los viajes. Hay algunas pautas que uno debe cumplir con respecto a la franquicia de equipaje de la aerolínea, y son las siguientes: <br /></p>
                                <ul>
                                <li>La mayoría de las aerolíneas permiten que los viajeros facturen una maleta y traigan un equipaje de mano.</li>
                                     <li>El límite de peso estándar para el equipaje facturado es de 50 libras, que es un umbral muy bajo. Si los viajeros tienen la intención de ir en avión, pueden llevar esto.</li>
                                     <li>El estándar establecido por las aerolíneas es de alrededor de 62 pulgadas lineales en lo que respecta a las restricciones de tamaño. Esta es la bolsa más grande que se puede llevar a bordo, y los viajeros que no deseen pagar más para llevar su equipaje en el viaje deben cumplir con esta regla.</li>
                                     <li>Estas son, con mucho, las estadísticas y las fuentes que se utilizan con más frecuencia cuando se analizan las regulaciones de equipaje y de las aerolíneas.</li>
                                </ul>


                                <h2 className='mt-5 mb-3'>¿Qué artículos están permitidos y no permitidos en los vuelos?</h2>
                                 <p>Tenemos excelentes consejos para usted si se pregunta qué productos debe y no debe llevar en un vuelo. Este contendrá información sobre qué llevar y qué dejar en casa mientras viaja en avión.</p>

                                <div className='row mt-4 mb-3'>
                                    <div className='col-lg-6 col-12 mb-3'>
                                        <p className='mb-0'><b className='text-dark'>Permitido que se puede llevar?</b></p>
                                        <ul>
                                             <li>Líquidos de menos de 100 ml.</li>
                                             <li>Medicamentos</li>
                                             <li>Aerosoles</li>
                                             <li>Plantas</li>
                                             <li>Comida</li>
                                             <li>Alcohol</li>
                                             <li>Ropa</li>
                                             <li>Equipamiento deportivo e instrumentos musicales.</li>
                                        </ul>
                                    </div>

                                    <div className='col-lg-6 col-12'>
                                        <p className='mb-0'><b className='text-dark'>No permitido:</b></p>
                                        <ul>
                                        <li>Gases comprimidos</li>
                                             <li>Fuegos artificiales</li>
                                             <li>Armas de juguete</li>
                                             <li>Cualquier objeto afilado</li>
                                             <li>Samsung Galaxy Nota 7</li>
                                             <li>Explosivos</li>
                                             <li>Corrosivos</li>
                                             <li>Líquidos inflamables</li>
                                             <li>Materiales oxidantes</li>
                                             <li>Veneno</li>
                                        </ul>
                                    </div>
                                </div>


                                <p>Estas son algunas consideraciones generales que los viajeros que usan cualquier aerolínea deben tener en cuenta cuando empacan sus maletas. Estos son algunos artículos típicos que están y no están permitidos en las aerolíneas. Además, debe cumplir con las políticas de equipaje de la aerolínea.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>




            <section className="top_airlines_area baggage">
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={12}>
                            <h2 className="title title-border-bottom align-center offset-item animate">Detalles De Nuestra Política De Equipaje</h2>
                        </Col>
                    </Row>
 
                    {baggagepolicy.length > 0 ? (
                        <Row className='alldeals-vi justify-content-center'>
                            {baggagepolicy.map((items, i) => (
                                <Col xs={12} md={6} lg={4} className="mb-3 px-2" key={i}>
                                    <Link href={`/es/politica-de-equipaje/${items.titleUrl}`}>
                                        <a className="airplane-iconbx d-flex align-items-center h-100"> 
                                            <div className="cities__thumb hover__box__thumb">
                                                <Image
                                                    src="/images/airplane-icon.png"
                                                    alt="airlineone"
                                                    width={58}
                                                    height={58}
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div className="cities__info flex-grow-1 text-left pl-3">
                                                <h3 className="cities__capital text-left p-0">
                                                    {items.heading}
                                                </h3> 
                                                <span className='badge badge-secondary baggagebadge'>{items.categoryName}</span>
                                            </div>
                                        </a>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p className='text-center'>¡No se encontraron artículos!</p>
                    )}
                </Container>
            </section>

            <Footer />

        </>
    )
}




export async function getServerSideProps() {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var raw = JSON.stringify(
        {
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
            "pageType": "politica-de-equipaje",
            "extraTag": "",
            "tfnHeader": "",
            "tfnFooter1": "",
            "tfnFooter2": "",
            "tfnFooter3": "",
            "tfnPopup": ""
        })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }

    const res = await fetch(
        'http://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876',
        requestOptions,
    )
    const json = await res.json()
    return {
        props: { baggagepolicy: json.response },
    }
}
