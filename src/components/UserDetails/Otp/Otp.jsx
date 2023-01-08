import {React, useState} from 'react'
import { useSelector } from 'react-redux'
import styles from './Otp.module.css'

const Otp = ({ loadHandler }) => {

  const { phone } = useSelector(data=> data.auth);

  function clickEvent(currentInput, nextInputId) {
      if (currentInput.value.length === 1) {
        document.getElementById(nextInputId).focus();
      }
  }

  return (
    <div id={styles.otp_container}>
      <div>
        <img src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-5167.jpg?size=338&ext=jpg" alt=""/>
      </div>

      <div> 
        <p>Verify your phone number</p>
        <p>OTP has been sent to {phone}</p>
      </div>

      <div id={styles.inputOtp_div}>
        <p>Enter Otp</p>
        <div>
            <input name="1" type="number" autoFocus id='ist' maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'sec')}/>
            <input name="2" type="number" id='sec' maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'thi')}/>
            <input name="3" type="number" id='thi' maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'fou')}/>
            <input name="4" type="number" id='fou' maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'fou')}/>
        </div>

        <div id={styles.verifyBtn_div}>
            <button onClick={ loadHandler }>Verify</button>
        </div>
      </div>

      <p>Resend OTP</p>
    </div>
  )
}

export default Otp
