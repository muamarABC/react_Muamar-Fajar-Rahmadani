import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateProducts from './pages/CreateProducts'
import LandingPage from './pages/LandingPage'
import React, { useEffect } from 'react';
import Register from "./pages/Register";
import Login from "./pages/Login";
// import './App.css'

function App() {
  useEffect (() => {
    alert("Welcome")
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProducts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* ... etc. */}
      </>
    )
  );  

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
