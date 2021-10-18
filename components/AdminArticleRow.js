
import { db } from '../firebase'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import Link from 'next/link'

import {useSession} from 'next-auth/client'

function AdminArticleRow({id, title, type, img, timestamp, desc, author, read}) {

    const [ session, loading ] = useSession()

    const articlePath = "/admin/article/" + id

    const date = timestamp.toDate().toLocaleDateString()
    const img_url = {
        backgroundImage: "url(" + `${img}` + ")"
    }

    const [ likes ] = useDocumentOnce(db.collection('likes').doc(id))

    let like_array = []
    const [likeCount, setLikeCount] = useState(0)

    useEffect(() => {

        if(likes) {
            like_array = []
            if (likes.data()) {
                Object.entries(likes.data()).forEach(like => {
                    like_array.push(like[0])
                });
                setLikeCount(like_array.length)
            }
        }
        
    }, [likes])

    console.log(type)
    
    return (
        <Link href={articlePath}>
            <div className="flex flex-col transition-all duration-300 rounded-lg cursor-pointer ring-2 ring-[#2e2e2e] shadow-lg hover:shadow-card">
                <div className="w-full h-[25vh] bg-center bg-cover rounded-t-md" style={img_url}>
                </div>
                <div className="flex flex-col justify-between flex-grow px-5 py-5">
                    <div className="flex items-center">
                        <div className="text-[0.7rem] text-gray-100 border px-3 py-2 border-[#3b3b3b] rounded-xl bg-[#3b3b3b] bg-opacity-60">{type == "" ? "Aucune catégorie" : type}</div>
                    </div>
                    <div className='flex flex-col pb-8'>
                        <h1 className='py-4 font-bold text-white font-title'>{title}</h1>
                        <p className='font-serif text-gray-200'>{desc}</p>
                    </div>
                    <div className='flex items-center justify-between '>
                        <div className='flex flex-col'>
                            <h4 className="text-xs text-gray-400">Par {author} - {date}</h4>
                        </div>
                        <div className='flex items-center'>
                            <button className='z-10 flex items-center justify-center mr-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#D03738]" fill="#D03738" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                            <span className="text-xs text-gray-400">{likeCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AdminArticleRow
