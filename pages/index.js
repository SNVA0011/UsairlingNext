import Head from 'next/head'
import PopularDestinations from '../component/PopularDestination'
import Enginebox from '../component/Enginebox'
import Footer from '../component/Footer'
import Header from '../component/Navbar'
import BlogTile from '../component/BlogTile';
import Link from "next/link"
import DestinationLists from '../component/DestinationLists'


export default function Home(props) {
  return (
    <>

      <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
      <title>Usairling | Book Low Fares Flights Tickets & Rental Cars</title>
      <meta name="description" content="Explore cheap airline tickets with Usairling. We offer cheap flight tickets, hotels and car rental deals for South America. Book now and travel the world for less." />
      <meta name="keywords" content="Low Fares Flights Tickets, Low Fares Car Rental, Book Low fare hotels" />
      <link rel="canonical" href={'https://www.usairling.com/'} />
      <link rel="alternate" href={'https://www.usairling.com/'} />
      <meta name="title" key="title" content={'Usairling | Book Low Fares Flights Tickets & Rental Cars'} />
      <meta property="og:site_name" content={"Usairling"} />
      <meta property="og:title" key="og:title" content={'Usairling | Book Low Fares Flights Tickets & Rental Cars'} />
      <meta property="og:description" key="og:description" content={"Explore cheap airline tickets with Usairling. We offer cheap flight tickets, hotels and car rental deals for South America. Book now and travel the world for less."} />
      <meta property="og:locale" key="og:locale" content={"en_US"} />
      <meta property="og:url" key="og:url" content={'https://www.usairling.com/'} />
      <meta property="og:type" key="og:type" content={"website"} />
      </Head>


      <Header />

      <div className='business-main'>
        <main id="main" className="site-main overflow">
          <Enginebox />

          {/* DestinationLists */}
          <DestinationLists
            title="Destination Lists"
            subtitle="Explore the destination"
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

          {/* Popular Airlines */}
          <PopularDestinations />

          {/* <Testimonial/> */}

          <div className="blogs">
            <div className="container">
              <h2 className="title title-border-bottom align-center offset-item animate">From Our Blog</h2>
            </div>
            <div className="news__content offset-item animate home">
              <BlogTile allbloglist={props.allbloglist} showitem={3} />
            </div>
            <div className='container'>
              <div className="align-center button-wrap mt-3">
                <Link href={`/blog`}>
                  <a className="btn btn-border btn-lg-readmore">View more</a>
                </Link>
              </div>
            </div>

          </div>

        </main>
      </div>

      <Footer />

    </>

  )
}



export async function getStaticProps() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "img_url": "",
    "siteId": "145",
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

