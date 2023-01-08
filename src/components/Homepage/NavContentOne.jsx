import { useRef } from "react"
import { useNavigate } from 'react-router-dom'
import styles from "./homepage.module.css";
export const NavContentOne = ({applystyles, style, handleStyle}) => {
       const hideref = useRef(null)
       function hide(){
            // hideref.current.setAttribute("style","display:none")
            handleStyle(false);
       }
       const navigate = useNavigate();
       function redirectCar(){
            navigate('/carpage');
       }

       function redirectBike(){
        navigate('/bikepage');
   }
    return (
        <div className={styles.content_container} style={ (style)? {display: 'block'} : {display:'none'} }
        //<div className="content_container" style={applyStyles } 
        
                onMouseLeave={hide}  ref= { hideref}
        >
            <div className={styles.inner_container}>
                <div className={styles.column}>
                    <div className={styles.heading}>
                        Car & Taxi</div>
                    <div className={styles.list}>
                        <ul>
                            <li style={{cursor: 'pointer'}} onClick={ redirectCar }>Comprehensive Car Insurance</li>
                            <li>Third Party Car Insurance</li>
                            <li>Commercial Car Insurance</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.heading}>
                        Bike</div>
                    <div className={styles.list}>
                        <ul>
                            <li style={{cursor: 'pointer'}} onClick={ redirectBike }>Comprehensive Bike Insurance</li>
                            <li>Third Party Bike Insurance</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.heading}>
                        Health</div>
                    <div className={styles.list}>
                        <ul>
                            <li>Health Insurance</li>
                            <li>Arogya Sanjeevani</li>
                            <li>Group Medical Cover</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.heading}>
                        Electronics</div>
                    <div className={styles.list}>
                        <ul>
                            <li>Mobile Protection</li>
                            <li>Appliance Protection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}