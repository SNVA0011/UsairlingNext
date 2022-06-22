import React from 'react';
import Image from "next/image"
import Link from "next/link"


export default function PopularDestinations() {
	return (
		<>
			{/* PopularDestinations */}
			<div className="cities">
				<div className="container">
					<h2 className="title title-border-bottom align-center offset-item animate">Aerolíneas populares</h2>
					<div className="cities__contentt">
						<div className="row">
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='#'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolínea KLM</h3>
									</div>
								</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/es/vuelos/aerolineas-unidas-ua'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas Unidas</h3>
									</div>
								</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/es/vuelos/aerolineas-americanas-aa'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas americanas</h3>
									</div>
								</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/es/vuelos/aerolineas-alaska-AS'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas de Alaska</h3>
									</div>
								</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/es/vuelos/allegiant-airlines-G4'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas Allegiant</h3>
									</div>
								</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='#'>
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
								<Link href='#'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas de Singapur</h3>
									</div>
								</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='#'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas de Hong Kong</h3>
									</div>
								</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='#'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aire canadá</h3>
									</div>
								</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/es/vuelos/aerolineas-delta-dl'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas delta</h3>
									</div>
								</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='/es/vuelos/aerolineas-westjet-ws'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolineas westjet-ws</h3>
									</div>
								</a>
								</Link>
							</div>

							<div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
								<Link href='#'>
									<a className="airplane-iconbx d-flex align-items-center h-100">
									<div className="cities__thumb hover__box__thumb">
										<Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive' />
									</div>

									<div className="cities__info flex-grow-1">
										<h3 className="cities__capital">Aerolíneas Alitalia</h3>
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




