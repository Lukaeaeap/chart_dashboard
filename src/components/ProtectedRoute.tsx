import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Box, Spinner, Center } from '@chakra-ui/react'

export default function ProtectedRoute() {
    const { isAuthenticated, loading } = useAuth()

    if (loading) {
        return (
            <Center height="100vh">
                <Box>
                    <Spinner size="xl" color="purple.500" />
                </Box>
            </Center>
        )
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

