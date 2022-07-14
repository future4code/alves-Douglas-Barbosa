import React from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../Components/Pages/LoginPage/LoginPage'
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage'
import ListTripsPage from '../Components/Pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../Components/Pages/ApplicationFormPage/ApplicationFormPage'
import AdminHomePage from '../Components/Pages/AdminHomePage/AdminHomePage'
import TripDetailsPage from '../Components/Pages/TripDetailsPage/TripDetailsPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage /> } />
                <Route path='loginPage' element={ <LoginPage /> } />
                <Route path='listTripsPage' element={ <ListTripsPage /> } />
                <Route path='applicationFormPage' element={ <ApplicationFormPage /> } />
                <Route path='adminHomePage' element={ <AdminHomePage /> } />
                <Route path="tripDetails/:id" element={<TripDetailsPage/>}/>
                <Route path='*' element={ ''} />
                {/* /:id */}
            </Routes>
        </BrowserRouter>
    )
}
