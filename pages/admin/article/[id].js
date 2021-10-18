import Head from 'next/head'
import {getSession, useSession} from 'next-auth/client'
import { useRouter } from "next/router"

import { db } from '../../../firebase'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import AdminError from '../../../components/AdminError'
import AdminArticleDetail from '../../../components/AdminArticleDetail'

function Article() {

    const [ session, loading ] = useSession()
    
    const router = useRouter();
    const { id } = router.query;
    
    const [article, loadingArticle, errorArticle] = useDocumentOnce(db
        .collection('articles')
        .doc(id)
    );

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
                <title>{article?.data()?.title} | Le P'tit H</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Menu />
            {article?.data()?.title ? (
                <AdminArticleDetail
                    key = {id}
                    id = {id}
                    title = {article?.data()?.title}
                    desc = {article?.data()?.desc}
                    type = {article?.data()?.type}
                    img = {article?.data()?.img}
                    author = {article?.data()?.author}
                    read = {article?.data()?.read}
                    timestamp = {article?.data()?.timestamp}
                />
            ) : (
                <AdminError />
            )}
            <Footer />

        </div>
    )
}

export default Article

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