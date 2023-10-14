import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import './App.css'
import Home from './Components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />}  />
          <Route path='/home' element={<Home />}  />

        </Routes>
      </Router>
     </div>
    </>
  )
}

export default App
