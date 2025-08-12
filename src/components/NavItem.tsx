import { Box, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

interface NavItemProps {
    to: string;
    icon: IconType;
    label: string;
}

export const NavItem = ({ to, icon, label }: NavItemProps) => {
    return (
        <Box>
            <NavLink to={to}>
                {({ isActive }: { isActive: boolean }) => (
                    <div
                        style={{
                            color: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            padding: '12px 16px',
                            fontSize: '16px',
                            lineHeight: '1',
                            backgroundColor: isActive ? '#6F6CF3' : 'transparent',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            marginBottom: '4px',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.backgroundColor = '#E5E4FF';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <Icon as={icon} color={isActive ? 'white' : 'black'} mr={3} boxSize="16px" />
                        <span style={{ color: isActive ? 'white' : 'black' }}>{label}</span>
                    </div>
                )}
            </NavLink>
        </Box>
    );
};
