import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer'
const Index = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Index