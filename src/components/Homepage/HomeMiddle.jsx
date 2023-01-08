import React from 'react'
import styles from './homeMiddle.module.css'
import amazone from './images/amazone.svg'
import abhiBus from './images/abhiBus.svg'
import driveU from './images/u.svg'
import dunzo from './images/dunzo.png'
import goibibo from './images/go.svg'
import happay from './images/happay.png'
import hdb from './images/hdf.svg'
import lendingKart from './images/lk.svg'
import moneytap from './images/mt.svg'
import mytrip from './images/mytrip.svg'
import niyo from './images/n.svg'
import oy from './images/oy.svg'
import practo from './images/practo.png'
import rapido from './images/rap.svg'
import redbus from './images/rbus.svg'
import urban from './images/uc.svg'
import ola from './images/o.svg'
import cred from './images/cred.svg'
import zomato from './images/zom.svg'
import zoomCar from './images/z.svg'
import Hassle from './images/click.svg'
import superMobile from './images/mob.svg'
import rupee from './images/rupee.svg'
import HomeFooter from './HomeFooter'

function HomeMiddle() {
  return (
    <div>
      <div className={styles.home_partner}>
        <h1 className={styles.home_mid_head}>ACKO Insurance on your favourite apps</h1>
        <h4 className={styles.home_mid_subhead}>
        India’s top brands choose ACKO Insurance for their customers
        </h4>
        <div className={styles.home_mid_logo}>
          <div className={styles.home_main_child1}>
            <div className={styles.home_main_child2}>
              <img src={amazone} alt=""></img>
              <img src={ola} alt=""></img>
              <img src={mytrip} alt=""></img>
              <img src={rapido} alt=""></img>
              <img src={redbus} alt=""></img>
              <img src={oy} alt=""></img>
              <img src={zomato} alt=""></img>
              <img src={goibibo} alt=""></img>
             
            </div>
            <div className={styles.home_main_child2}>
            
            <img src={abhiBus} alt=""></img>
            <img src={zoomCar} alt=""></img>
              <img src={lendingKart} alt=""></img>
              <img src={driveU} alt=""></img>
              <img src={hdb} alt=""></img>
              <img src={niyo} alt=""></img>
              <img src={urban} alt=""></img>
              <img src={moneytap} alt=""></img>
            </div>
            <div className={styles.home_main_child3}>
              <img src={cred} alt=""></img>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.home_sub1_main}>
        <p className={styles.sub1_p}>Here’s why you’ll love ACKO</p>

        <div className={styles.home_sub2}>
          <div className={styles.home_sub_child2}>
            <div>
              <img
                src={rupee}
                style={{
                  height: '120px',
                  width: '120px',
                  marginBottom: '28px',
                }}
                alt=""
              ></img>
            </div>
            <div className={styles.home_sub_head}>Incredibly low premiums</div>
            <div className={styles.home_sub_content}>
              {' '}
              Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.
            </div>
          </div>

          <div className={styles.home_sub_child2}>
            <div>
              <img
                src={superMobile}
                style={{
                  height: '120px',
                  width: '120px',
                  marginBottom: '28px',
                }}
                alt=""
              ></img>
            </div>
            <div className={styles.home_sub_head}>Superquick and easy</div>
            <div className={styles.home_sub_content}>
            We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks.
            </div>
          </div>

          <div className={styles.home_sub_child2}>
            <div>
              <img
                src={Hassle}
                style={{
                  height: '120px',
                  width: '120px',
                  marginBottom: '28px',
                }}
                alt=""
              ></img>
            </div>
            <div className={styles.home_sub_head}>Hassle-free claims</div>
            <div className={styles.home_sub_content}>
            We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements.
            </div>
          </div>
        </div>
      
      </div>
      <HomeFooter />
    </div>
  )
}

export default HomeMiddle
