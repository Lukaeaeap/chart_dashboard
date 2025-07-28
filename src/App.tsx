import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  BrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { useState, useEffect } from 'react'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>


        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
