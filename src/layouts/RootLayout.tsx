import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="220px 1fr" bg="#F6F6F8" width="100vw" height="100vh" overflow="hidden">
      <GridItem
        as="aside"
        bg="#FFFFFF"
        p={{ base: '16px', lg: '30px', xl: '40px' }}>
        <Sidebar />
      </GridItem>

      <GridItem
        as="main"
        p={{ base: '16px', lg: '20px', xl: '24px' }}
        overflow="auto">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
