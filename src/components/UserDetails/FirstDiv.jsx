import {React, useState} from 'react'
import Loading from '../Loading/Loading'
import { useSelector, useDispatch } from 'react-redux'
import styles from './UserDetails.module.css'
import { addPinCode } from '../../Redux/DataReducer/DataAction'
import { addDetails } from '../../Redux/AuthReducer/AuthAction'

const FirstDiv = ({ otpHandler }) => { 
    const { auth: {phone}, data: { bikeNumber }, data, auth} = useSelector(data=> data);
    const [input, setInput] = useState({
        inp1: '',
        inp2: '',
        inp3: phone,
        inp4: bikeNumber,
        inp5: ''
    })

    const dispatch = useDispatch();
    // console.log(data, auth);

    const focusStyle = {
        top: '-69px',
        backgroundColor: '#fff'
    }

    function addFocus(e){
        let value;
        if(e.target.name === 'inp1') {
            value = e.target.value.replace(/[0-9]/g, '');
        }else {
            value = e.target.value;
        }
        setInput({
            ...input,
            [e.target.name]: value
        });
    }

    function handleContinue(){
        const arr = Object.keys(input);
        let flag = false;
        arr.map((ele)=> {
            if(input[ele].length === 0) flag = true;
        })

        if(flag) alert('Fill in all the credentials');
        else{
            dispatch(addPinCode(input.inp5));
            dispatch(addDetails({
                name: input.inp1,
                email: input.inp2
            }))
            otpHandler();
        } 
    }

  return (
    <div id={styles.firstDiv}>

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

        <p>Answer a few more questions</p>

        <form> 
            <div id={styles.input_container}>
                <div> 
                    <input name='inp1' onChange={ addFocus } type="text" required value={ input.inp1 } />
                    <label style={(input.inp1.length != 0)? focusStyle: null}>Full Name (as per RC)</label>
                </div>

                <div>
                    <input name='inp2' onChange={ addFocus } type="email" required />
                    <label style={(input.inp2.length != 0)? focusStyle: null}>Email</label>
                </div>

                <p>OTP will be sent to the given number</p>
                <div>
                    <input name='inp3' onChange={ addFocus } type="number" required value={ +phone }/>
                    <label style={focusStyle}>Mobile</label>
                </div>

                <div>
                    <input name='inp4' onChange={ addFocus } type="text" required value={ bikeNumber }/>
                    <label style={focusStyle}>Bike Number</label>
                </div>

                <div>
                    <input name='inp5' onChange={ addFocus } type="number" required />
                    <label style={(input.inp5.length != 0)? focusStyle: null}>Pincode</label>
                </div>
            </div>
        </form>

        <div id={styles.policy_div}>
            <div>
                <img src="https://media.istockphoto.com/id/1256028833/vector/calendar-day-icon.jpg?s=612x612&w=0&k=20&c=j8YocPaVUapXAETNyt6LW4skr8ng5VzI1I72Z0B4wI4=" alt=""/>
            </div>
            <div>
                <p>As your policy has expired, your new policy will start 3 days from today, i.e. Jan 7 2023. However, you’ll still get your policy instantly.</p>
            </div>
        </div>

        <div id={styles.bottom_div}>
            <p>Previous year policy document is required in case of claim within 30 days of the Acko Policy start date</p>
            <p>By tapping on continue I declare that I have provided correct details and have read Acko's <a href='#'>T&C.</a></p>
        </div>

        <div id={styles.button_div}>
            <button onClick={ handleContinue }>Continue</button>
        </div>
    </div>
  )
}

export default FirstDiv
