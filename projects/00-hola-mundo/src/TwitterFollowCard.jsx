export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) {



    return (
        <article className='tw-followCard'>
            <header>
                <img alt="El avatar de midudev" src={ `https://unavatar.io/${userName}`}></img>
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
       
    )
}