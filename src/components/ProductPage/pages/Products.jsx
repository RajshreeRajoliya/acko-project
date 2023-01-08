import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../../Homepage/Navbar'
import First from '../first'
import Fourth from '../Fourth'
import Second from '../Second'
import Third from '../Third'



function Products() {
  return (
    <>
    <Navbar/>
    
    <First/>
      <Second/>
      <Third/>
      <Fourth/>

    
    
      
    </>
  )
}

export default Products