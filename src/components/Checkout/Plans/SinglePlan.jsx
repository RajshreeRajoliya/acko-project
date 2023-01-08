
import {React, useState} from 'react'
import styles from './Plans.module.css'

const SinglePlan = ({flag, price, total, setTotal}) => {
  function handleTotal(){
    setTotal(price);
  }

  return (
    <div className={styles.singlePlan_container}>
      <div>
        <div>
          <label className={styles.checkbox}>
          {(price === total) ? 
            <input checked type="radio" className={styles.checkbox__input} name='plan'/> :
            <input type="radio" className={styles.checkbox__input} name='plan' onClick={ handleTotal }/>
          }

            <span className={styles.checkbox__inner}></span>
          </label>
          <p>Comprehensive plan</p>
        </div>
        <p>₹{price} <span>+GST</span></p>
      </div>

      <div className={styles.plan_details_div}>
        <div>
          <span id={(flag)? styles.green_tick : styles.red_tick} class="material-symbols-outlined">{(flag)? 'done':'close'}</span>
          <p style={(flag)? null : {color: 'red'}}>Covers damages to your bike</p>
        </div>
        <div>
          <div>
            <span id={styles.green_tick} class="material-symbols-outlined">done</span>
            <p>Covers damages to other's vehicle and property</p>
          </div>
          <p id={styles.readMoreP}>Read more</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePlan
