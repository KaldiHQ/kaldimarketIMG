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
         <div class="flex-container">
          <p><img src="/logo.png" alt="KaldiMarket Logo" width="500" /></p>
         </div>
         <div class="col-md-8">
          <p className="center"> 
            <em>KaldiMarket™ is the world’s first direct-to-market green specialty coffee volume trading
            platform. The Kaldi mission is to revolutionize the green specialty coffee market via a value-
            creating coffee ecosystem; utilizing blockchain technology to help lift millions of smallholder
            farmers out of poverty, and allow them to financially participate in a completely new
            economic model in the global coffee sector</em>.
         </p>
         <p className="main">
            KaldiMarket is a new global green specialty coffee wholesale marketplace based in Chicago,
            USA. It is engaged in the alleviation and elimination of global smallholder coffee farmer
            poverty whilst creating <strong>substantial stakeholder</strong> value across its ecosystem. In addition to
            allowing smallholder farmers to command ‘speciality pricing’ in USD on the auction platform
            KaldiMarket.com, every coffee lot listed or sold on KaldiMarket generates its own native
            cryptocurrency, <strong>Kaldi Tokens</strong>, via the regulated and authorized Kaldi Company Ltd.
            Farmers can ‘cash out’ their Kaldi Tokens whenever they want, providing them with an extra
            revenue stream <strong>in addition to their coffee sales</strong>.
          </p>
          <p className="main">
            Powered by novel proprietary blockchain technology, KaldiMarket offers true <strong>seed-to-sale
            traceability</strong> and a <strong>unique suite of benefits and incentives</strong> to farmers and their customers,
            revolutionizing a current annual $50+ billion green specialty coffee market.
          </p>
          <p></p>
          <p className="center">
            <em>KaldiMarket has been created to allow smallholder farmers to earn more for their families and communities</em>.
          </p>
        </div>
      </main>
    
      <Footer />
    </div>
  )
}
