import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"


export default function Blog(props) {

  const monthlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='blogadda'>

        <div className='popular-destination blogaddalist full-w mb-5'>
          <Container>
            {
              props.allbloglist?.length > 0 ?
                <Row>

                  {props.showitem ?
                    props.allbloglist.slice(0, props.showitem).filter((items) => items.status === 'Active').map((items, i) => (
                      <Col xs={12} md={6} xl={4} className="mb-3">
                        <div className='post postreadmore-card hover__box'>
                          <div className='wrapper'>
                          </div>
                          <div className="post__info"> 
                            <div className="text-left text-secondary mb-2  text-sm">
                              <i className="bi bi-calendar4 mr-2"></i>{" "}
                              {(monthlist[new Date(items.posttime).getMonth()]) + " " + (new Date(items.posttime)).getDate() + ", " + (new Date(items.posttime)).getFullYear()}
                            </div>
                            <h3 className="post__title">{items.heading}</h3>
                            <p>{items.description}</p>
                            <Link href={`/es/articulos/${items.titleUrl}`}>
                              <a className='image_area_partition  btn mt-3'>Lee Mas</a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))
                    :
                    props.allbloglist.filter((items) => items.status === 'Active').map((items, i) => (
                      <Col xs={12} md={6} xl={4} className="mb-4">
                        <div className='post postreadmore-card hover__box'>
                          <div className='wrapper'>
                          </div>
                          <div className="post__info">
                            {/* <ul className="post__category">
                              <li>  <span>{(new Date(items.posttime)).getDate() + "/" + ((new Date(items.posttime)).getMonth() + 1) + "/" + (new Date(items.posttime)).getFullYear()}</span></li>
                            </ul> */}
                            <div className="text-left text-secondary mb-2  text-sm">
                              <i className="bi bi-calendar4 mr-2"></i>{" "}
                              {(monthlist[new Date(items.posttime).getMonth()]) + " " + (new Date(items.posttime)).getDate() + ", " + (new Date(items.posttime)).getFullYear()}
                            </div>
                            <h3 className="post__title">{items.heading}</h3>
                            <p>{items.description}</p>
                            <Link href={`/es/articulos/${items.titleUrl}`}>
                              <a className='image_area_partition  btn mt-3'>Lee Mas</a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))
                  }


                </Row> : <p className='text-center'>No se encontraron artículos !</p>

            }
          </Container>
        </div>
      </div>
    </>

  )
}


