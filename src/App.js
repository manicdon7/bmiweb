import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calculate from './pages/Calculate'
import Result from './pages/Result'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Calculate/>} />
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </Router>
  )
}

export default App