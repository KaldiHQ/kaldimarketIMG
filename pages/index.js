import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from "react";
import { Button } from "reactstrap";
function Example() {
    return (
      <>
        <Button className="btn-icon-only" color="twitter" type="button">
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-twitter"></i>
        </span>
      </Button>
      <Button className="btn-icon-only" color="instagram" type="button">
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-instagram"></i>
        </span>
      </Button>
     </>
    );
}
export default Example;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KaldiMarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p><img src="/logo.png" alt="KaldiMarket Logo" width="500" /></p>
        <Header title="Coming Soon" />
        <p className="description">
          Future home of KaldiMarket - a specialty coffee trading platform creating powerful solutions for smallholder farmers
        </p>
      </main>
    
      <Footer />
    </div>
  )
}
