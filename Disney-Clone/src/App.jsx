import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import './App.css'
import Home from './Components/Home'
import Detail from './Components/Detail'


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
          <Route path='/details/:id' element={<Detail />}  />

        </Routes>
      </Router>
     </div>
    </>
  )
}



export default App
