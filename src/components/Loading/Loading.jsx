import React from 'react'
import styles from './Loading.module.css'

const Loading = ({style}) => {
    return (
        <div style={style} className={styles.bouncingLoader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    );
}

export default Loading
