import React, { useEffect } from 'react' 
import Link from "next/link"
import Head from 'next/head' 

export default function Pageerror() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="pageerror-wrap d-flex flex-row align-items-center full-w py-5">
            <Head> 
                <title>404 Pagina no encontrada</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" /> 
            </Head>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">No se encontró la página que está buscando.</div>
                        <Link href="/es/">
                            <a className="btn btn-site ripple-effbtn btn-40">
                            <span>De vuelta a casa</span>
                            </a>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
