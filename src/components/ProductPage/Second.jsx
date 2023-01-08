import { Box,Text } from '@chakra-ui/react'
import React from 'react'

function Second() {
  return (
    <div>
        <Box display={"flex"} ml="100px" mt="25px" 
        fontWeight={"400"}
        fontSize="13px" >
            <Text >Home/</Text>
            <Text> Motor Insurance/</Text>
            <Text> Car Insurance</Text>
        </Box>
        <Box Align={"center"} mt="60px" fontSize="22px" fontWeight={"700"}>
            <Text>Buy/renew car insurance online in India</Text>
            <Text>What is car insurance?</Text>
        </Box>

        <Box mt="13px" ml="100px" fontSize="14px" fontWeight={"400"} color="gray.600"
        
        >
            <p mt="14px" letter-spacing="10px"  >Car insurance refers to an insurance policy that covers various car-related risks. You need to pay an insurance premium to purchase a car insurance policy from an 
             insurer (for example<br/> , ACKO)And if your car faces damages or you cause damage to others via the insured car, your insurer will offer financial assistance, as per the 
                applicable terms and conditions.
                <br/>
                </p>
                <br/>
               

<Text>At ACKO, we have curated different car insurance plans to suit your unique needs. Whether you want the basic Third-party Insurance Policy or Bumper-to-Bumper Car 
Insurance, you  <br/>can choosefrom different types of insurance plans for your car.</Text>
<br/>


<Text>You can also customise the Insured Declared Value (IDV) and choose from an array of suitable add-on covers to enhance the coverage in case of a Comprehensive
 Policy. Note that we<br/> must  renew your car insurance policy within the expiry date to enjoy continuous coverage. You can quickly renew car insurance online through 
 our simple, easy-to-use mobile app or webs</Text>

        </Box>
    </div>
  )
}

export default Second