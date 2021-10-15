import { signIn, getSession } from 'next-auth/client'

function SignIn() {
    return (
        <div className='w-screen h-screen bg-[#0F0F0F] flex flex-col justify-center items-center'>
            <a href='/'>
                <img src="/logo.png" alt="" />
            </a>
            <div className='flex items-center justify-between w-2/3'>
                <button onClick={() => signIn("google")}>Google</button>
                <button onClick={() => signIn("facebook")}>Facebook</button>
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