import React from "react"
import Link from "next/link"

export default function Footer() {
  return (

    <>
      <section className="banner-contact">
        <div className="container">
          <div className="banner-inner">
            <h2>Asista al Best Flight con entusiasmo. Proporcionamos todas y cada una de las veces</h2>
            <a href="tel:+1-0000000000" className="btn">Contacta con nosotros</a>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer__top__info">
                  <Link href="/">
                    <a className="footer__top__info__logo">
                      <img src='/images/logo.svg' width={166} height={29} alt="logo" />
                    </a>
                  </Link>
                  <p className="footer__top__info__desc">
                    Descubre cosas increíbles para hacer donde quiera que vayas.</p>

                </div>
              </div>
              <div className="col-lg-3">
                <aside className="footer__top__nav">
                  <h3>Empresa</h3>
                  <ul>
                    <li><Link href="/es/sobre-nosotras"  >Sobre nosotros</Link></li>
                    <li><Link href="/es/articulos"  >Artículos</Link></li>
                    <li><Link href="/es/contacto" title="Contact">Contacto</Link></li>
                    <li className="d-none">
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </li>

                    <li className="d-none">
                      <Link href="/es">
                        <span>Casa</span>
                      </Link>
                    </li> 
                  </ul>
                </aside>
              </div>
              <div className="col-lg-3">
                <aside className="footer__top__nav">
                  <h3>Apoyo</h3>
                  <ul>
                    <li><Link href="/es/privacidad" title="Contact" >Política de privacidad</Link></li>
                    <li><Link href="/es/terminos" title="terminos" >Términos y Condiciones</Link></li>
                    {/* <li><Link href="/es/site-map" title="Contact" >
mapa del sitio</Link></li> */}

                  </ul>
                </aside>
              </div>
              <div className="col-lg-3">
                <aside className="footer__top__nav footer__top__nav--contact">
                  <h3>Contacta con nosotros</h3>
                  <p>Email: <a href="mailto:support@Usairling.com<" className="__cf_email__" target="_blank">support@Usairling.com</a></p>
                  {/* <p>Phone: 1 (00) 832 2342</p> */}
                  <ul>
                  <li className="facebook">
                      <a title="Facebook" href="https://www.facebook.com/USAirling" target="_blank">
                      <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a title="Twitter" href="https://www.twitter.com/USAirling" target="_blank">
                      <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a title="pinterest" href="https://www.pinterest.com/usairling" target="_blank">
                      <i className="bi bi-pinterest"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a title="Instagram" href="https://www.instagram.com/usairling" target="_blank">
                      <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__bottom__copyright">2022 © <Link href="/es/">Usairling</Link>.
              Reservados todos los derechos.</p>
          </div>
        </div>
      </footer>

    </>
  );
}
