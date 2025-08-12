import {
  Box, Text, Flex, Button, Grid, GridItem, SimpleGrid, Stack, Icon, Image, Tabs, StackSeparator, Card, Avatar, VStack, HStack, Strong, Group
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
    image: "/img/product-images/product1.jpg",
    status: "Removed"
  },
  {
    id: 2,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product2.jpg",
    status: "Reminder Sent"
  },
  {
    id: 3,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product3.jpg",
    status: "Removed"

  },
  {
    id: 4,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product4.jpg",
    status: "Removed"

  },
  {
    id: 5,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product5.jpg",
    status: "Removed"

  },
  {
    id: 6,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product6.jpg",
    status: "Removed"

  },
  {
    id: 7,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product7.jpg",
    status: "Removed"

  },
  {
    id: 8,
    name: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    image: "/img/product-images/product8.jpg",
    status: "Removed"

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
    <Box width="100%" maxWidth="100%" overflow="hidden">
      <SimpleGrid p="12px" maxWidth="100%">

        <Tabs.Root variant="subtle" defaultValue="grid">
          <Flex direction={{ base: "column", md: "row" }} gap={4} alignItems={{ base: "stretch", md: "center" }} justifyContent="space-between" maxWidth="100%">
            <Text fontSize="lg" flexShrink={0}>Product List</Text>
            <Tabs.List gap={3} flexShrink={0}>
              <Tabs.Trigger
                value="grid"
                color='black'
                minWidth="fit-content"
                px={6}
                bg='white'
                _active={{ bg: "black", color: "white" }}
                _selected={{ bg: "black", color: "white" }}
              >
                Grid View
              </Tabs.Trigger>
              <Tabs.Trigger
                value="list"
                color='black'
                minWidth="fit-content"
                px={6}
                bg='white'
                _active={{ bg: "black", color: "white" }}
                _selected={{ bg: "black", color: "white" }}
              >
                List View
              </Tabs.Trigger>
            </Tabs.List>
          </Flex>
          <Tabs.Content value="grid">
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)"
              }}
              gap={5}
              mt="12px"
              maxWidth="100%">

              {data_products.map(product => (
                <GridItem key={product.id} maxWidth="100%">
                  <Box {...boxStyles} maxWidth="100%">
                    <Stack>
                      <Image src={product.image} alt={product.name} width="100%" height="300px" borderRadius="md" />
                      <Text fontSize="md" >{product.name}</Text>
                      <Text fontSize="sm" color="gray.150" wordBreak="break-all">{product.url}</Text>
                      <HStack >
                        <Button bg="#6F6CF3" color="white" size="sm">View Details</Button>
                        <Button bg="black" ml="auto" color="white" size="sm">Source</Button>
                      </HStack>
                    </Stack>
                  </Box>
                </GridItem>
              ))}
            </Grid >
          </Tabs.Content>
          <Tabs.Content value="list">
            <VStack
              gap={5}
              mt="12px"
              maxWidth="100%">
              {data_products.map(product => (
                <GridItem key={product.id} width="100%" maxWidth="100%">
                  <Box {...boxStyles} maxWidth="100%">
                    <HStack gap="25px" flexWrap="wrap">
                      <Image src={product.image} alt={product.name} width="75px" height="75px" borderRadius="md" />
                      <VStack alignItems="left" flex="1" minWidth="200px">
                        <Text fontSize="md" >{product.name}</Text>
                        <Text fontSize="sm" color="gray.150" wordBreak="break-all">{product.url}</Text>
                      </VStack >
                      <Text
                        borderRadius="md"
                        p="5px"
                        fontSize="sm"
                        fontWeight="semibold"
                        bg={product.status === "Reminder Sent" ? "#ffefe7" : "#ebfdef"}
                        color={product.status === "Reminder Sent" ? "#ff9600" : "#42aa65"}
                        whiteSpace="nowrap"
                      >
                        {product.status}
                      </Text>
                      <HStack ml="auto" flexShrink={0}>
                        <Button py="25px" minWidth="fit-content" bg="black" ml="auto" color="white" size="xs" fontWeight={"normal"}>Source</Button>
                        <Button py="25px" minWidth="fit-content" bg="#6F6CF3" color="white" size="xs" fontWeight={"normal"}>View Details</Button>
                      </HStack>
                    </HStack>
                  </Box>
                </GridItem>
              ))}
            </VStack >
          </Tabs.Content>

        </Tabs.Root>


      </SimpleGrid >
    </Box >
  )
}
