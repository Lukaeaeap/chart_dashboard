import { Box, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { useAuth } from "../contexts/AuthContext";

interface LogoutButtonProps {
    icon: IconType;
    label: string;
}

export const LogoutButton = ({ icon, label }: LogoutButtonProps) => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <Box>
            <div
                style={{
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    padding: '12px 16px',
                    fontSize: '16px',
                    lineHeight: '1',
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    marginBottom: '4px',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E5E4FF';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={handleLogout}
            >
                <Icon as={icon} color="black" mr={3} boxSize="16px" />
                <span style={{ color: 'black' }}>{label}</span>
            </div>
        </Box>
    );
};
