import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSubmeter = (evento) => {
    evento.preventDefault()
    console.log('form enviado', nome, cargo, imagem, time)
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Create New Card</h2>
        <Campo
          obrigatorio={true}
          label='Name'
          placeholder='Type the name'
          valor={nome}
          aoAlterado={valor => setNome(valor)} />
        <Campo
          obrigatorio={true}
          label='Job'
          placeholder='Type the job'
          valor={cargo}
          aoAlterado={valor => setCargo(valor)} />
        <Campo
          label='Picture'
          placeholder='Picture link'
          aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa
          obrigatorio={true}
          label='Team'
          items={times}
          valor={time}
          aoAlterado={valor => setTime(valor)} />
        <Botao texto='Add Card' />
      </form>
      <form className="formulario" onSubmit={(evento) => {
        evento.preventDefault()
        cadastrarTime({ nome: nomeTime, cor: corTime })
      }}>
        <h2>Create New Team</h2>
        <Campo
          obrigatorio
          label='Name'
          placeholder='Team name'
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          type='color'
          label='Color'
          placeholder='Digite a cor do time'
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao texto='Add Team' />
      </form>
    </section>
  )
}

export default Formulario