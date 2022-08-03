import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Feed from '../Pages/Feed/Feed'
import Login from '../Pages/Login/Login'
import Posts from '../Pages/Posts/Posts'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Feed /> } />
                <Route path='cadastro' element={ <Cadastro /> } />
                <Route path='login' element={ <Login /> } />
                <Route path='posts/:id' element={ <Posts /> } />
            </Routes>
        </BrowserRouter>
    )
}