import { Flex } from "@chakra-ui/react";

export default function NoPage() {
    return (
        <Flex alignItems="center" justifyContent="center" bg="gray.100" width="100vw" height="100vh" flexDirection="column">

            <h2>ERROR 404</h2>
            <p>Page not found</p>
        </Flex>
    )
}