import Head from 'next/head'
import { useSession, getSession } from 'next-auth/client'
import Menu from '../../components/Menu'

import Footer from '../../components/Footer'

export default function Admin() {

  const [ session, loading ] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) { return  <AccessDenied/> }

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