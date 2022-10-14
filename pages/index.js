import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
