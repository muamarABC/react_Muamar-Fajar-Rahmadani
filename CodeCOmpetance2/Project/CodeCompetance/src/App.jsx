import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Web from './componen/Contact'
import Wesite from './Page/Satu'
import Main from './componen/main'
import About from './componen/AboutUS'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Wesite/>} />
        <Route path='/contact' element={<Web/>}/>
        <Route path='/titip' element={<Main/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
