import {
  SimpleGrid, Box,

} from '@chakra-ui/react';
// import { useLoaderData } from 'react-router-dom';



export default function Dashboard() {

  const boxStyles = {
    bg: 'blue.400',
    p: '20px',
    color: 'white',
    m: '10px',
    textAlign: "center",
    _hover: {
      bg: 'green.600',
      color: 'white'
    }
  }

  return (
    <SimpleGrid gap={10} minChildWidth="250px" >

      <Box {...boxStyles}>
        A box with text
      </Box>
    </SimpleGrid>
  )
}
