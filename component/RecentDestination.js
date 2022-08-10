import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';


export default function RecentDestination(props) {
    const location = useRouter();



    return (
        <>
            {/* Recent destination  */}
            {props.data ?
                <div className="recent-destinations">
                    <div className="title-dlist">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="owl-row blogscroll-y">
                        {props.data.map((items, i) => (
                            <div className='item' key={i}>
                                <Link href={items.placelink}>
                                    <a className={"card d-flex flex-row" + (location.asPath === items.placelink ? ' active' : '')}>
                                        <div className="overflow-hidden img-hideradius position-relative">
                                            <div className="img-topwrap">
                                                <img className="card-img-top" src={items.placeimg} alt={items.place} />
                                            </div>
                                        </div>

                                        <div className="card-body flex-grow-1">
                                            <h5 className="card-title mb-0">{items.placetitle}</h5>
                                            <p className="card-text"><i className="bi bi-geo-alt"></i> {items.place}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>
                : ''}

            
            {/* Recent posts */}
            {props.recentblog ?
                <div className="recent-destinations">
                    <div className="title-dlist">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="owl-row blogscroll-y">
                        {props.recentblog.map((items, i) => (
                            <div className='item' key={i}> 
                                <Link href={props.langrecent === 'en' ? `/blog/${items.titleUrl}`: `/es/articulos/${items.titleUrl}`}>
                                    <a className={"card d-flex py-3 px-3 flex-row " + (
                                        location.asPath === (props.langrecent === 'en' ? `/blog/${items.titleUrl}`: `/es/articulos/${items.titleUrl}`)
                                      ? ' active' : '')}>
                                        <div>
                                            <i class="bi bi-chevron-double-right rpost-right"></i>
                                        </div>
                                        <div className="card-body flex-grow-1 pr-0 rpost-heading">
                                            <h5 className="card-title mb-0">{items.heading}</h5>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>
                : ''}
        </>

    )
}
