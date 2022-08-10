import React from 'react';
import Link from "next/link";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

export default function DestinationLists(props) {
    const options = {
        loop: false,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
        autoplay: true, 
        autoplayTimeout:2500, 
        responsive: {
            0: {
                items: 1,
                margin: 10, 
            },
            476: {
                items: 2,
                margin: 10, 
            },
            992: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 4,
                margin: 20,
            }
        }
    };




    return (
        <>
            {props.data ?
                <div className="destination-list">
                    <div className="container">
                        <div className="title-dlist">
                            <p>{props.title}</p>
                            <h2>{props.subtitle}</h2>
                        </div>
                        <div className="owl-row ls"> 

                        <br></br>
                            <OwlCarousel options={options}>
                                {props.data.map((items, i) => (
                                    <div className='item' key={i}>
                                        <div className="card">
                                            <Link href={items.placelink}>
                                                <a>
                                                    <div className="overflow-hidden img-hideradius position-relative">
                                                        <div className="img-topwrap">
                                                            <img className="card-img-top" src={items.placeimg} alt={items.place} />
                                                        </div>
                                                        <p className="card-text"><i className="bi bi-geo-alt"></i> {items.place}</p>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="card-body">
                                                <Link href={items.placelink}>
                                                    <a>
                                                        <h5 className="card-title mb-0">{items.placetitle}</h5>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </OwlCarousel>
 
                        </div>

                    </div>
                </div>
                : ''}
        </>

    )
}

