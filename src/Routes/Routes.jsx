
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

const Routepage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/bike" element={<Bike />} />
      <Route path="/checkout/details" element={<UserDetails />} /> 
      <Route path="/checkout/review" element={<Review />} /> 
      <Route path="/checkout/payment" element={<Payment />} /> 
      <Route path="/login" element={<Login />} /> 
       <Route path="/otp" element={<Otp />} />
       <Route path="/search" element={<Search/>} />

    </Routes>
  );
};

export default Routepage;
