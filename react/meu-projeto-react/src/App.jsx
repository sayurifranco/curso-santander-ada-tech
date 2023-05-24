import MeuComponente from "./components/MeuComponente"

function App() {
  
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      {/* <CardDePrograma image='' titulo='Credit Suisse' subtitle='Python'> */}
      <MeuComponente />
      <MeuBotao conteudo='Me clique' />
      <MeuBotao conteudo='Depois aqui' />
      <MeuBotao conteudo='E por fim aqui' idade={2} />
    </div>   
  )
}

function MeuBotao(props) {
  
  // console.log(props.conteudo)
  // props.idade
  return (
    <button>{props.conteudo}</button>
  )
}

export default App