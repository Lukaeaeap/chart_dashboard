import { VStack, Text, Box } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { LogoutButton } from "./LogoutButton";
import { mainNavItems, bottomNavItems } from "../data/navigationData";

const Sidebar = () => {
    return (
        <VStack

            align="flex-start"
            justifyContent="left"
            gap={4}
            width="100%"
            minHeight="calc(100vh - 80px)"
        >
            <Text fontSize="32px" fontWeight="extrabold" color="black" mb={6}>LOGO</Text>

            <VStack
                as="nav"
                alignItems="flex-start"
                gap={3}
                width="100%"
                flex="1">
                {mainNavItems.map((item, index) => (
                    <NavItem
                        key={index}
                        to={item.to}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </VStack>

            <Box width="100%" mt="auto" pt={4}>
                {bottomNavItems.map((item, index) => (
                    <LogoutButton
                        key={index}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </Box>
        </VStack>
    );
};

export default Sidebar;
