import { useState, useEffect } from 'react'
// import './App.css'
import Home from './Page/LandingPage'
import Create from './Page/CreateProduct'
import Update from './Page/UpdateProduct'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Page/Register';


function App() {
  
    useEffect(()=> {
      alert("Welcome !");
    }, []);

  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/update" element={<Update />}/>
      </Routes>
    </Router>
  )
}

export default App
