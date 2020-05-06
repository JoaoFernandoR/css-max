import React, { useState } from 'react'
// Css
import './App.css'
// Componentes
import Header from './components/Header'
import Footer from './components/Footer'
// Pages 
import Main from './pages/Main'
import Packages from './pages/Packages'
import Customers from './pages/Customers'

const App = () => {

  const [page, setPage] = useState(0)

  const renderPages = () => {
    if (page === 0 ) return <Main />
    if (page === 1) return <Packages />
    if (page === 2) return <Customers />
  }

  return (
    <React.Fragment>
      <Header setPage={setPage}/>
      {renderPages()}
      <Footer />
    </React.Fragment>
  )
}


export default App