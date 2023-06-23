import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import App from '../App'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
const Index = () => {
  return (
    <BrowserRouter>
        <App/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index