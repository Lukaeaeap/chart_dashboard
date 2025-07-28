import { List, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react"
import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";

export default function Sidebar() {
    return (
        <>
            <Text fontSize="32px" color="black" fontFamily="Urbanist">LOGO</Text>
            <List.Root
                as="nav"
                color="black"
                fontSize="16px"
                gap="20px"
                variant="plain"
            >
                <List.Item marginTop="20px">
                    <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaCalendarAlt} color="black" mr={2} />
                        Dashboard
                    </NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Reviews</NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Keywords</NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Web crawler</NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Notifications</NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Settings</NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Settings</NavLink>
                </List.Item>
                <List.Item>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        User management</NavLink>
                </List.Item>

                <List.Item marginTop="300px">
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? 'black' : 'black',
                    })}>
                        <Icon as={FaRegUserCircle} color="black" mr={2} />
                        Log out</NavLink>
                </List.Item>
            </List.Root>
        </>
    )
}