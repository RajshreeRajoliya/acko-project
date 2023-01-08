import React from 'react'
import styles from './homeFooter.module.css'
import insta from './images/instagram_footer.svg'
import facebook from './images/facebook_footer.svg'
import linkedin from './images/linkedin_footer.svg'
import twitter from './images/twitter_footer.svg'
import youtube from './images/youtube_footer.svg'
function HomeFooter() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.col}>
          <p className={styles.footer_head_p}>ACKO General Insurance Limited</p>
          <p className={styles.footer_cont_p}>
            2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th Main
            road, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102
          </p>
          <p>We’re socially active!</p>
          <p className={styles.container_img_grid}>
            {/* <i class="fab fa-facebook"> syagsfag</i> */}
            <div className={styles.container_img}>
              <img src={facebook} alt="" />
            </div>
            <div className={styles.container_img}>
              <img src={insta} alt="" />
            </div>
            <div className={styles.container_img}>
              <img src={linkedin} alt="" />
            </div>
            <div className={styles.container_img}>
              <img src={twitter} alt="" />
            </div>
            <div className={styles.container_img}>
              <img src={youtube} alt="" />
            </div>
          </p>
        </div>
        <div
          className={styles.col}
          style={{
            borderLeft: '1px solid rgb(230, 234, 240)',
            // borderBottom: '1px solid rgb(230, 234, 240)',
          }}
        >
          <p
            className={styles.footer_head_p}
            style={{
              marginLeft: '15%',
              // borderBottom: '1px solid rgb(230, 234, 240)',
            }}
          >
            Company
            <button className={styles.footer_head_btn}></button>
          </p>
          <div className={styles.footer_cont_p_sub_complete}>
            <p className={styles.footer_cont_p_sub}>About us</p>
            <p className={styles.footer_cont_p_sub}>Board of directors</p>
            <p className={styles.footer_cont_p_sub}>Careers</p>
            <p className={styles.footer_cont_p_sub}>Media kit</p>
            <p className={styles.footer_cont_p_sub}>Articles</p>
            <p className={styles.footer_cont_p_sub}>Ackology - The tech blog</p>
            <p className={styles.footer_cont_p_sub}>Partnerships</p>
            <p className={styles.footer_cont_p_sub}>Sitemap</p>
          </div>
        </div>
        <div className={styles.col}>
          <p
            className={styles.footer_head_p}
            // style={{
            //   marginLeft: '15%',
            //   // borderBottom: '1px solid rgb(230, 234, 240)',
            // }}
          >
            Support
          </p>
          <p className={styles.footer_cont_p_sub}>Cancellations & refunds</p>
          <p className={styles.footer_cont_p_sub}>Customer service</p>
          <p className={styles.footer_cont_p_sub}>Downloads</p>
          <p className={styles.footer_cont_p_sub}>Unclaimed amount</p>
          <p className={styles.footer_cont_p_sub}>IRDAI website</p>
          <p className={styles.footer_cont_p_sub}>Other Products</p>
        </div>
        <div className={styles.col}>
          <p className={styles.footer_head_p} style={{ marginLeft: '15%' }}>
            Legal
          </p>
          <p className={styles.footer_cont_p_sub}>Whistleblower policy</p>
          <p className={styles.footer_cont_p_sub}>Public disclosure</p>
          <p className={styles.footer_cont_p_sub}>Financials & disclosures</p>
          <p className={styles.footer_cont_p_sub}>Privacy policy</p>
          <p className={styles.footer_cont_p_sub}>Terms & conditions</p>
          <p className={styles.footer_cont_p_sub}>Offer terms & conditions</p>
          <p className={styles.footer_cont_p_sub}>Stewardship code</p>
          <p className={styles.footer_cont_p_sub}>Disclaimer</p>
          <p className={styles.footer_cont_p_sub}>Anti fraud policy</p>
          <p className={styles.footer_cont_p_sub}>
            Health underwriting philosophy
          </p>
        </div>
        <div className={styles.col}></div>
        <div
          className={styles.col}
          style={{
            borderLeft: '1px solid rgb(230, 234, 240)',
            // borderTop: '1px solid rgb(230, 234, 240)',
          }}
        >
          <p
            style={{
              marginLeft: '15%',
              marginTop: '0%',
              borderTop: '1px solid rgb(230, 234, 240)',
            }}
          >
            <p
              className={styles.footer_cont_sub_head}
              style={{
                marginLeft: '0%',
              }}
            >
              Articles on insurance
            </p>
          </p>
          <div
            className={styles.footer_cont_sub_cont}
            style={{ marginTop: '8%' }}
          >
            <p className={styles.footer_head_p}>General articles</p>
            <p className={styles.footer_cont_p_sub}>
              Insurance sector in India
            </p>
            <p className={styles.footer_cont_p_sub}>Types of insurance</p>
            <p className={styles.footer_cont_p_sub}>
              Updated list of traffic rules and fines
            </p>
            <p className={styles.footer_cont_p_sub}>
              About your vehicle number
            </p>
            <p className={styles.footer_cont_p_sub}>
              What is a PUC certificate?
            </p>
            <p className={styles.footer_cont_p_sub}>
              Vehicle registration & re-registration
            </p>
            <p className={styles.footer_cont_p_sub}>
              New vehicle registration process
            </p>
            <p className={styles.footer_cont_p_sub}>
              Temporary vehicle registration number
            </p>
          </div>
        </div>
        <div
          className={styles.col}
          // style={{
          //   marginLeft: '15%',
          //   borderTop: '1px solid rgb(230, 234, 240)',
          // }}
        >
          <p
            className={styles.footer_cont_sub_head}
            style={{
              marginLeft: '0%',
              borderTop: '1px solid rgb(230, 234, 240)',
            }}
          ></p>
          <div
            className={styles.footer_cont_sub_cont}
            style={{ marginTop: '15.5%' }}
          >
            <p className={styles.footer_head_p}>Car insurance articles</p>
            <p className={styles.footer_cont_p_sub}>Motor insurance</p>
            <p className={styles.footer_cont_p_sub}>Car insurance comparison</p>
            <p className={styles.footer_cont_p_sub}>
              Third party vs comprehensive
            </p>
            <p className={styles.footer_cont_p_sub}>
              Car insurance premium calculator
            </p>
            <p className={styles.footer_cont_p_sub}>IDV in car insurance</p>
            <p className={styles.footer_cont_p_sub}>Car insurance claims</p>
            <p className={styles.footer_cont_p_sub}>
              Car insurance claim settlement ratio
            </p>
            <p className={styles.footer_cont_p_sub}>
              Car insurance: Add-on covers
            </p>
          </div>
        </div>
        <div className={styles.col}>
          <p
            className={styles.footer_cont_sub_head}
            style={{
              marginLeft: '0%',
              borderTop: '1px solid rgb(230, 234, 240)',
            }}
          ></p>
          <div
            className={styles.footer_cont_sub_cont}
            style={{ marginTop: '15.5%' }}
          >
            <p className={styles.footer_head_p}>
              Two-Wheeler insurance articles
            </p>
            <p className={styles.footer_cont_p_sub}>
              IRDAI rules for two wheeler insurance
            </p>
            <p className={styles.footer_cont_p_sub}>
              Two wheeler insurance comparison
            </p>
            <p className={styles.footer_cont_p_sub}>
              Third party vs comprehensive
            </p>
            <p className={styles.footer_cont_p_sub}>
              Bike insurance premium calculator
            </p>
            <p className={styles.footer_cont_p_sub}>IDV in bike insurance</p>
            <p className={styles.footer_cont_p_sub}>
              Two wheeler insurance claims
            </p>
            <p className={styles.footer_cont_p_sub}>
              Two wheeler claim settlement ratio
            </p>
            <p className={styles.footer_cont_p_sub}>
              Two wheeler insurance: Add-on covers
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer_below}>
        <div className={styles.footer_grid}>
          <p className={styles.footer_grid_p}>CIN: U66000KA2016PLC138288</p>
          <p className={styles.footer_grid_p}>IRDAI Registration No: 157</p>
          <p className={styles.footer_grid_p}>Category: Non-Life Insurance</p>
        </div>
        <div style={{ marginLeft: '15%', maxWidth: '1170px' }}>
          <p className={styles.footer_below_sub}>
            The use of images and brands are only for the purpose of indication
            and illustration. ACKO claims no rights on the IP rights of any
            third parties. The ratings are derived from reviews and feedback
            received from Google and Facebook users on their respective
            platforms. | *Savings of upto Rs. 50,000 have been calculated on the
            IDV of Rs. 18,00,000 and 0% NCB. Amount saved is in comparison to
            tariff rates. Product name: Private Car Policy - Bundled | UIN:
            IRDAN157RP0014V01201819 |
          </p>
          <p className={styles.footer_below_sub}>
            {' '}
            Trade logo displayed above belongs to ACKO Technology & Services Pvt
            Ltd and used by ACKO General insurance Limited under License. For
            more details on risk factors, terms, conditions and exclusions,
            please read the policy wordings carefully before concluding a sale.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
