import {
  Box, Text, Flex, Button, Grid, GridItem, SimpleGrid, Stack, Icon, Image, StackSeparator, Card, Avatar, VStack, HStack, Strong, Group
} from '@chakra-ui/react';
import { IoBarChartOutline } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { TbMessageShare } from "react-icons/tb";


const data_products = [
  {
    id: 1,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product1.jpg"
  },
  {
    id: 2,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product2.jpg"
  },
  {
    id: 3,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product3.jpg"
  },
  {
    id: 4,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product4.jpg"
  },
  {
    id: 5,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product5.jpg"
  },
  {
    id: 6,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product6.jpg"
  },
  {
    id: 7,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product7.jpg"
  },
  {
    id: 8,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "public/img/product-images/product8.jpg"
  }
];

export default function Reviews() {

  const boxStyles = {
    bg: 'white',
    p: '20px',
    color: 'black',
    textAlign: "left",
    borderRadius: "15px",
  }

  return (
    <Box width="100%">
      <SimpleGrid p="12px">
        <Flex alignItems="center" gap="10px" width="100%" justifyContent="space-between">
          <Text fontSize="lg" >Product List</Text>
          <Box>
            <Flex alignItems="center" gap="10px">
              <Button bg="white" color="black" size="sm">Grid View</Button>
              <Button bg="white" color="black" size="sm">List View</Button>
            </Flex>
          </Box>
        </Flex>

        <Grid

          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={5}
          mt="12px">

          {data_products.map(product => (
            <GridItem rowSpan={1} colSpan={1} key={product.id}>
              <Box {...boxStyles} >
                <Stack>
                  <Image src={product.image} alt={product.name} width="100%" height="300px" borderRadius="md" />
                  <Text fontSize="md" >{product.name}</Text>
                  <Text fontSize="sm" color="gray.350">{product.url}</Text>
                  <HStack >
                    <Button bg="#6F6CF3" color="white" size="sm">View Details</Button>
                    <Button bg="black" ml="auto" color="white" size="sm">Source</Button>
                  </HStack>
                </Stack>
              </Box>
            </GridItem>
          ))}

        </Grid >

      </SimpleGrid >
    </Box >
  )
}
