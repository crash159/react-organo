import './Rodape.css'


const Rodape = () => {
    // JSX
    return(
        <header className="footer ">
            <div className='cont'>
                <img src="/imagens/fb.png" alt="O rodape da página"/>
                <img src="/imagens/tw.png" alt="O rodape da página"/>
                <img src="/imagens/ig.png" alt="O rodape da página"/>
            </div>
            <div className='cont'>
                <img src="/imagens/logo.png" alt="O rodape da página"/>
            </div>
            <div className='cont'>
                <h4>Desenvolvido por Alura.</h4>
            </div>
        </header>
    )

}

export default Rodape