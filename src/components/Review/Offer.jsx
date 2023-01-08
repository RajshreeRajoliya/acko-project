import {React, useState} from 'react'
import styles from './Review.module.css'

const Offer = () => {
  const [input, setInput] = useState('');

  const foucedStyle = {
    top: '-69px',
    backgroundColor: '#fff'
  }

  function inputHandler(e){
    setInput(e.target.value.toUpperCase());
  }

  return (
    <div id={styles.offer_container}>
      <div>
        <p>Bundled Offer - Get Rs 200 off when you buy your car insurance</p>
        <img src="https://img.freepik.com/free-vector/hand-holding-payment-receipt_23-2147917897.jpg?size=338&ext=jpg&ga=GA1.1.1433623537.1672820064" alt=""/>
      </div>
 
      <div>

        <div id={styles.cardDetails_div}>
            <div>
                <input onChange={ inputHandler } type="text" required value={input} />
                <label style={(input.length != 0)? foucedStyle: null}>Enter Car Number</label>
            </div>

            <div>
                <input type="text" required  placeholder="Previous policy expiry date"  onFocus={(e)=> e.target.type = 'date'}  id={styles.date}/>
            </div>

            <div>
              <button>Submit</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Offer
