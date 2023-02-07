
import { Home } from "../components/Homepage/Home";
import Checkout from '../components/Checkout/Checkout'
import UserDetails from '../components/UserDetails/UserDetails'
import Review from '../components/Review/Review'
import Payment from '../components/Payment/Payment'
import { Route,Routes } from "react-router";
import Login from "../components/Login/Login"
import Otp from "../components/Login/Otp/Otp";
import Bike from "../components/Bike/bike"
import Search from "../components/Search/Search";

import { ChakraProvider } from "@chakra-ui/react";
import Products from "../components/ProductPage/pages/Products"; 
import BikeProducts from "../components/BikePage/pages/BikeProducts";


const Routepage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/bike" element={<Bike/>} />
      <Route path="/checkout/details" element={<UserDetails />} /> 
      <Route path="/checkout/review" element={<Review />} /> 
      <Route path="/checkout/payment" element={<Payment />} /> 
      <Route path="/login" element={<Login />} /> 
       <Route path="/otp" element={<Otp />} />
       <Route path="/search" element={<Search/>} />
       <Route path="/bikepage" element={ <ChakraProvider><BikeProducts/></ChakraProvider> } />
       <Route path="/carpage" element={ <ChakraProvider><Products/></ChakraProvider> } />
    </Routes>
  );
};

export default Routepage;
