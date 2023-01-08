import { Box ,HStack,Stack,Text} from '@chakra-ui/react'
import React from 'react'

function Third() {
  return (
    <div>
        <Box mt="100px" >
            <Text align={"center"} fontSize="28px" fontWeight={"700"}>Key features of ACKO’s online car insurance</Text>
            
        </Box>

        <Stack ml="200px" >
        <Text fontSize="14px" fontWeight={"400"} color="gray.600">Insuring your car with us is simple, easy, and convenient. Being digital-first helps us seamlessly offer almost all of our services online.
        Additionally,<br/></Text>
       
        <div  style={{marginLeft:"33%"}} > <Text  fontSize="14px" fontWeight={"400"} color="gray.600">you get the following key features.
        </Text>
        
        </div>         
        </Stack>
        
       

    </div>
  )
}

export default Third