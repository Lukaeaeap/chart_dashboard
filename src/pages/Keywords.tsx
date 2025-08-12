import { Tabs, List } from "@chakra-ui/react";
import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { Icon } from "@chakra-ui/react"
import { FaRegCheckCircle } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";

export default function Profile() {


  return (
    <Tabs.Root defaultValue="tab-1" mt="40px" p="20px" variant="enclosed" >
      <Tabs.List>
        <Tabs.Trigger _selected={{ color: 'white', bg: 'purple.400' }} value="tab-1">Account Info</Tabs.Trigger>
        <Tabs.Trigger _selected={{ color: 'white', bg: 'purple.400' }} value="tab-2">Task History</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab-1">
        Info about this user:
        <br />
        <br />
        <List.Root variant="plain" gap="5px">
          <List.Item>
            <Icon as={FaCalendarAlt} mr={2} />
            Email: user@example.com
          </List.Item>
          <List.Item>
            <Icon as={FaRegUserCircle} mr={2} />
            Call me at +1234567890
          </List.Item>
          <List.Item>
            <Icon as={FaUsers} mr={2} />
            Find me at: address 123, City, Country
          </List.Item>
        </List.Root>
      </Tabs.Content>
    </Tabs.Root>
  )
}
