import Head from 'next/head'
import { useSession, getSession } from 'next-auth/client'
import Menu from '../../components/Menu'

import Footer from '../../components/Footer'

function Article() {
    return (
        <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
            <Head>
                <title>Article | Le P'tit H</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Menu />
            <Footer />

        </div>
    )
}

export default Article
