import Head from 'next/head'
import { useSession, getSession } from 'next-auth/client'
import { useRouter } from "next/router"
import { db } from '../../../firebase'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import AdminArticleDash from '../../../components/AdminArticleDash'

export default function Admin() {

  const [ session, loading ] = useSession()
  const router = useRouter();

  if (typeof window !== 'undefined' && loading) return null

  const email = session?.user.email

  const [ user_perm, loading_perm ] = useDocumentOnce(db
      .collection('roles')
      .doc(email)
  )

  if (loading_perm) return null

  if (user_perm && !loading_perm) {
      if (user_perm?.data()?.admin) {

      }
      else {
          router.push('/')
      }
  }
  else {
      router.push('/')
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <Head>
        <title>Admin - Articles | Le P'tit H</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Menu />
      <AdminArticleDash />
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