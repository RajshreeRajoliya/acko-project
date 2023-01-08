import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarCheckout from '../NavbarCheckout/NavbarCheckout'
import SecondDiv from '../UserDetails/SecondDiv'
import Loading from '../Loading/Loading'
import Verify from './Verify'
import Offer from './Offer'


import styles from './Review.module.css'

const Review = () => {
  const [load, setLoad] = useState(false);
  const [style, setStyle] = useState({
    marginTop: `${window.scrollY}px`
  })

  const navigate = useNavigate();

  function handleLoad(){
    setStyle({
      marginTop: `${window.scrollY}px`
    })
    setLoad(true);
    setTimeout(()=> {
      setLoad(false);
      navigate('/checkout/payment');
    }, 1000);
  }

  return (
    <div> 
      <NavbarCheckout />
        <div id={styles.userDetails_container}>
            <div>
                <Verify handleLoad={ handleLoad }/>
            </div>
            <div>
                <SecondDiv />
                <Offer />
            </div>
        </div>
        {
          (load)?<Loading style={style} /> : null
        }
    </div>
  )
}

export default Review
