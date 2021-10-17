
import {useSession, signOut} from 'next-auth/client'

import { db } from '../firebase'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

function Account() {

    const [ session, loading ] = useSession()
    
    if (typeof window !== 'undefined' && loading) return null

    const email = session?.user.email

    const [ user_perm, loading_perm ] = useDocumentOnce(db
        .collection('roles')
        .doc(email)
    )

    if (loading_perm) return null

    return (
        <div className="flex flex-col px-10 py-10 ml-32 font-content h-[calc(100vh-96px)]">
            <div className='flex justify-between'>
                <h2 className="text-5xl text-gray-300 font-title">Mon compte</h2>
                <button
                    onClick={signOut}
                    className='flex justify-center items-center mr-10 px-4 rounded-lg border-2 text-[#525253] border-[#404042] hover:text-[#D03738] hover:border-[#D03738] transition-all duration-300'
                >
                    Me déconnecter
                </button>
            </div>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col w-1/3'>
                    <div className='flex items-center justify-between pl-6 pr-10 py-4 border-2 rounded-lg border-[#404042]'>
                        <img className='rounded-full' src={session?.user.image} height="80px" width="80px" alt="" />
                        <p className='text-lg text-white'>{session?.user.name}</p>
                    </div>
                    <div className="flex flex-col mt-10 pl-6 pr-10 py-4 border-2 rounded-lg border-[#404042]">
                        <div className="flex items-center justify-between">
                            <p className="text-white">Type de compte</p>
                            {user_perm?.data()?.premium ? 
                                <span className="text-yellow-400">Premium</span>
                                : 
                                <span className="text-white">Standard</span>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Account
