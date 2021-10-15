import Head from 'next/head'
import {useSession, getSession} from 'next-auth/react'

import Menu from '../../components/Menu'
import Account from '../../components/Account'
import Footer from '../../components/Footer'

export default function Compte() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <Head>
        <title>Mon compte | Le P'tit H</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Menu />
      <Account />
      <Footer />

    </div>
  )
}

Compte.getInitialProps = async(context) => {
    const { req,res } = context
    const session = await getSession({req});

    if (!session) {
        res.writeHead(302, {
            Location: "../auth/signin"
        })
        res.end()
        return;
    }
    return {
        props: {session}
    }
}