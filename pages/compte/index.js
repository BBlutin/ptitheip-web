import Head from 'next/head'
import {getSession} from 'next-auth/client'

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

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}