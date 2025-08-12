import {
  Route,
  Routes,
  HashRouter
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import NoPage from './pages/NoPage'
import ProtectedRoute from './components/ProtectedRoute'
import Reviews from './pages/Reviews'
import Keywords from './pages/Keywords'
import WebCrawler from './pages/WebCrawler'
import UserManagement from './pages/UserManagement'
import Settings from './pages/Settings'
import Notifications from './pages/Notifications'
import Login from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <HashRouter basename="/">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/keywords" element={<Keywords />} />
              <Route path="/web-crawler" element={<WebCrawler />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
            </Route>
          </Route>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
