import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavbarCheckout from '../NavbarCheckout/NavbarCheckout'
import Details from './Details/Details'
import Plans from './Plans/Plans'
import Loading from '../Loading/Loading'
import styles from './Checkout.module.css'

const Checkout = () => {
  const [load, setLoad] = useState(false);
  const [style, setStyle] = useState({
    marginTop: `${window.scrollY}px`
  })

  const navigate = useNavigate();

  const data = useSelector(data=> data);
  console.log(data);

  function handleNavigate(){
    setStyle({
      marginTop: `${window.scrollY}px`
    })
    setLoad(true);
    setTimeout(()=> {
      setLoad(false);
      navigate('/checkout/details');
    }, 1000);
  }
  return (
    <div>
      <NavbarCheckout />
      <div id={ styles.container_div}>
        <div>
          <Details />
        </div>
        <Plans handleNavigate={ handleNavigate }/>
      </div>
      {
        (load)? <Loading style={ style }/>: null
      }
    </div>
  )
}

export default Checkout
