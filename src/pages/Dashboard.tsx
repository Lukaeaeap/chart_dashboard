import {
  Box, Text, Flex, Button, Grid, GridItem, SimpleGrid, Stack, Icon
} from '@chakra-ui/react';
import { IoBarChartOutline } from "react-icons/io5";

import { AreaChart, Area, Line, BarChart, Legend, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Rectangle } from 'recharts';

const data_linechart = [
  { x: 0, y: 5 },
  { x: 5, y: 10 },
  { x: 10, y: 5 },
  { x: 15, y: 15 },
  { x: 20, y: 5 },
  { x: 25, y: 15 },
  { x: 30, y: 30 },
  { x: 35, y: 25 },
  { x: 40, y: 45 },
  { x: 45, y: 40 },
  { x: 50, y: 48 }
];

const data_barchart = [
  {
    name: 'Jan',
    'Listings Removed': 4000,
    'Notices Sent': 2400,
    'Notices Rejected': 300,
  },
  {
    name: 'Feb',
    'Listings Removed': 3000,
    'Notices Sent': 1398,
    'Notices Rejected': 350,
  },
  {
    name: 'Mar',
    'Listings Removed': 2000,
    'Notices Sent': 4000,
    'Notices Rejected': 400,
  },
  {
    name: 'Apr',
    'Listings Removed': 2780,
    'Notices Sent': 3908,
    'Notices Rejected': 350,
  },
  {
    name: 'May',
    'Listings Removed': 1890,
    'Notices Sent': 4300,
    'Notices Rejected': 550,
  },
  {
    name: 'Jun',
    'Listings Removed': 2390,
    'Notices Sent': 3800,
    'Notices Rejected': 500,
  },
  {
    name: 'Jul',
    'Listings Removed': 3490,
    'Notices Sent': 4300,
    'Notices Rejected': 300,
  },
  {
    name: 'Aug',
    'Listings Removed': 3490,
    'Notices Sent': 4300,
    'Notices Rejected': 340,
  },
  {
    name: 'Sep',
    'Listings Removed': 3490,
    'Notices Sent': 4300,
    'Notices Rejected': 400,
  },
  {
    name: 'Oct',
    'Listings Removed': 3490,
    'Notices Sent': 4300,
    'Notices Rejected': 300,
  },
  {
    name: 'Nov',
    'Listings Removed': 3490,
    'Notices Sent': 4300,
    'Notices Rejected': 300,
  },
  {
    name: 'Dec',
    'Listings Removed': 3490,
    'Notices Sent': 4300,
    'Notices Rejected': 300,
  },
];

const MyLineChart = () => (
  <AreaChart width={155} height={90} data={data_linechart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="y" stroke="#85BA49" strokeWidth={1.5} dot={false} fill="#8884d8" />
    <Area type="monotone" dataKey="y" stroke="" fill="#E4F5D1" />
  </AreaChart>
);

const MyBarChart = () => (
  <BarChart
    width={500}
    height={300}
    data={data_barchart}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Legend />
    <Bar dataKey="Listings Removed" fill="#D7F0FC" />
    <Bar dataKey="Notices Sent" fill="#CDEFD9" />
    <Bar dataKey="Notices Rejected" fill="#FEA4A3" />

  </BarChart>
);

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
      <SimpleGrid p="20px">
        <Flex alignItems="center" gap="10px" width="100%" justifyContent="space-between">
          <Text fontSize="lg" >Wed, Oct 27</Text>
          <Box>
            <Flex alignItems="center" gap="10px">
              <Text fontSize="sm" color="gray.500">Choose Platform:</Text>
              <Button bg="white" color="black" size="sm">Alibaba</Button>
              <Button bg="white" color="black" size="sm">Ali Express</Button>
              <Button bg="#6F6CF3" color="white" size="sm">All</Button>
            </Flex>
          </Box>

        </Flex>

        <Grid
          h="200px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}>

          <GridItem rowSpan={1} colSpan={2}>
            <Box {...boxStyles} >
              <Stack>
                <Flex gap="10px" alignItems="center" color="gray.500">
                  <Icon as={IoBarChartOutline} />
                  <Text fontSize="md" >Number of Takedowns</Text>
                </Flex>
                <Flex alignItems="center" gap="10px">
                  <Text fontSize="40px" color="black">593568 </Text>
                  <Text fontSize="md" color="green.500" fontWeight="bold">20.5%</Text>
                </Flex>
                <Text fontSize="sm" color="gray.500">October 2023</Text>
              </Stack>
            </Box>
          </GridItem>

          <GridItem rowSpan={1} colSpan={2}>
            <Box {...boxStyles} >
              <MyLineChart />
            </Box>
          </GridItem>

          <GridItem rowSpan={1} colSpan={2}>
            <Box {...boxStyles} >
              <MyLineChart />
            </Box>
          </GridItem>

          <GridItem rowSpan={1} colSpan={4}>
            <Box {...boxStyles} >
              <Text fontSize="2xl" fontWeight="bold">Analytics</Text>
              <MyBarChart />
            </Box>
          </GridItem>


          <GridItem rowSpan={1} colSpan={2}>
            <Box {...boxStyles} >
              <MyLineChart />
            </Box>
          </GridItem>

          <GridItem rowSpan={1} colSpan={4}>
            <Box {...boxStyles} >
              <Text fontSize="2xl" fontWeight="bold">Analytics</Text>
              <Text fontSize="md" color="gray.500">Box content goes here.</Text>
            </Box>
          </GridItem>


          <GridItem rowSpan={1} colSpan={2}>
            <Box {...boxStyles} >

            </Box>
          </GridItem>

        </Grid>

      </SimpleGrid >
    </>
  )
}
