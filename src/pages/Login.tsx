import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
    Box,
    VStack,
    Input,
    Button,
    Text,
    Heading,
    Center
} from '@chakra-ui/react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated, navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (email.length < 5) {
            setError('Email must be at least 5 characters long')
            return
        }

        if (password.length < 5) {
            setError('Password must be at least 5 characters long')
            return
        }

        setIsLoading(true)

        try {
            const success = await login(email, password)
            if (success) {
                navigate('/')
            } else {
                setError('Invalid email or password. Try: admin@test.com / admin123')
            }
        } catch (err) {
            setError('An error occurred during login. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Center minHeight="100vh" bg="gray.50">
            <Box width="100%" maxWidth="400px" p={8}>
                <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
                    <VStack gap={6}>
                        <VStack gap={2}>
                            <Heading size="lg" color="gray.700">Welcome Back</Heading>
                            <Text color="gray.500" textAlign="center">
                                Sign in to your account to continue
                            </Text>
                        </VStack>

                        {error && (
                            <Box bg="red.50" p={4} borderRadius="md" width="100%" border="1px solid" borderColor="red.200">
                                <Text color="red.600" fontSize="sm">{error}</Text>
                            </Box>
                        )}

                        <Box bg="blue.50" p={4} borderRadius="md" width="100%">
                            <Text fontSize="sm" color="blue.700" fontWeight="medium" mb={2}>
                                Demo Credentials:
                            </Text>
                            <Text fontSize="xs" color="blue.600">
                                Email: admin@test.com<br />
                                Password: admin123
                            </Text>
                        </Box>

                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <VStack gap={4}>
                                <Box width="100%">
                                    <Text mb={2} fontSize="sm" fontWeight="medium">Email</Text>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        bg="white"
                                        required
                                    />
                                </Box>

                                <Box width="100%">
                                    <Text mb={2} fontSize="sm" fontWeight="medium">Password</Text>
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        bg="white"
                                        required
                                    />
                                </Box>

                                <Button
                                    type="submit"
                                    bg="#6F6CF3"
                                    color="white"
                                    size="lg"
                                    width="100%"
                                    loading={isLoading}
                                    _hover={{ bg: "#5A56E0" }}
                                >
                                    {isLoading ? 'Signing in...' : 'Sign In'}
                                </Button>
                            </VStack>
                        </form>
                    </VStack>
                </Box>
            </Box>
        </Center>
    )
}