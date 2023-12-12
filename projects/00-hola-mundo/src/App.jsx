import './App.css'

export function App () {
    return (
        <article className='tw-follow-card'>
            <header>
                <img alt="El avatar de midudev" src="https://unavatar.io/midudev"></img>
                <div>
                    <strong>Miguel Angel Durán</strong>
                    <span>@midudev</span>
                </div>
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
       
    )
}