import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />}  />
       
        </Routes>
      </Router>
     </div>
    </>
  )
}

export default App
