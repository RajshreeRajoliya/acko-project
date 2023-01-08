import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarCheckout from '../NavbarCheckout/NavbarCheckout'
import FirstDiv from './FirstDiv'
import SecondDiv from './SecondDiv'
import Otp from './Otp/Otp'
import Loading from '../Loading/Loading'
import styles from './UserDetails.module.css'

const UserDetails = () => { 
  const [otp, setOtp] = useState(false);
  const [load, setLoad] = useState(false);
  const [style, setStyle] = useState({
    marginTop: `${window.scrollY}px`
  })

  const navigate = useNavigate();

  function showOtp(){
    setLoad(true);
    setStyle({
      marginTop: `${window.scrollY}px`
    })
    setTimeout(()=> {
      setOtp(true);
      setLoad(false);
    }, 500);
  }

  // let TopscrollTo = function () {
  //     window.scrollTo(0,window.scrollY-1000);
  // }

  function loadHandler(){
    setLoad(true);
    setTimeout(()=> {
      setLoad(false);
      navigate('/checkout/review');
    }, 1000);
  }
  return (
    <div> 
        <NavbarCheckout />
        <div id={styles.userDetails_container}>
            <FirstDiv otpHandler={ showOtp }/>
            <SecondDiv />
        </div>
        {
          (otp)? <Otp loadHandler={ loadHandler }/> : null
        }
        {
          (load)? <Loading style={style}/> : null
        }

    </div>
  )
}

export default UserDetails
