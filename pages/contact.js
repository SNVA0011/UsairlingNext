import React, { useEffect } from "react";
import Header from '../component/Navbar'
import Footer from "../component/Footer"

import BreadHero from "../component/BreadHero";
import Link from "next/link";
import MetaHead from "../component/MetaHead";

export default function ContactUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
<MetaHead 
  MetaTitle={'Usairling | Contact Us'}
  MetaDescription={"Contact & Visit USAirling for the cheap and reliable flights booking now! "}
  MetaKeywords={"Usairling, cheap flight booking website, best place to book flight, online flight booking"}
  MetaCanonical={'https://www.usairling.com/contact'} 
  MetaLocate={"en_US"} 
  MetablogType={false}
  MetaSitename={"www.usairling.com"}
  MetaWeburl={"https://www.usairling.com"}
/>

  
			<Header />

			<div className="page-title page-title--small align-left">
				<div className="container">
					<div className="page-title__content">
						<h1 className="page-title__name">Contact Us</h1>
						<p className="page-title__slogan">Tell you contact us</p>
					</div>
				</div>
				<BreadHero
					linkhtml={
						<>
							<ul className="bradcum">
								{" "}
								<li>
									{" "}
									<Link href="/">Home</Link>{" "}
								</li>{" "}
								<li className="breadcrumb-item active" aria-current="page">
									{" "}
									Contact
								</li>{" "}
							</ul>
						</>
					}
				/>
			</div>

			<div className="about-uspage full-w pyblock-80">
				<div className="site-content site-contact">
					<div className="container mb-5">
						<div className="form-row">
							<div className="col-md-6">
								<div className="contact-text">
									<h2>Our Offices</h2>
									<div className="contact-box">
										<h3>USA</h3>
										<p>10-S511 Echo Ln, Willowbrook, Illinois(IL), 60527</p>  
										<a href="#" title="Get Direction">Get Direction</a>
									</div>
									<div className="contact-box">
										<h3>Paris</h3>
										<p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>

										<a href="#" title="Get Direction">Get Direction</a>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="contact-form">
									<h2>Get in touch with us</h2>
									<form action="#" method="POST" className="form-underline">
										<div className="field-inline">
											<div className="field-input">
												<input type="text" name="first_name" Z placeholder="First Name" />
											</div>
											<div className="field-input">
												<input type="text" name="last_name" Z placeholder="Last Name" />
											</div>
										</div>
										<div className="field-input">
											<input type="email" name="email" Z placeholder="Email" />
										</div>
										<div className="field-input">
											<input type="tel" name="tel" Z placeholder="Phone Number" />
										</div>
										<div className="field-textarea">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
										<div className="field-submit">
											<input type="submit" value="Send Message" className="btn" />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
