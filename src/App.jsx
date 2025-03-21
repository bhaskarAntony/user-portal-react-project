import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import AllUsers from './pages/home/AllUsers'
import UserDetails from './pages/details/userDetails'

function App() {
  return (
    <div>
     <Header/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<AllUsers/>}/>
        <Route path='/user/details/:id' element={<UserDetails/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
  
    </div>
  )
}

export default App