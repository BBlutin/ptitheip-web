import Head from 'next/head'
import Menu from '../components/Menu'
import HomePage from '../components/Home'
import Footer from '../components/Footer'

import { useSession } from 'next-auth/client'
import { toast } from 'react-toastify';
import { useEffect } from 'react'

export default function Home() {

  const [ session, loading ] = useSession()

  if (session && !loading) {
    const name = session.user.name
    toast.error(`Bienvenue ${name} ! Vous êtes connecté 😃`, {
      icon: ({theme, type}) =>  <img src="/logo.png"/>,
      theme: "dark"
    })
  }

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
