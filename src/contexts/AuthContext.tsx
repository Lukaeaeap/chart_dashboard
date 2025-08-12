import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    email: string;
    name?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database
const MOCK_USERS = [
    { email: 'admin@test.com', password: 'admin123', name: 'John Smith' },
    { email: 'user@test.com', password: 'user123', name: 'Test User' },
];

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check for existing session on app start
    useEffect(() => {
        const checkAuthStatus = () => {
            try {
                const savedUser = localStorage.getItem('authUser');
                const savedTimestamp = localStorage.getItem('authTimestamp');

                if (savedUser && savedTimestamp) {
                    const timestamp = parseInt(savedTimestamp);
                    const now = Date.now();
                    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours

                    // Check if session is still valid
                    if (now - timestamp < sessionDuration) {
                        setUser(JSON.parse(savedUser));
                    } else {
                        // Session expired, clear storage
                        localStorage.removeItem('authUser');
                        localStorage.removeItem('authTimestamp');
                    }
                }
            } catch (error) {
                console.error('Error checking auth status:', error);
                localStorage.removeItem('authUser');
                localStorage.removeItem('authTimestamp');
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Check credentials against mock database
            const foundUser = MOCK_USERS.find(
                u => u.email === email && u.password === password
            );

            if (foundUser) {
                const userData = { email: foundUser.email, name: foundUser.name };
                setUser(userData);

                // Save to localStorage for session persistence
                localStorage.setItem('authUser', JSON.stringify(userData));
                localStorage.setItem('authTimestamp', Date.now().toString());

                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authUser');
        localStorage.removeItem('authTimestamp');
        navigate('/login');
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
