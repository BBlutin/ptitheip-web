import { signIn, getSession } from 'next-auth/client'
import Link from 'next/link'
function SignIn() {
    return (
        <div className='w-screen h-screen bg-[#0F0F0F] flex flex-col justify-center items-center'>
            <Link href='/'>
                <img src="/logo.png" className='cursor-pointer' alt="" />
            </Link>
            <h2 className='pt-10 pb-20 text-2xl text-white'>Me connecter</h2>
            <div className='flex items-center justify-between w-1/2'>
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