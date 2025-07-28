import { Flex, Text, Box, Button, Spacer, Heading, HStack, Icon, Avatar, Float, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {

    return (
        <Flex as="nav" p="10px" mb="20px" alignItems="center" bg="gray.100">
            <Heading as="h1" size="md" color="blue.500">Tasks - Task Manager</Heading>
            <Spacer />

            <HStack gap="20px">
                <Avatar.Root bg="purple.400" size="md" borderRadius="full">
                    <Avatar.Fallback name="Test User" />
                    {/* <Avatar.Image src={'../' + user.img} /> */}
                    <Float placement="bottom-end" offsetX="1" offsetY="1">
                        <Circle
                            bg="green.500"
                            size="12px"
                            outline="0.2em solid"
                            outlineColor="bg"
                        />
                    </Float>
                </Avatar.Root>
                <Text>user@example.com</Text>
                <Button bg="purple.400" onClick={() => {

                    logout();
                    console.log("Logout clicked");
                }}
                >Logout</Button>
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