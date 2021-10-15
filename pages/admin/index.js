import Head from 'next/head'
import Menu from '../../components/Menu'

import Footer from '../../components/Footer'

export default function Admin() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <Head>
        <title>Le P'tit H | Admin</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Menu />
      
      <Footer />

    </div>
  )
}
