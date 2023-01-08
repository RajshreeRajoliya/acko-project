import { Box, HStack, IconButton, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdToggleOn } from 'react-icons/md';


function SingleCard({ heading, content }) {
  return (

    <HStack align="start" gap={'15px'}>
      <Box height="100%">
        <IconButton size={'xs'} borderRadius="90%" bg="rgba( 0,0,0,0.1)"
          color="rgb(89, 32, 197)" icon={<MdToggleOn />}>
        </IconButton>
      </Box>
      <Stack lineHeight={"30px"}>
        <Text m ="0" fontSize={"18px"} fontWeight={"700"} >{heading}</Text>
        <Text fontSize="14px" fontWeight={"300"}>{content}</Text>
      </Stack>



    </HStack>





  )
}

export default SingleCard