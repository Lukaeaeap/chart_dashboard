import { List } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react"
import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

export default function Sidebar() {
    return (
        <List.Root
            as="nav"
            color="white"
            fontSize="1.6em"
            gap="20px"
            variant="plain"
        >
            <List.Item>
                <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? 'white' : 'white',
                })}>
                    <Icon as={FaCalendarAlt} color="white" mr={2} />
                    - Dashboard
                </NavLink>
            </List.Item>
            <List.Item>
                <NavLink to="/profile" style={({ isActive }) => ({
                    color: isActive ? 'white' : 'white',
                })}>
                    <Icon as={FaRegUserCircle} color="white" mr={2} />
                    - Profile</NavLink>
            </List.Item>


        </List.Root>
    )
}