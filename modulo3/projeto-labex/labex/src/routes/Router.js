import React from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../Components/Pages/LoginPage/LoginPage'
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage'
import ListTripsPage from '../Components/Pages/ListTripsPage/ListTripsPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage /> } />
                <Route path='loginPage' element={ <LoginPage /> } />
                <Route path='listTripsPage' element={ <ListTripsPage /> } />
                <Route path='*' element={ <ErrorPage/> } />
            </Routes>
        </BrowserRouter>
    )
}
