import Head from 'next/head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ArticlesList from '../components/ArticlesList'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <Head>
        <title>Articles | Le P'tit H</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Menu />
      <ArticlesList />
      <Footer />

    </div>
  )
}
