import { signIn, getSession } from 'next-auth/client'
import Link from 'next/link'
import Head from 'next/head'

function SignIn() {
    return (
        <div className='w-screen h-screen bg-[#252525] flex'>
            <Head>
                <title>Connexion | Le P'tit H</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='flex flex-col items-center justify-center w-1/2 bg-[#0F0F0F] rounded-r-[30px]'>
                <img className='w-2/3 animate-float' src="/login_heip.png" alt="" />
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 '>
                <Link href='/'>
                    <img src="/logo.png" className='cursor-pointer' alt="" />
                </Link>
                <h2 className='pt-10 pb-10 text-4xl font-bold text-white font-title'>Me connecter</h2>
                <p className='pb-16 text-gray-400'>- AVEC -</p>
                <div className='grid items-center justify-between w-1/2 grid-cols-2 gap-x-12 gap-y-6'>
                    <button 
                        className='flex items-center px-6 py-3 space-x-3 transition-all duration-300 border-2 border-red-500 rounded-lg hover:scale-110'
                        onClick={() => signIn("google")}
                    >
                        <img src="/google.png" className='w-8 h-8' alt="" />
                        <span className='text-lg font-bold text-white'>Google</span>
                    </button>
                    <button 
                        className='flex items-center px-6 py-3 space-x-3 transition-all duration-300 border-2 border-blue-400 rounded-lg hover:scale-110'
                        
                    >
                        <img src="/twitter.png" className='w-8 h-8' alt="" />
                        <span className='text-lg font-bold text-white'>Twitter</span>
                    </button>
                    <button 
                        className='flex items-center px-6 py-3 space-x-3 transition-all duration-300 border-2 border-pink-600 rounded-lg hover:scale-110'
                        
                    >
                        <img src="/instagram.png" className='w-8 h-8' alt="" />
                        <span className='text-lg font-bold text-white'>Instagram</span>
                    </button>
                    <button 
                        className='flex items-center px-6 py-3 space-x-3 transition-all duration-300 border-2 border-blue-500 rounded-lg hover:scale-110'
                        onClick={() => signIn("facebook")}
                    >
                        <img src="/facebook.png" className='w-8 h-8' alt="" />
                        <span className='text-lg font-bold text-white'>Facebook</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default SignIn


SignIn.getInitialProps = async(context) => {
    const { req, res } = context
    const session = await getSession({req});

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        })
        res.end()
        return
    }

    return {
        session: undefined
    }
}