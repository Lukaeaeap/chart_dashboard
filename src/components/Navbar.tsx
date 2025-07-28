import { Flex, Text, Box, InputGroup, Spacer, Heading, HStack, Span, Avatar, Input, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";


const MAX_CHARACTERS = 20

export default function Navbar() {
    const [value, setValue] = useState("")

    return (
        <Flex as="nav" width="1172px" height="51px" p="10px" mb="40px" gap="41px" alignItems="center" bg="gray.100">
            <Heading as="h1" size="md" color="#161819">Dashboard</Heading>
            <Spacer />


            <InputGroup
                width="491px"
                borderRadius={"14px"}
                borderColor="gray.300"
                endElement={
                    <Span color="fg.muted" textStyle="xs">
                        <Icon as={LuSearch} color="fg.muted" opacity="0.5" />
                    </Span>
                }
            >
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

            <HStack gap="20px">
                <Avatar.Root bg="purple.400" size="md" borderRadius="full">
                    <Avatar.Fallback name="Test User" />
                    <Avatar.Image src={'../' + "public/img/john-smith-profilepic.jpg"} />
                </Avatar.Root>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Text fontSize="18px">John Smith</Text>
                    <Text fontSize="14px" color="#161819" mt="-1" opacity="0.5">Admin</Text>
                </Box>
            </HStack>

        </Flex >
        // <Flex bg="gray.200" justifyContent="space-between" wrap="wrap" gap="2">
        //     <Box w='150px' h='50px' bg='red'>1</Box>
        //     <Box w='150px' h='50px' bg='red'>2</Box>
        //     <Box w='150px' h='50px' flexGrow="1" bg='red'>3</Box>
        //     <Box w='150px' h='50px' flexGrow="2" bg='red'>4</Box>
        // </Flex>
    );
}