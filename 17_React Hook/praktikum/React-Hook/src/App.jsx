import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './componen/navbar'
import Main from './componen/main'
import List from './componen/List'

function App() {
  
    useEffect(()=> {
      alert("Welcome !");
    }, []);

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <List/>
    </div>
  )
}

export default App
