import {
    Box, Text, Flex, Button, Grid, GridItem, SimpleGrid, Stack, Icon, StackSeparator, Card, Avatar, VStack, HStack, Strong, Group
} from '@chakra-ui/react';
import { IoBarChartOutline } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { TbMessageShare } from "react-icons/tb";


import { AreaChart, Area, Line, BarChart, Legend, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Rectangle, Text as RechartsText, ResponsiveContainer } from 'recharts';

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

const data_fake_sellers = [
    {
        name: 'Rose Meadows',
        'Listing': '#2464',
        'Company name': "Nvidia",
        'color': "green"
    }, {
        name: 'Madden Esparza',
        'Listing': '#2464',
        'Company name': "Phillips",
        'color': "red"
    }, {
        name: 'Edison Norman',
        'Listing': '#2464',
        'Company name': "Unilever",
        'color': "purple"
    }, {
        name: 'Terrance Conner',
        'Listing': '#2464',
        'Company name': "Microsoft",
        'color': "blue"
    }, {
        name: 'Curtis Valentine',
        'Listing': '#2464',
        'Company name': "Tesla",
        'color': "orange"
    },
]



const data_take_down_items = [
    {
        item: 'Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL',
        'url': '#https://yourproducturlgoeshere1122.com',
        'how long ago': "1 min ago",
        id: 1,
    }, {
        item: 'Cigarettes Crush balls Aroma, BLUE',
        'url': '#https://yourproducturlgoeshere1122.com',
        'how long ago': "2 mins ago",
        id: 2,
    }, {
        item: 'Pokémon Enamel Pins Lot you can choose from ',
        'url': '#https://yourproducturlgoeshere1122.com',
        'how long ago': "3 mins ago",
        id: 3,
    }, {
        item: '4 PCS Herb Tobacco Spice Grinder, COMBAT',
        'url': '#https://yourproducturlgoeshere1122.com',
        'how long ago': "4 mins ago",
        id: 4,
    },
]

const MyLineChart = () => (
    <AreaChart width={300} height={88} data={data_linechart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="y" stroke="#85BA49" strokeWidth={1.5} dot={false} fill="#8884d8" />
        <Area type="monotone" dataKey="y" stroke="" fill="#E4F5D1" />
    </AreaChart>
);

const MyBarChart = () => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart
            data={data_barchart}
            margin={{
                top: 50,
                right: 5,
                left: 5,
                bottom: 5,
            }}
            barCategoryGap="30%"
        >
            <CartesianGrid strokeDasharray="5" stroke="#f0f0f0" />
            <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
            />
            <RechartsText
                x={20}
                y={15}
                textAnchor="start"
                dominantBaseline="hanging"
                style={{ fontSize: '20px', fontWeight: '600', fill: '#000000' }}
            >
                Analytics
            </RechartsText>
            <Legend
                y={5}
                wrapperStyle={{
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    color: '#000000',
                    alignItems: 'flex-start',
                    position: 'absolute',
                    top: '5px',
                    right: '20px',
                    flexWrap: 'wrap',
                    maxWidth: '60%'
                }}
                formatter={(value) => <span style={{ color: '#000000', fontWeight: '500', marginLeft: '5px', fontSize: '14px' }}>{value}</span>}
                iconType="circle"
                verticalAlign="top"
                align="right"
                layout="horizontal"
                height={35}
            />
            <Bar dataKey="Listings Removed" fill="#D7F0FC" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Notices Sent" fill="#CDEFD9" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Notices Rejected" fill="#FEA4A3" radius={[2, 2, 0, 0]} />

        </BarChart>
    </ResponsiveContainer>
);

export default function Dashboard() {

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
                    templateColumns="repeat(3, 1fr)"
                    gap={5}
                    mt="12px">

                    <GridItem rowSpan={1} colSpan={1}>
                        <Box {...boxStyles} >
                            <Stack>
                                <Flex gap="10px" alignItems="center" color="gray.500">
                                    <Icon size="lg" as={IoBarChartOutline} />
                                    <Text fontSize="md" >Number of Takedowns</Text>
                                </Flex>
                                <Flex alignItems="center" gap="10px">
                                    <Text fontSize="40px" color="black">593568 </Text>
                                    <Box bg="green.100" borderRadius={15} p={1}>
                                        <Flex alignItems="center" gap={1}>
                                            <Icon color="green.500" size="xs" as={FaArrowUpLong} />
                                            <Text fontSize="sm" color="green.500" fontWeight="normal">20.5%</Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Text fontSize="sm" color="gray.500">October 2023</Text>
                            </Stack>
                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        <Box {...boxStyles} >
                            <Stack>
                                <Flex gap="10px" alignItems="center" color="gray.500">
                                    <Icon size="lg" as={BiCoinStack} />
                                    <Text fontSize="md" >% of Goods Scraped</Text>
                                </Flex>
                                <Flex alignItems="center" gap="10px">
                                    <Text fontSize="40px" color="black">92.85% </Text>
                                    <Box bg="green.100" borderRadius={15} p={1}>
                                        <Flex alignItems="center" gap={1}>
                                            <Icon color="green.500" size="xs" as={FaArrowUpLong} />
                                            <Text fontSize="sm" color="green.500" fontWeight="normal">20.5%</Text>
                                        </Flex>
                                    </Box>                                </Flex>
                                <Text fontSize="sm" color="gray.500">October 2023</Text>
                            </Stack>
                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        <Box {...boxStyles} >
                            <Flex>
                                <VStack>
                                    <Flex gap="10px" textAlign="left" mr="auto" color="gray.500">
                                        <Icon size="lg" as={TbMessageShare} />
                                        <Text fontSize="md" >New Notices</Text>
                                    </Flex>
                                    <HStack>
                                        <Stack textAlign="left" mr="10px">
                                            <Text fontSize="40px" color="black">2395 </Text>
                                            <Text fontSize="sm" color="gray.500">October 2023</Text>
                                        </Stack>
                                        <MyLineChart />
                                    </HStack>
                                </VStack>
                            </Flex>


                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={2}>
                        <Box {...boxStyles} >
                            <MyBarChart />
                        </Box>
                    </GridItem>


                    <GridItem rowSpan={1} colSpan={1}>
                        <Box {...boxStyles} >
                            <Flex align="center" justify="space-between" mb={2}>
                                <Text fontSize="xl" fontWeight="semibold">Top 5 Fake Sellers</Text>
                                <Text fontSize="sm" fontWeight="semibold" ml="auto" textAlign="right">View all</Text>
                            </Flex>
                            <Stack gap="15px">
                                {data_fake_sellers.map(seller => (
                                    <Flex key={seller.Listing}>
                                        <Group
                                            bg={`${seller.color}.100`}
                                            p={5}
                                            borderRadius="md"
                                            width="25px"
                                            height="25px"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            mr="8px"
                                        >
                                            <Icon size="lg" as={RiUserLine} color={`${seller.color}.500`} />
                                        </Group>
                                        <VStack align="start" gap={0}>
                                            <Text fontSize="sm" color="black">{seller.name}</Text>
                                            <Text fontSize="2xs" color="gray.400" mt="1px">Company: {seller['Company name']}</Text>
                                        </VStack>
                                        <Text fontSize="sm" color="gray.500" ml="auto" textAlign="right">
                                            Listing {seller.Listing}
                                        </Text>
                                    </Flex>
                                ))}
                            </Stack>
                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={2}>
                        <Box {...boxStyles} >
                            <Flex>
                                <Text fontSize="xl" fontWeight="semibold" mb={6}>Notifications of Take Downs</Text>
                                <Text fontSize="sm" fontWeight="semibold" ml="auto" textAlign="right">View all</Text>
                            </Flex>
                            <Stack gap={4} separator={<StackSeparator />}>
                                {data_take_down_items.map(item =>
                                    <Flex key={item.id}>
                                        <Text fontSize="md" color="black">{item.item}</Text>
                                        <Text fontSize="sm" color="gray.500">{item.url}</Text>
                                        <Text fontSize="sm" color="gray.500" ml="auto" textAlign="right">{item['how long ago']}</Text>
                                    </Flex>
                                )}
                            </Stack>
                        </Box>
                    </GridItem>


                    <GridItem rowSpan={1} colSpan={1}>
                        <Box {...boxStyles} >
                            <HStack mb={4}>
                                <Text fontSize="xl" fontWeight="semibold">Top Admin</Text>
                                <Text fontSize="sm" fontWeight="semibold" ml="auto" textAlign="right">View all</Text>
                            </HStack>

                            <HStack mb={4} gap="40px">
                                <VStack gap="0" justifyContent="center" textAlign="center">
                                    <Avatar.Root width="100px" m={"6px"} height="100px" bg="purple.400" outlineWidth="6px"
                                        outlineColor="gray.200"
                                        outlineStyle="solid">
                                        <Avatar.Image src="../public/img/top_admin_pfp.jpg" />
                                        <Avatar.Fallback name="Carl Meadows" />
                                    </Avatar.Root>
                                    <Text fontWeight="semibold" textStyle="sm">
                                        Carl Meadows
                                    </Text>
                                    <Text color="fg.muted" textStyle="sm">
                                        Admin
                                    </Text>
                                </VStack>
                                <VStack width="60%">
                                    <Box bg="gray.200" flex="1" borderRadius="15px" p="15px" width="100%">
                                        <Flex width="100%">
                                            <Text fontSize="sm" mr="3px" color="gray.500">Notices Reviewed:</Text>
                                            <Text fontSize="sm" fontWeight="bold" color="black" ml="5px">23,353</Text>
                                        </Flex>
                                    </Box>

                                    <Button variant="subtle" bg="#6F6CF3" color="white" flex="1" borderRadius="15px" width="100%">
                                        View Details
                                    </Button>
                                </VStack>
                            </HStack>
                        </Box>
                    </GridItem >

                </Grid >

            </SimpleGrid >
        </Box >
    )
}
