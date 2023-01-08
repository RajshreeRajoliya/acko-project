import {React, useState, useRef, useEffect} from 'react'
import SinglePlan from './SinglePlan';
import PersonalCover from './PersonalCover';
import {useSelector, useDispatch } from 'react-redux'
import styles from './Plans.module.css'
import { addTotal } from '../../../Redux/DataReducer/DataAction'

const Plans = ({ handleNavigate }) => {
  const [btnState, setBtnState] = useState({
    btn1: true,
    btn2: false,
    btn3: false
  })
  
  const [extra, setExtra] = useState(0);
  const [total, setTotal] = useState(814);
  const dispatch = useDispatch();

  const data = useSelector(data=> data);

  const btnStyle = {
    border: 'none',
    backgroundColor: '#f3f7ff'
  }

  const btnStyleClicked = {
    backgroundColor: '#f2faf7',
    border: '1px solid #0fa457'
  }

  function show(e){
    let cur = e.target.name;
    setBtnState({
      btn1: false,
      btn2: false,
      btn3: false,
      [cur]: true
    })

    if(cur == 'btn1'){
        setExtra(0);
        setTotal(814);
    }else if(cur == 'btn2'){
        setExtra(769);
        setTotal(1583);
    }else if(cur == 'btn3'){
        setExtra(1537);
        setTotal(2351);
    } 
  }

  function handleTotal(){
    dispatch(addTotal(total));
    handleNavigate();
  }

  return (
    <div id={styles.plans_container}>
      <p>Select plan tenure</p>

      <div id={styles.buttons_div}>
        <button onClick={ show } style={(btnState.btn1)? btnStyleClicked: btnStyle} name='btn1'>1 Year</button>
        <button onClick={ show } style={(btnState.btn2)? btnStyleClicked: btnStyle} name='btn2'>2 Year</button>
        <button onClick={ show } style={(btnState.btn3)? btnStyleClicked: btnStyle} name='btn3'>3 Year</button>
      </div>

      <p>Select plan </p>

      <div id={styles.plans_div}>
        <SinglePlan flag={true} price={814 + extra} total={total} setTotal={setTotal}/>
        <SinglePlan flag={false} price={714 + extra} total={total} setTotal={setTotal}/>
      </div>

      <p>Select add-ons (1 year)</p>

      <div>
        <PersonalCover />
      </div>

      <div id={styles.continueBtn_div}>
        <div>
          <p>₹{total} <span>+GST</span></p>
        </div>

        <div>
          <button onClick={ handleTotal }>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Plans
