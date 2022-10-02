import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import ReservPages from '../Pages/ReservPages';
import LocationPages from '../Pages/LocationPages';
import ViewReservPage from '../Pages/ViewReservPage';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/reservaciones" element={<ReservPages/>}/>
            <Route path="/ubicacion" element={<LocationPages/>}/>
            <Route path="/ver-resercaviones" element={<ViewReservPage/>}/>
            <Route path="*" element={<h1>Eror 404</h1>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter