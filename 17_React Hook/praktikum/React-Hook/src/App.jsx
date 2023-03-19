import { useState, useEffect } from 'react';
import Navbar from './componen/navbar';
import Main from './componen/main';


function App() {
  
    useEffect(()=> {
      alert("Welcome !");
    }, []);

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
