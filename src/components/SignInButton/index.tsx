import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import {signIn, signOut, useSession } from 'next-auth/react'

export function SiginButton(){

    const { data: session} = useSession();

    //console.log(session)

    return session ? (
        <button 
            type="button" 
            className={styles.signInButton}
            onClick={()=> signOut()}
        >
            <FaGithub color='#04d361'/>
            {session.user.name}
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ): (
        <button 
            type="button" 
            className={styles.signInButton}
            onClick={()=> signIn('github')}
        >
            <FaGithub color='#eba417'/>
            Sig in with GitHub
        </button>
    )
}