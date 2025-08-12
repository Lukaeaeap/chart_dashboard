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
import Profile from './pages/UserManagement'
import NoPage from './pages/NoPage'
import ProtectedRoute from './components/ProtectedRoute'
import Reviews from './pages/Reviews'
import Keywords from './pages/Keywords'
import WebCrawler from './pages/WebCrawler'
import UserManagement from './pages/UserManagement'
import Settings from './pages/Settings'
import Notifications from './pages/Notifications'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="keywords" element={<Keywords />} />
          <Route path="web-crawler" element={<WebCrawler />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />



        </Route>


        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
