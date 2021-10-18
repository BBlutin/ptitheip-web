import Head from 'next/head'

import { useSession } from 'next-auth/client'
import { useRouter } from "next/router"

import { db } from '../../firebase'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ArticleDetail from '../../components/ArticleDetail'
import ArticleError from '../../components/ArticleError'

function Article() {

    const router = useRouter();
    const { id } = router.query;
    
    const [article, loadingArticle, errorArticle] = useDocumentOnce(db
        .collection('articles')
        .doc(id)
    );

    // if (!loadingArticle && !article?.data()?.title) {
    //     router.replace('/articles')
    // }
    
    return (
        <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
            <Head>
                <title>{article?.data()?.title} | Le P'tit H</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Menu />
            {article?.data()?.title ? (
                <ArticleDetail
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
                <ArticleError />
            )}
            <Footer />

        </div>
    )
}

export default Article
