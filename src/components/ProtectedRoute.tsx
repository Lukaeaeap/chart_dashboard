import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ authenticated }: { authenticated: boolean }) {
    return (
        authenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

