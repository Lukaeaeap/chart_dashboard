import { useAuth } from '../contexts/AuthContext';
import { Box, Text, Button } from '@chakra-ui/react';

export const AuthDebug = () => {
    const { user, isAuthenticated, loading, logout } = useAuth();

    const clearStorage = () => {
        localStorage.removeItem('authUser');
        localStorage.removeItem('authTimestamp');
        window.location.reload();
    };

    return (
        <Box p={4} bg="yellow.100" border="1px solid" borderColor="yellow.300" borderRadius="md">
            <Text fontWeight="bold" mb={2}>Auth Debug Info:</Text>
            <Text>Loading: {loading ? 'true' : 'false'}</Text>
            <Text>Authenticated: {isAuthenticated ? 'true' : 'false'}</Text>
            <Text>User: {user ? JSON.stringify(user) : 'null'}</Text>
            <Button onClick={clearStorage} size="sm" mt={2} bg="red.500" color="white">
                Clear Session & Reload
            </Button>
            <Button onClick={logout} size="sm" mt={2} ml={2} bg="blue.500" color="white">
                Logout
            </Button>
        </Box>
    );
};
