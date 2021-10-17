import Link from "next/link"

import { db } from '../firebase'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

import {useSession} from 'next-auth/client'

function ArticleDetail({id, title, type, img, timestamp, desc, author}) {

    const [ session, loading ] = useSession()
    
    const email = session?.user.email

    const date = timestamp.toDate().toLocaleDateString()
    const [likeButton, setLikeButton] = useState("#303032")
    const img_url = {
        backgroundImage: "url(" + `${img}` + ")"
    }
    const vignette = {
        background: "radial-gradient(closest-corner at 60% 50%, rgba(15,15,15,0.4) 0, rgba(15,15,15,0.6) 20%, rgba(15,15,15,0.8) 50%, rgba(15,15,15,1) 100%)"
    }
    let like_button = {
        background: `${likeButton}`
    }

    const [ likes ] = useDocumentOnce(db.collection('likes').doc(id))

    let like_array = []
    const [likeCount, setLikeCount] = useState(0)
    const [userLike, setUserLike] = useState("white")

    useEffect(() => {
        if(likes) {
            like_array = []
            Object.entries(likes.data()).forEach(like => {
                like_array.push(like[0])
                if (email == like[0]) {
                    setUserLike("#D03738")
                    setLikeButton("#503035")
                }
            });
            setLikeCount(like_array.length)
        }
    }, [likes])

    const handleLike = () => {
        if (email) {
            if (userLike == "white") {
                db.collection('likes').doc(id).set({[email]: true},{merge: true})
                setLikeCount(likeCount + 1)
                setUserLike("#D03738")
                setLikeButton("#503035")
            }
            else {
                db.collection('likes').doc(id).set({[email]: firebase.firestore.FieldValue.delete()},{merge: true})
                setLikeCount(likeCount - 1)
                setUserLike("white")
                setLikeButton("#303032")
            }
        }
        else {
            alert('Vous devez être connecté')
        }
    }

    return (
        <div style={img_url} className="relative flex flex-col h-screen ml-32 bg-no-repeat bg-cover">
            <div style={vignette} className="absolute top-0 left-0 w-full h-full"></div>
            <div className="z-10 flex justify-between">
                <Link href="/articles">
                    <div className="flex items-center pl-20 mt-12 text-[#606062] transition-all cursor-pointer hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Retour</span>
                    </div>
                </Link>
                <div className="flex items-center self-end pr-20">
                    <div className="bg-[#D03738] w-3 h-3 rounded-full mr-1"></div>
                    <h3 className="text-sm text-gray-300">{type}</h3>
                </div>
            </div>
            <div className="z-10 flex flex-col justify-between flex-grow pl-20">
                <div className="flex flex-col justify-center flex-grow w-1/2">
                    <h1 className="text-5xl font-black text-white font-title leading-[4rem]">{title}</h1>
                    <h3 className="mt-10 text-2xl font-semibold text-[#909092] font-title">{desc}</h3>
                </div>
                <div className="flex items-center justify-between mb-20 mr-20">
                    <p className="text-sm text-right text-[#707072]">
                        Le {date} par {author}
                    </p>
                    <button style={like_button} onClick={handleLike} className="flex items-center px-4 py-3 transition-all hover:scale-110 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={userLike} viewBox="0 0 24 24" stroke={userLike} >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="pl-2 text-white">{userLike == "white" ? "Like" : likeCount}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetail
