import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/jasson.v.gomez/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/Fgmcollectors'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/gomezjasson/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Gomez D. Jasson</strong>
    </footer>
}

export default Footer