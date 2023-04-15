import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainApp'>
        <Container />
      </div>
    </div>
  )
}

export default App
