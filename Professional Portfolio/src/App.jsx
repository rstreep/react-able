import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
