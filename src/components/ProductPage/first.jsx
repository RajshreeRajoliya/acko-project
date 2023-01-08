import { Box, Button, Divider, HStack, Input, Stack, useToast, Text, IconButton, Image } from '@chakra-ui/react';
import React from 'react'
import { FaCarSide } from 'react-icons/fa';
import { useState } from 'react';
import { useStore,useDispatch } from 'react-redux';
import { updateSearch } from '../../Redux/SearchReducer/SearchAction';
import { useEffect } from 'react';




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
                    <h1 style={{ fontSize: "30px", fontWeight: "700" }}>Car Insurance</h1>

                    <h2 style={{ fontSize: "22px", fontWeight: "500" }}>Insure your car in minutes, without tedious paperwork</h2>
                    <h1 style={{ fontSize: "15px", fontWeight: "500" }}>Car insurance starting at ₹2,094*</h1>

                </Stack>

                <div>
                    <HStack
                        padding="15px"
                        bg={"white"}
                        borderRadius="10px"
                        mt={"50px"}
                    >
                        <Input type="text"
                            placeholder="Enter Your Car Name"
                            border="none"
                            padding="7px"
                            variant={"unstyled"}
                            onChange={(e)=>setNumber(e.target.value)}
                            />
                        <Button 
                        onClick={()=>{
                            dispatch(updateSearch(number))
                        }}
                            padding="25px 50px"
                            colorScheme="green">Insure Now</Button>
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
                            <IconButton  borderRadius="50%" bg="rgba( 0,0,0,0.1)" color="cyan" icon={ <FaCarSide/>}></IconButton>
                         
                          <Box justify={"center"}>
                            <Text fontSize="14px" fontWeight={"700"}>Looking to insure your new car?</Text>
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
                <Image width="380px" borderRadius="10px" src="https://images.ctfassets.net/uwf0n1j71a7j/37AqQ6MxWyMPi0b7jVMs5g/c9a3c976296ce675b24469c553756b7d/car-insurance.png?w=1920&q=75"/>
            </Box>
        </HStack>
    )
}

export default First;