import React, { useState } from 'react'
// Css
import './App.scss'
// Componentes
import Header from './components/Header'
import Footer from './components/Footer'
// Pages 
import Main from './pages/Main'
import Packages from './pages/Packages'
import Customers from './pages/Customers'
import Hosting from './pages/Hosting'

const App = () => {

  const [page, setPage] = useState(0)

  const renderPages = () => {
    if (page === 0) return <Main />
    if (page === 1) return <Packages />
    if (page === 2) return <Customers />
    if (page === 3) return <Hosting />
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