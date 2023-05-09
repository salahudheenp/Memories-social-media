import React from 'react'
import { Container } from '@material-ui/core'


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Container maxWidth='lg'>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/auth' element={<Auth />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    )
}

export default App