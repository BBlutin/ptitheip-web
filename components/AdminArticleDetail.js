import Link from "next/link"

import { db } from '../firebase'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

import {useSession} from 'next-auth/client'

function AdminArticleDetail({id, title, type, img, desc, author, read}) {

    const [ session, loading ] = useSession()
    
    const email = session?.user.email

    const img_url = {
        backgroundImage: "url(" + `${img}` + ")"
    }

    

    return (
        <div className="flex flex-col ml-32">
            
        </div>
    )
}

export default AdminArticleDetail
