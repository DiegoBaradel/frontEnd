import Header from "./components/header"
import Main from  './components/main'
import CadastroProvider from "./context/cadastroProvider"

function App() {
  return(
    <CadastroProvider>
      <Header/>
      <Main/>
    </CadastroProvider>
  )
}

export default App
