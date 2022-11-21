import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../component/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Header from '../../component/Navbar'
import Footer from "../../component/Footer"
import Image from "next/image"
import MetaHead from '../../component/MetaHead';


export default function baggagepolicy({ baggagepolicy }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <MetaHead
                MetaTitle={'Usairling | All Airlines Baggage Policy, Allowance & Fees Info'}
                MetaDescription="Find all airlines baggage policy guide on usairling. Check baggage fees, allowance, restricted items, and other information."
                MetaKeywords="baggage-policy"
                MetaCanonical={'https://www.usairling.com/baggage-policy'}
                MetaLocate={"en_US"}
                MetablogType={false}
                MetaSitename={"www.usairling.com"}
                MetaWeburl={"https://www.usairling.com"}
            />

            <Header />

            <div className='blogadda'>

                <div className="page-title page-title--small page-title--blog align-left" >
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">Baggage Policy </h1>
                        </div>
                    </div>
                    <BreadHero linkhtml={<><ul className='bradcum'> <li > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Baggage Policy</li> </ul></>} />
                </div>


                <div className='popular-destination blogaddalist full-w m-0 pb-2'>
                    <Container>
                        <Row className='about-uspage privacy__policy full-w pyblock-80 my-5' id="content" >
                            <Col md="12" >
                                <h2 className='mb-3'>What Exactly Is the Baggage Policy for Airlines?</h2>
                                <p>If you're curious about the airline's Baggage policies or luggage rules, keep reading for some information. The baggage policy is a collection of basic guidelines that specifies the types, weight, and dimensions of the bags that a passenger may bring on a flight.</p>
                                <p>Many consumers who purchase flights either have Baggageconfusion or are unaware of the baggage regulations. It can cause a problem at the airport or during the check-in procedure. You may read more about the Baggage policy here to understand how to prevent this from happening.</p>

                                <Row className='mt-3'>
                                    <Col lg="4" xs="12" className=' mb-3'>
                                        <div className='border p-3 h-100 rounded-xl'>
                                            <p className='mb-2'><b className='text-dark'>Baggage checked in:</b></p>
                                            <p>The only luggage that travelers are permitted to bring on board are those that have been checked in. There are certain restrictions on the checked-in luggage in terms of their size and weight. We load this luggage into the cargo area.</p>
                                        </div>
                                    </Col>

                                    <Col lg="4" xs="12" className=' mb-3'>
                                        <div className='border p-3 h-100 rounded-xl'>
                                            <p className='mb-2'><b className='text-dark'>Carry-on bags;</b></p>
                                            <p>Carry-on bags are allowed in the passenger section for passengers. It is generally known as hand luggage. It may be kept under the seat or in the overhead compartment.</p>
                                        </div>
                                    </Col>

                                    <Col lg="4" xs="12" className=' mb-3'>
                                        <div className='border p-3 h-100 rounded-xl'>
                                            <p className='mb-2'><b className='text-dark'>Types of Baggage?</b></p>
                                            <p>Regarding airlines, the luggage are divided into two groups, which are as follows:</p>
                                        </div>
                                    </Col>
                                </Row>

                                <h2 className='mt-5 mb-3'>How much luggage can I take on the Airline?</h2>
                                <p>When travelling, the most crucial item is the luggage. It is frequently viewed as a crucial aspect of travel. There are some guidelines that one must adhere to regarding the airline's luggage allowance, and they are as follows: <br /></p>
                                <ul>
                                    <li>Most airlines permit travellers to check one bag and bring one carry-on with them.</li>
                                    <li>The standard weight limit for checked baggage is 50 pounds, which is a very low threshold. If the travellers intend to go by air, they may carry this.</li>
                                    <li>The standard set by the airlines is around 62 linear inches as far as size constraints are concerned. This is the largest bag that may be brought on board, and travellers who do not want to pay extra to bring their luggage with them on the trip must abide by this rule.</li>
                                    <li>These are by far the statistics and sources that are used the most frequently when discussing luggage and airline baggage regulations.</li>
                                </ul>


                                <h2 className='mt-5 mb-3'>What items are allowed and not allowed on Flights?</h2>
                                <p>We have some excellent advice for you if you're wondering what products you should and shouldn't bring on a flight. This will contain information on what to bring and what to leave at home while travelling by plane.</p>

                                <div className='row mt-4 mb-3'>
                                    <div className='col-lg-6 col-12 mb-3'>
                                        <p className='mb-0'><b className='text-dark'>Allowed that Can be Carry?</b></p>
                                        <ul>
                                            <li>Liquids less than 100 ml.</li>
                                            <li>Medicines</li>
                                            <li>Aerosols</li>
                                            <li>Plants</li>
                                            <li>Food</li>
                                            <li>Alcohol</li>
                                            <li>Clothing</li>
                                            <li>Sports equipment and musical instruments.</li>
                                        </ul>
                                    </div>

                                    <div className='col-lg-6 col-12'>
                                        <p className='mb-0'><b className='text-dark'>Not-Allowed:</b></p>
                                        <ul>
                                            <li>Compressed gases</li>
                                            <li>Fireworks</li>
                                            <li>Toy weapons</li>
                                            <li>Any sharp object</li>
                                            <li>Samsung Galaxy Note 7</li>
                                            <li>Explosives</li>
                                            <li>Corrosives</li>
                                            <li>Flammable liquids</li>
                                            <li>Oxidizing materials</li>
                                            <li>Poison</li>
                                        </ul>
                                    </div>
                                </div>


                                <p>These are a few general considerations that travellers using any airline should keep in mind when they pack their bags. These are some typical items that are and are not permitted on airlines. In addition, you must abide by the airline's luggage policies.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>




            <section className="top_airlines_area baggage">
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={12}>
                            <h2 className="title title-border-bottom align-center offset-item animate">Our Baggage Policy Details</h2>
                        </Col>
                    </Row>

                    {baggagepolicy.length > 0 ? (
                        <Row className='alldeals-vi justify-content-center'>
                            {baggagepolicy.map((items, i) => (
                                <Col xs={12} md={6} lg={4} className="mb-3 px-2" key={i}>
                                    <Link href={`/baggage-policy/${items.titleUrl}`}>
                                        <a className="airplane-iconbx d-flex align-items-start h-100">
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
                        <p className='text-center'>No items found!</p>
                    )}
                </Container>
            </section>

            <Footer />

        </>
    )
}



export async function getStaticProps() {
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
            "pageType": "baggage-policy",
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
