import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KaldiMarket</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      </Head>

      <main>
       <p><img src="/logo.png" alt="KaldiMarket Logo" width="500" /></p>
        <Header title="Coming Soon" />
        <p className="description">
          Future home of KaldiMarket - a specialty coffee trading platform creating powerful solutions for smallholder farmers
        </p>
        <div className="flex-container">
         <div><a href="https://www.instagram.com/kaldimarket/" class="fa fa-instagram"></a></div>
         <div><a href="https://twitter.com/KaldiMarket/" class="fa fa-twitter"></a></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
