import { Box, Button, Divider, HStack, Input, Stack, useToast, Text, IconButton, Image } from '@chakra-ui/react';
import React from 'react'
import { FaCarSide } from 'react-icons/fa';
import {RiMotorbikeLine} from 'react-icons/ri'
import { useState } from 'react';
import { useStore,useDispatch } from 'react-redux';
import { updateSearch } from '../../Redux/DataReducer/DataAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';




function First(props) {
    const store = useStore();
    const dispatch = useDispatch();
    const state = store.getState();
    const [number,setNumber] = useState('');
    console.log(state);

    

    const toast = useToast()
    return (
        <HStack width="100%"
            padding="100px"
            justify={"space-between"}
            backgroundColor="rgb(89, 32, 197)">
            <Box width={{ base: "80%", sm: "60%", lg: "50%", xl: "40%" }}>

                <Stack color="white" spacing={"5px"}>
                    <h1 style={{ fontSize: "30px", fontWeight: "700" }}>Two Wheeler Insurance</h1>

                    <h2 style={{ fontSize: "22px", fontWeight: "600" }}>Quick bike policy purchase. Lightning-fast renewal. Hassle-free claims.</h2>
                    <h1 style={{ fontSize: "15px", fontWeight: "500" }}>Bike insurance starting at ₹555*</h1>

                </Stack>

                <div>
                    <HStack
                        padding="15px"
                        bg={"white"}
                        borderRadius="10px"
                        mt={"50px"}
                    >
                        <Input type="text"
                            placeholder="Enter Your Bike Name"
                            border="none"
                            padding="7px"
                            variant={"unstyled"}
                            onChange={(e)=>setNumber(e.target.value)}
                            />
                     <Link to="/search">  <Button 
                        onClick={()=>{
                            dispatch(updateSearch(number))
                        }}
                            padding="25px 50px"
                            colorScheme="green">Insure Now</Button></Link> 
                    </HStack>
                    <HStack m="10px auto" width="30%" color="white">
                        <Divider ></Divider>
                        <p >or</p>
                        <Divider ></Divider>
                    </HStack>
                    <HStack padding="12px"
                        color="white"
                        justify={"space-between"}
                        border="1px solid white" width="100%" borderRadius={"10px"}>
                        <HStack>
                            <IconButton  borderRadius="50%" bg="rgba( 0,0,0,0.1)" color="cyan" icon={ <RiMotorbikeLine/>}></IconButton>
                         
                          <Box justify={"center"}>
                            <Text fontSize="14px" fontWeight={"700"}>Looking to insure your new bike?</Text>
                            <Text fontSize="12px" fontWeight={"300"}>Save big with our zero commission insurance</Text>
                        </Box>
                        </HStack>

                        

                        <Button size="xs" bg="transparent"
                            color="white"
                            padding="18px 15px"
                            border="1px solid white">Get a quote </Button>
                    </HStack>

                </div>
            </Box>
            <Box>
                <Image width="380px" borderRadius="10px" src="https://images.ctfassets.net/uwf0n1j71a7j/4KNBjrQJq3LS9tLpcSdo2C/e0299e052799f76b6a89728f01e8e138/two-wheeler-insurance.png?w=750&q=75"/>
            </Box>
        </HStack>
    )
}

export default First;