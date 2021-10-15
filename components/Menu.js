import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

function Menu() {

    const router = useRouter()
    const [ session ] = useSession()

    return (
        <div className="fixed flex flex-col justify-between items-center py-8 h-screen w-32 bg-[#0E0E10] border-r-4 border-[#121212] z-50">
            <a href="/"><img src="/logo.png" alt="" /></a>
            <div className="pb-8 space-y-10">
                <div className="p-4 transition-all duration-300 rounded-full cursor-pointer group hover:bg-gray-50 hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-300 text-[#404042] group-hover:text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                </div>
                <div className="p-4 transition-all duration-300 rounded-full cursor-pointer group hover:bg-gray-50 hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-300 text-[#404042] group-hover:text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <div className="p-4 transition-all duration-300 rounded-full cursor-pointer group hover:bg-gray-50 hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-300 text-[#404042] group-hover:text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                </div>
                <div className="p-4 transition-all duration-300 rounded-full cursor-pointer group hover:bg-gray-50 hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-300 text-[#404042] group-hover:text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div className="p-4 transition-all duration-300 rounded-full cursor-pointer group hover:bg-gray-50 hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all duration-300 text-[#404042] group-hover:text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
            <a href='./compte' className="pb-8">
                <div className="rounded-full border-2 border-[#404042] p-2">
                    {!session ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#404042]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        :
                        <img src={session.user.image} className='w-6 h-6' alt="" />
                    }
                </div>
            </a>
        </div>
    )
}

export default Menu
