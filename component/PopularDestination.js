import React from 'react';
import Image from "next/image"
import Link from "next/link"


export default function PopularDestinations() {
	return (
		<>
			{/* PopularDestinations */}
			<div className="cities">
				<div className="container">
					<h2 className="title title-border-bottom align-center offset-item animate">Popular Airlines</h2>
					<div className="cities__contentt">
						<div className="row">
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div> 
										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">KLM Airlines</h3> 
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/flights/united-airlines-UA">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">United Airlines</h3> 
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/flights/american-airlines-aa">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">American Airlines</h3>

										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/flights/alaska-airlines-as">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Alaska Airlines</h3>

										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/flights/allegiant-airlines-G4">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Allegiant Air</h3>

										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/flights/copa-airlines-cm">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Copa Airlines</h3>

										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/flights/singapore-airlines-SQ">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Singapore Airlines</h3>

										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Hong Kong Airlines</h3>

										</div>
									</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/flights/air-canada-ac'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Air Canada</h3>

										</div>
									</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Delta Airlines</h3>

										</div>
									</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Bahamasair</h3>

										</div>
									</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href="/">
									<a className="airplane-iconbx d-flex align-items-center h-100">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
										</div>

										<div className="cities__info flex-grow-1">
											<h3 className="cities__capital">Alitalia Airlines</h3>

										</div>
									</a>
								</Link>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}



