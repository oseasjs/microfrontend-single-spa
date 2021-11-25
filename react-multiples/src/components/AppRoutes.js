import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const AppRoutes = () => (    

    <BrowserRouter basename="react-multiples">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
)
 export default AppRoutes