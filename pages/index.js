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
        <div class="container">
          <p className="description">
            KaldiMarket™ is the world’s first direct-to-market green specialty coffee volume trading
            platform. The Kaldi mission is to revolutionize the green specialty coffee market via a value-
            creating coffee ecosystem; utilizing blockchain technology to help lift millions of smallholder
            farmers out of poverty, and allow them to financially participate in a completely new
            economic model in the global coffee sector.
         </p>
        </div>
      </main>
    
      <Footer />
    </div>
  )
}
