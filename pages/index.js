import Head from 'next/head'
import Menu from '../components/Menu'
import HomePage from '../components/Home'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <Head>
        <title>Accueil | Le P'tit H</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Menu />
      <HomePage />
      <Footer />

    </div>
  )
}
