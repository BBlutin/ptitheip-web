
import { db } from '../firebase'
import firebase from 'firebase'
import { Fragment, useRef, useEffect, useState } from 'react'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify';

import {useSession} from 'next-auth/client'

function AdminArticleRow({id, title, type, img, timestamp, desc, author, published, event, premium}) {

    const [ session, loading ] = useSession()
    const router = useRouter();

    const articlePath = "/admin/article/" + id

    const date = timestamp?.toDate().toLocaleDateString()
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

    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const deleteArticle = () => {
        db.collection('articles').doc(id).delete()
        .then(() => {
            setOpen(false)
            toast.error("Article supprimé avec succès !", {
                icon: "🗑️"
            })
        })
        .catch((error) => {
            toast.error("Whoops ! Une erreur est survenue...")
        });
    }
    
    return (
        <>
            <div className="flex flex-col transition-all duration-300 rounded-lg ring-2 ring-[#2e2e2e] shadow-lg hover:shadow-card group">
                <div className="w-full h-[25vh] bg-center bg-cover rounded-t-md flex justify-end" style={img_url}>
                    <div className='flex items-start pt-3 pr-4 space-x-2 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                        <Link href={articlePath}>
                            <button className='px-3 py-3 bg-yellow-300 rounded-full bg-opacity-80'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                        </Link>
                        <button className='px-3 py-3 bg-red-300 rounded-full bg-opacity-80' onClick={() => setOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-grow px-5 py-5">
                    <div className="flex items-center pb-3 space-x-2">
                        <div className={`text-[0.6rem] text-gray-100 border px-2 py-1 rounded-xl ${published ? "bg-green-200 border-green-600" : "bg-red-300 border-red-500"} bg-opacity-60`}>{published ? "Publié" : "Non publié"}</div>
                        <div className={`text-[0.6rem] text-gray-100 border px-2 py-1 rounded-xl bg-yellow-200 border-yellow-500 ${premium ? "" : "hidden"} bg-opacity-60`}>Premium</div>
                        <div className={`text-[0.6rem] text-gray-100 border px-2 py-1 rounded-xl bg-blue-200 border-blue-500 ${event ? "" : "hidden"} bg-opacity-60`}>En concours</div>
                    </div>
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
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-[#3b3b3b] bg-opacity-75" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#D03738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Supprimer l'article
                                </Dialog.Title>
                                <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Êtes vous sûr de vouloir supprimer l'article <span className='font-bold'>{title}</span> ? Cette action est irréversible et toutes les données relative à cet article seront perdues.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-[#D03738] border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => deleteArticle()}
                            >
                                Oui, supprimer
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                            >
                                Annuler
                            </button>
                        </div>
                        </div>
                    </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default AdminArticleRow
