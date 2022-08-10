import Head from 'next/head'
import PopularDestinations from '../../component/es/PopularDestination'
import Enginebox from '../../component/es/Enginebox'
import Footer from '../../component/es/Footer'
import Header from '../../component/es/Navbar'
import BlogTile from '../../component/es/BlogTile';
import Link from "next/link";
import DestinationLists from '../../component/DestinationLists'

export default function Home(props) {

  return (
    <>

      <Head>
        <title>Usairling | Book Low Fares Flights Tickets & Rental Cars</title>
        <meta name="description" content="Explore cheap airline tickets with Usairling. We offer cheap flight tickets, hotels and car rental deals for South America. Book now and travel the world for less." />
        <meta name="keywords" content="Low Fares Flights Tickets, Low Fares Car Rental, Book Low fare hotels" />
        <link rel="canonical" href={'https://www.usairling.com/es/'} />
        <link rel="alternate" href={'https://www.usairling.com/es/'} />
      </Head>


      <Header />

      <div className='business-main'>
        <main id="main" className="site-main overflow">
          <Enginebox />

          {/* DestinationLists */}
          {/* DestinationLists */}
          <DestinationLists
            title="Listas de destinos"
            subtitle="Explora el destino"
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

          {/* Popular Airlines */}
          <PopularDestinations />


          <div className="blogs">
            <div className="container">
              <h2 className="title title-border-bottom align-center offset-item animate">De nuestro blog</h2>
            </div>
            <div className="news__content offset-item animate home">
              <BlogTile allbloglist={props.allbloglist} showitem={3} />
            </div>
            <div className='container'>
              <div className="align-center button-wrap mt-3">
                <Link href={`/es/articulos`}>
                  <a className="btn btn-border  btn-lg-readmore">
                    Ver más
                  </a>
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




export async function getServerSideProps() {
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
    "categoryName": "",
    "siteId": "145",
    "pageType": "Articulo",
    "extraTag": "",
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


  const res = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response }
  }
}

