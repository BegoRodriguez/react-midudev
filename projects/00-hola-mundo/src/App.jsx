
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true,
    },
    {
        userName:'brodfer7',
        name: 'Miguel Angel Durán',
        isFollowing: false,
    },

    {
        userName:'pheralb',
        name: 'Pablo Hernández',
        isFollowing: false,
    },
]

export function App () {

    //const formatUserName = (userName) => `@${userName}`
   

    return (
        <section className='App'>
            {
                users.map (user =>{
                    const {userName,name,isFollowing} = user
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}>
                                {name}
                        </TwitterFollowCard>
                    )
                })
            }
            
        </section>
    
    )
}