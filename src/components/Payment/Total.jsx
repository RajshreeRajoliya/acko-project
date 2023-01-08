import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Payment.module.css'

const Total = () => {
  const {total} = useSelector(data=> data.data);
  return (
    <div>
      <div id={styles.total_div}>
        <div>
          <p>Comprehensive plan</p>
          <p>For your Vespa NOTTE NOTTE</p>
        </div>

        <div>
          <div>
            <p>Net Premium</p>
            <p>₹ {total}</p>
          </div>
          <div>
            <p>GST</p>
            <p>₹ 212</p>
          </div>
        </div>

        <div>
            <p>Total</p>
            <p>₹ {total + 212}</p>
        </div>
      </div>
    </div>
  )
}

export default Total
