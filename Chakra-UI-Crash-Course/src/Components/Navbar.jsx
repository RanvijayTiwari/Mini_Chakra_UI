import { Box, Button, Flex, HStack, Heading,Spacer,Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (

    <Flex as={"nav"} p={"10px "} alignItems={"center"}>
        <Heading>Dojo Tasks</Heading>
        <Spacer/>

         <HStack spacing={"20px"}>

        <Box bg="gray.200">M</Box>
        <Text>ranvijay@123ninja.dev</Text>
        <Button>Logout</Button>
         </HStack>

    </Flex>
    // <Flex bg={"gray.400"} justifyContent={"space-between"} wrap={"wrap"} gap={"2"}>
    //     <Box w={"150px"} h={"50px"} bg={"green"}>1</Box>
    //     <Box w={"150px"} h={"50px"} bg={"yellow"}>2</Box>
    //     <Box w={"150px"} h={"50px"} flexGrow={"1"} bg={"red"}>3</Box>
    //     <Box w={"150px"} h={"50px"} bg={"blue"}>4</Box>
    //     <Box w={"150px"} h={"50px"} bg={"brown"}>5</Box>

    // </Flex>
  )
}

export default Navbar
