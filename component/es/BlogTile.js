import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import ReactPaginate from 'react-paginate';
 
export default function Blog(props) {

  const monthlist = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

  // Example items, to simulate fetching from another resources.
  const items = props.allbloglist;
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <Col xs={12} md={6} xl={4} className="mb-4">
              <div className='post postreadmore-card hover__box'>
                <div className='wrapper'>
                </div>
                <div className="post__info">
                                <div className="text-left text-secondary mb-2  text-sm">
                    <i className="bi bi-calendar4 mr-2"></i>{" "}
                    { (monthlist[new Date(item.posttime).getMonth()])  + " " + (new Date(item.posttime)).getDate() + ", " + (new Date(item.posttime)).getFullYear()}

                  </div>

                  <h3 className="post__title">{item.heading}</h3>
                  <p>{item.description}</p>
                  <Link href={`/es/articulos/${item.titleUrl}`}>
                    <a className='image_area_partition  btn mt-3'>Lee Mas</a>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
      </>
    );
  }



  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          nextLabel=">"
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link rounded-circle"
          nextClassName="page-item"
          nextLinkClassName="page-link rounded-circle"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination col-12 mt-2 flex-wrap pagination-cstm text-center justify-content-center"
          activeClassName="active"
        />
      </>
    );
  }



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
                    { (monthlist[new Date(items.posttime).getMonth()])  + " " + (new Date(items.posttime)).getDate() + ", " + (new Date(items.posttime)).getFullYear()}

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
                    <PaginatedItems itemsPerPage={9} />
                  }


                </Row> : <p className='text-center'>No se encontraron artículos !</p>

            }
          </Container>
        </div>
      </div>
    </>

  )
}


