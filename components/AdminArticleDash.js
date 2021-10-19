import Link from "next/link"
import Router from 'next/router'

import { db } from "../firebase"
import firebase from "firebase"
import { useSession } from 'next-auth/client'
import { useCollection } from 'react-firebase-hooks/firestore'
import AdminArticleRow from "./AdminArticleRow"
import { toast } from 'react-toastify';

function AdminArticleDash() {

    const [ session, loading ] = useSession()

    if (typeof window !== 'undefined' && loading) return null

    const author = session?.user.name

    const [snapshot] = useCollection(db
        .collection('articles')
        .orderBy('timestamp', 'desc')
    )

    const createArticle = () => {
        db.collection('articles').add({
            author: author,
            title: "Nouvel article",
            type: "",
            desc: "",
            event: false,
            published: false,
            premium: false,
            read: "",
            img: "https://media.discordapp.net/attachments/898600853517250602/899758661612744724/HEIP-campus-Paris.png",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            toast.success("Article créé avec succès !")
        })
        .catch((error) => {
            alert("Une erreur est survenue durant la création de l'article")
        });
    }

    return (
        <div className="min-h-[calc(100vh-96px)] ml-32 flex flex-col">
            <div className="flex justify-between px-20 pt-12">
                <Link href="/admin">
                    <div className="flex items-center text-[#606062] transition-all cursor-pointer hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Retour</span>
                    </div>
                </Link>
                <button 
                    onClick={createArticle}
                    className="flex items-center py-3 pl-5 pr-6 font-semibold text-green-400 transition-all bg-transparent border-2 border-green-400 rounded-xl hover:bg-green-400 hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Créer un article</span>
                </button>
            </div>
            <div className="px-10 pt-10">
                <h2 className="text-5xl tracking-wide text-gray-300">Liste des articles</h2>
            </div>
            <div className='grid grid-cols-3 gap-12 my-16 ml-10 mr-10 gap-y-16'>
                {snapshot?.docs.map(article => (
                    <AdminArticleRow 
                        key = {article.id}
                        id = {article.id}
                        title = {article.data().title}
                        desc = {article.data().desc}
                        type = {article.data().type}
                        published = {article.data().published}
                        event = {article.data().event}
                        premium = {article.data().premium}
                        img = {article.data().img}
                        author = {article.data().author}
                        timestamp = {article.data().timestamp}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdminArticleDash
