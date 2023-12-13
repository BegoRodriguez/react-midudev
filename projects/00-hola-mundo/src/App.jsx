
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="brodfer7" name="Brodfer"/>
        </section>
    )
}