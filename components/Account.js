
import {useSession, signOut} from 'next-auth/client'
import { useRouter } from 'next/router'

function Account() {

    const [ session ] = useSession()
    const router = useRouter()

    return (
        <div className='flex ml-32'>
            <button onClick={signOut}>Test</button>
        </div>
    )
}

export default Account
