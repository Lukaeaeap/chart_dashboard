import { Flex, Text, Box, InputGroup, Spacer, Heading, HStack, Span, Avatar, Input, Group, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { mainNavItems } from "../data/navigationData";
import { useAuth } from "../contexts/AuthContext";


const MAX_CHARACTERS = 20

export default function Navbar() {
    const [value, setValue] = useState("")
    const location = useLocation()
    const { user } = useAuth()

    // Get current page name from navigation data
    const getCurrentPageName = () => {
        const currentItem = mainNavItems.find(item => item.to === location.pathname)
        return currentItem ? currentItem.label : "Dashboard"
    }

    return (
        <Flex as="nav" width="100%" height="51px" p="10px" mb="40px" alignItems="center">
            <Heading as="h1" size="md" color="#161819">{getCurrentPageName()}</Heading>
            <Spacer />

            <Group ml="auto" alignItems="right">
                <InputGroup
                    width="500px"
                    mr="30px"
                    borderRadius={"14px"}
                    borderColor="gray.300"
                    endElement={
                        <Span color="fg.muted" textStyle="xs">
                            <Icon size="md" as={LuSearch} color="fg.muted" opacity="0.5" />
                        </Span>
                    }>
                    <Input
                        variant="subtle"
                        bg="#FFFFFF"
                        placeholder="Search"
                        value={value}
                        maxLength={MAX_CHARACTERS}
                        onChange={(e) => {
                            setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
                        }}
                    />
                </InputGroup>

                <HStack gap="20px" >
                    <Avatar.Root bg="purple.400" size="md" borderRadius="full">
                        <Avatar.Fallback name={user?.name || "User"} />
                        <Avatar.Image src={'../' + "public/img/john-smith-profilepic.jpg"} />
                    </Avatar.Root>
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Text fontSize="18px">{user?.name || "User"}</Text>
                        <Text fontSize="14px" color="#161819" mt="-1" opacity="0.5">Admin</Text>
                    </Box>
                </HStack>
            </Group>



        </Flex >

    );
}