
import { ScrollRestoration } from 'react-router'
import './App.css'
import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'

function App() {

  return (
    <>
      <ScrollRestoration/>
      <Header />
      <Main />
    </>
  )
}

export default App
