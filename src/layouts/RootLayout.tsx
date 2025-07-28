import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(3,1fr)" bg="#F6F6F8" width="100vw" height="100vh">
      <GridItem
        as="aside"
        bg="#FFFFFF"
        width='220px'
        p={{ base: '16px', lg: '30px', xl: '40px' }}>
        <Sidebar />
      </GridItem>

      <GridItem
        as="main"
        width="1200px"
        p={{ base: '20px', lg: '30px', xl: '40px' }}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
