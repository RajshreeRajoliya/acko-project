import React from 'react';
import styles from "./Otp.module.css"
// import logo2 from '../Images/img.png'
// import logo3 from '../Images/img1.png'
import { useNavigate } from "react-router-dom";
import { login } from '../../../Redux/AuthReducer/AuthAction';
import { useDispatch, useSelector } from 'react-redux';



function Otp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(data=> data) 
  function clickEvent(currentInput, nextInputId) {
  if (currentInput.value.length === 1) {
    document.getElementById(nextInputId).focus();
  }
  
}
function loginAuth(){
  let number = localStorage.getItem('number') || "8788883087"
    dispatch (login(number))
    navigate("/")
   console.log(data) 
  }
  return (

    


    <div className={styles.container}>
        <div className={styles.nav_login} >
   
   <a href="https://www.acko.com/?next=%2Fmyaccount"><img src="./Images/img1.png" alt="" /></a> 

   <p><a className={styles.help_ancher} href="https://www.acko.com/support/home/">Help</a></p>
</div>
<div className={styles.img} >
<img className={styles.img1} src="./Images/img2.png" alt="" />
</div>
<div className={styles.box} >
<div className={styles.box_content} >
<h2>OTP has been sent to</h2>

</div>
</div>
      {/* <h1>ENTER OTP</h1> */}
      <div className={styles.userInput}>
        <input className={styles.input_class} autoComplete='off' type="text" id='ist' maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'sec')} />
        <input className={styles.input_class} autoComplete='off' type="text" id="sec" maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'third')} />
        <input className={styles.input_class} autoComplete='off' type="text" id="third" maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'fourth')} />
        <input className={styles.input_class} autoComplete='off' type="text" id="fourth" maxLength="1" onKeyUp={e => clickEvent(e.currentTarget, 'fifth')} />
        
      </div>
      <button className={styles.btn}  onClick={loginAuth} >CONFIRM</button>
    </div>
  );
}

export default Otp;
