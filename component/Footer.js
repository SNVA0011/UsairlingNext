import React from "react"
import Link from "next/link"
import Image from "next/image"


export default function Footer() {
  return (
    <>
      <section className="banner-contact">
        <div className="container">
          <div className="banner-inner">
            <h2>Attend the Best Flight with enthusiasm. We provided each and every time</h2>
            <a href="tel:+1-00000000000" className="btn" target="_blank">Contact Us</a>
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
                  <p className="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>

                </div>
              </div>
              <div className="col-lg-3">
                <aside className="footer__top__nav">
                  <h3>Useful Links</h3>
                  <ul> 
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/flights">Flights</Link></li>
               
                    <li className="d-none">
                      <Link href="/">
                        <a className='ripple-effbtn d-inline-block'>
                          <span>Home</span>
                        </a>
                      </Link>
                    </li>

                    <li className="d-none">
                      <Link href="/es">
                        <a className='ripple-effbtn d-inline-block'>
                          <span>Casa</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-lg-3">
                <aside className="footer__top__nav">
                  <h3>Others</h3>
                  <ul>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/terms">Terms and Condition</Link></li>
                    {/* <li><Link href="/site-map">Sitemap</Link></li> */}

                  </ul>
                </aside>
              </div>
              <div className="col-lg-3">
                <aside className="footer__top__nav footer__top__nav--contact">
                  <h3>Contact Us</h3>
                  <p>Email: <a href="mailto:support@Usairling.com" className="__cf_email__" target="_blank">support@Usairling.com</a></p>
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
          <div className="text-center mb-3">
              <Image src='/images/card-logos-footer.png' alt='logo' width={780} height={58}></Image>
            </div>
            <p className="footer__bottom__copyright">2022 © <Link href="/">Usairling</Link>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
