import Link from "next/link"

function AdminError() {
    return (
        <div className="min-h-[calc(100vh-96px)] ml-32 flex flex-col">
            <div className="flex justify-between">
                <Link href="/admin">
                    <div className="flex items-center pl-20 mt-12 text-gray-500 transition-all cursor-pointer hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Retour</span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <h1 className="w-1/2 text-4xl leading-[4rem] text-center text-gray-400 font-title">Cette page n'existe pas ou a été supprimé</h1>
            </div>
        </div>
    )
}

export default AdminError
