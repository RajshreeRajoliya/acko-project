import React, { useState } from "react";
import styles from "./Login.module.css"
// import logo from '../Images/img.png'
// import logo1 from '../Images/img1.png'
import { useNavigate } from "react-router-dom";

function Login() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [phoneNumber, setPhoneNumber] = useState("");
const [otp, setOtp] = useState("");
const navigate = useNavigate() 

const handleLogin = () => {
const generatedOtp = Math.floor(1000 + Math.random() * 9000);
setOtp(generatedOtp);
alert(`Your OTP is: ${generatedOtp}`);
localStorage.setItem('number',phoneNumber)
navigate("/otp")
};

return (
<div>
{!isLoggedIn && (
<div className={styles.phone_number} >
<div className={styles.nav_login} >
   
   <a href="https://www.acko.com/?next=%2Fmyaccount"><img src="./Images/img1.png" alt="" /></a> 

   <p><a className={styles.help_ancher} href="https://www.acko.com/support/home/">Help</a></p>
</div>
<div className={styles.img} >
<img className={styles.img_1} src="./Images/img.png" alt="" />
</div>
<div className={styles.box} >
<div className={styles.box_content} >
<h2>Login with your Mobile number</h2>
Claim, edit or renew your policy
</div>
</div>
<input className={styles.phone_number_1}
type="number"
placeholder=""
value={phoneNumber}
onChange={(e) => setPhoneNumber(e.target.value)}
/>
<div className={styles.otp_btn} >
<button className={styles.otp_btn_1} onClick={handleLogin}>Get OTP</button>
</div>
<div className={styles.recover} >
<p  >Can't access? <a className={styles.recover_ancher} href="https://www.acko.com/account-recovery">Recover my account</a> </p>
</div>
</div>
)}
</div>
);
}

export default Login;

// hmm