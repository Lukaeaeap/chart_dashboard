import {
  Box, Text, Flex, Button
} from '@chakra-ui/react';
// import { useLoaderData } from 'react-router-dom';



export default function Dashboard() {

  const boxStyles = {
    bg: 'white',
    m: '20px',
    p: '20px',
    color: 'black',
    textAlign: "left",
    borderRadius: "15px",
  }

  return (

    <>
      <Flex alignItems="center" gap="10px" width="100%" justifyContent="space-between">
        <Text fontSize="lg" >Wed, Oct 27</Text>
        <Box>
          <Text fontSize="sm" color="gray.500" >Choose Platform:</Text>
          <Button bg="white" color="black" size="sm">Alibaba</Button>
          <Button bg="white" color="black" size="sm">Ali Express</Button>
          <Button bg="#6F6CF3" color="white" size="sm">All</Button>
        </Box>

      </Flex>

      <Box {...boxStyles}>
        <Text fontSize="2xl" fontWeight="bold">Box Title</Text>
        <Text fontSize="md" color="gray.500">Box content goes here.</Text>
      </Box>
    </>
  )
}
