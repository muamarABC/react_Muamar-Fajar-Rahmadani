import { useState, useEffect } from 'react'
import Nav from './componen/navbar';
import Main from './componen/main';
import Footer from './componen/List'

function App() {
  useEffect(()=> {
    alert("Welcome !");
  }, []);
  
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
