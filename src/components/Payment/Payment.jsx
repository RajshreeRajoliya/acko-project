import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarCheckout from '../NavbarCheckout/NavbarCheckout'
import Upi from './Upi'
import Scan from './Scan'
import Total from './Total'
import Loading from '../Loading/Loading'
import styles from './Payment.module.css'

const Payment = () => {
  const [load, setLoad] = useState(false);
  const [style, setStyle] = useState({
    marginTop: `${window.scrollY}px`
  })

  const navigate = useNavigate();

  function handleNavigate(){
    setStyle({
      marginTop: `${window.scrollY}px`
    })
    setLoad(true);
    setTimeout(()=> {
      setLoad(false);
    }, 1000);
  }

  return (
    <div>
        <NavbarCheckout />
        <div id={styles.backBtn_div}>
            <span class="material-symbols-outlined">arrow_back_ios</span>
            <p onClick={ ()=> navigate('/checkout/review') }>Back</p>
        </div>
        <div id={styles.payment_div}>
            <Upi />
            <Scan handleNavigate={ handleNavigate }/>
            <Total />
        </div>
        {
          (load)? <Loading style={ style }/>: null
        }
    </div>
  )
}

export default Payment
