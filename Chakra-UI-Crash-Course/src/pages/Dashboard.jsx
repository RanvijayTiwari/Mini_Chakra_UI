import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
  
  return (
    //minWidth we pass so each box will occupy 250px and if we pass minwidth no need to write columns because it overwrite , after 
    // 4 column it still width is there it make 5 box in 1 row and as size decrease it remove one box from 1 row and move to next row

  <SimpleGrid columns={4} p={"10px"}  spacing={10} minChildWidth={"250px"}>

      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>

      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>
      <Box bg="red" h="200px" border="1px solid"></Box>


  </SimpleGrid>

  )
}
