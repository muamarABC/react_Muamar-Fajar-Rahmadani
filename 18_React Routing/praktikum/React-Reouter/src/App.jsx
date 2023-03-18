import { useState, useEffect } from 'react'
// import './App.css'
import Home from './Page/Home'
import Create from './Page/Create'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  useEffect(()=> {
    alert("Welcome !");
  }, []);
    
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
      </Routes>
    </Router>
  )
}

export default App
