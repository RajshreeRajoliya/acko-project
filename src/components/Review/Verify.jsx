import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Review.module.css'

const Verify = ({ handleLoad }) => {
    const { data: {bikeNumber, modelNumber, pinCode}, auth: {name, email, phone} } = useSelector(data=> data);
    // console.log(bikeNumber, modelNumber, name, email, phone, pinCode);
  return (
    <div id={styles.verify_container}>
        
        <div id={styles.small_header}>
            <div>
                <div>1</div>
                <p>Enter details</p>
            </div>

            <div>
                <div>2</div>
                <p>Verify phone</p>
            </div>

            <div>
                <div>3</div>
                <p>Review & pay</p>
            </div>
        </div>

        <div id={styles.bottom_container}>
            <div>
                <p>Please verify the details. All the information below will show up on your policy</p>
            </div>

            <div id={styles.details_div}>
                <div>
                    <p>Bike Details</p>
                    <div>
                        <p>Bike Number</p>
                        <p>{ bikeNumber }</p>
                    </div>
                    <div>
                        <p>Make/Model</p>
                        <p>{ modelNumber }</p>
                    </div>
                    <div>
                        <p>Registration Year</p>
                        <p>Before 2008</p>
                    </div>
                    <div>
                        <p>Insured Declared Value</p>
                        <p>₹ 18,352</p>
                    </div>
                    <div>
                        <p>Policy Start Date</p>
                        <p>Jan 7, 2023</p>
                    </div>
                </div>

                <div>
                    <p>Bike Owner Details</p>
                    <div>
                        <p>Name</p>
                        <p>{ name }</p>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <p>{ email }</p>
                    </div>
                    <div>
                        <p>Mobile Number</p>
                        <p>{ phone }</p>
                    </div>
                    <div>
                        <p>Pincode</p>
                        <p>{ pinCode }</p>
                    </div>
                </div>
            </div>

            <div id={styles.policy_div}>
                <div>
                    <input type="checkbox" />
                    <p>Get policy on WhatsApp</p>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>

                <div id={styles.payBtn_div}> 
                    <div>
                        <button onClick={ handleLoad }>Pay ₹1,286</button>
                    </div>
                    <div>
                        <i class="fa-regular fa-thumbs-up"></i>
                        <p>Trusted by 4.5 Crore Indians</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verify
