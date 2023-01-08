import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import styles from './Payment.module.css'

const Scan = ({ handleNavigate }) => {
  const [input, setInput] = useState('');
  const [qrCode, setQrCode] = useState(false);
  const navigate = useNavigate();

  const style = {
    backgroundColor: '#0fa457'
  }

  function handleInput(e){
    setInput(e.target.value);
  }
  function show(){
    handleNavigate();
    setTimeout(() => {
      Swal.fire(
        'Success!',
        'Your payment has been completed!',
        'success'
      )
      redirect();
    }, 1500);
  }

  function redirect(){
    setTimeout(()=> {
      navigate('/');
    }, 2000)
  }

  function handleQrCode(){
    setQrCode(!qrCode);
  }

  return (
    <div>
      <div id={styles.scan_container}>
        <div>
          <p>Scan QR and Pay</p>
          <p>Scan the QR  using any UPI app on your mobile phone like PhonePe, Paytm, GooglePay, BHIM, etc</p>
        </div>

        <div>
          <button onClick={ handleQrCode }>Generate QR Code</button>
        </div>

        <div style={(qrCode)? {display: 'block'}: {display: 'none'}} id={styles.qrCode_div}>
          <img src="https://cdn.crunchify.com/wp-content/uploads/2020/12/Crunchify.com-QRCode-gray-color.png" alt="qrCode"/>
        </div>

        <div id={styles.upiInput_div}>
          <p>Enter Your UPI ID</p>
          <input onChange={ handleInput } type="text" placeholder="e.g rakesh@upi" autoFocus/>
          <p>A collect request will be sent to this UPI ID</p>
        </div>

        <div id={styles.payBtn_div}>
          {
            (input.length == 0) ? <button  disabled onClick={ show }>Pay Now</button> :
            <button style={style} onClick={ show }>Pay Now</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Scan
