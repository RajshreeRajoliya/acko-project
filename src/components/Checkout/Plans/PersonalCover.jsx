import React from 'react'
import styles from './Plans.module.css'

const PersonalCover = () => {
  return (
    <div id={styles.personalCover_container}>
      <div>
        <div>
          <input type="checkbox" />
          <p>Personal Accident Cover</p>
        </div>
        <div>
          <p>₹350</p>
        </div>
      </div>

      <div id={styles.coverData_div}>
        <div>
          <span>Mandatory by law</span>
        </div>
        <div>
          <p>Insurance cover of upto Rs. 15 L in case of bodily injury or death of the owner.</p>
        </div>
        <div>
          <p><span>By not adding this,</span> you agree that you either already have a PA cover or do not have a valid driving license.</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalCover
