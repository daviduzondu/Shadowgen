import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Container from './components/Container'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(window)
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  return (
    <div className="App">
      {
        window.innerWidth > 680 ?
          <>
            <Header />
            <div className='mainApp'>
              <Container />
            </div>
          </>
          :
          <div className='responsive'>

            <div>
            <h1>
              Your {window.clientInformation.userAgentData.platform} device screen is not supported.
            </h1>
              Please run this on desktop or a device with bigger screen.
              
            </div>
          </div>
      }
    </div>
  )
}

export default App
