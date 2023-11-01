import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/Homepage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
    </Routes>
  )
}

export default AllRoutes
