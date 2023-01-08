import { useState } from "react";
import style from "./homepage.module.css";
import logo from "./images/white-logo.png";
import { NavContentOne } from "./NavContentOne";
import { NavContentThree } from "./NavContentThree";
import { NavContentTwo } from "./NavContentTwo";
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Redux/AuthReducer/AuthAction'

import {Link, useNavigate} from "react-router-dom";
export const Navbar = () => {
  
    const [displayProducts, setDisplayProducts] = useState("none");
    const [displayResources, setDisplayResources] = useState("none");
    const [displayLogin, setDisplayLogin] = useState("none");
    const [style1, setStyle1] = useState(false);
    const [style2, setStyle2] = useState(false);
    const [style3, setStyle3] = useState(false);
    const {isAuth} = useSelector(data=> data.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    var show = useRef(null)
    const applyStylesProducts = {
        "display": `${displayProducts}`
    }

    const applyStylesResources = {
        "display": `${displayResources}`
    }

    const applyStylesLogin = {
        "display": `${displayLogin}`
    }
   function call(){
   
        setStyle1(true);
   }

   function logoutPage(){
        dispatch(logout());
   }
  
   
    return (
                <div className={style.nav_div}>

            <div className={style.nav_left}>
                <div  id={style.img_div}>
                    <img onClick={ ()=> navigate('/')} src={logo} alt="" />
                </div>
         <div 
             
                onMouseOver={call}
               
                className={style.nav_text} >
                
                    Products
                </div>  
                
                <div  
                
                      className={style.nav_text}>
                    Resources
                </div>
            </div>

           

            <div className={style.nav_right}>
                <div className={style.nav_claim} style={{width:"320px"}}>
                    <p className={style.claim_text}><b>Claim, edit, renew & more</b></p>
                    {

                        (isAuth)? <Link to="" onClick={ logoutPage }><button
                             onMouseEnter={()=> setStyle3(false)}
                             className={style.login_button}>Logout</button></Link> :
                             <Link to="/login"><button
                            onMouseEnter={()=> setStyle3(true)}
                            className={style.login_button}>Login</button></Link>
                    }
                    {/* <Link to="/login"><button
                    onMouseEnter={()=> setStyle3(true)}
                     className={style.login_button}>Login</button></Link> */}
                </div>

                <div className={style.nav_help}>Help</div>
            </div>
            
            <div className={style.hidden_nav} >
            <NavContentOne applyStyles={applyStylesProducts} style={ style1 } handleStyle={ setStyle1 }/>
            <NavContentTwo  applyStyles={applyStylesResources} style={ style2 } handleStyle={ setStyle2}/>
            <NavContentThree applyStyles={applyStylesLogin} style={ style3 } handleStyle={ setStyle3}/>
            </div>
        </div>

        
    )
    
}
