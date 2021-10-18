import { db } from '../firebase'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import ArticleRow from './ArticleRow'

function ArticlesList() {

    const [snapshot] = useCollectionOnce(db
        .collection('articles')
        .orderBy('timestamp', 'desc')
    )

    return (
        <div className="flex flex-col px-10 py-10 ml-32 font-content min-h-[calc(100vh-96px)]">
            <div>
                <h2 className="text-5xl text-gray-300 font-title">Nos Articles</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-16 ml-10 mr-10'>
                {snapshot?.docs.map(article => (
                    article.data().event != true ?
                        <ArticleRow 
                            key = {article.id}
                            id = {article.id}
                            title = {article.data().title}
                            desc = {article.data().desc}
                            type = {article.data().type}
                            img = {article.data().img}
                            author = {article.data().author}
                            read = {article.data().read}
                            timestamp = {article.data().timestamp}
                        />
                        : none
                ))}
            </div>
        </div>
    )
}

export default ArticlesList
