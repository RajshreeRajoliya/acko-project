import styles from "./homepage.module.css";
export const NavContentThree = ({applyStyles, style, handleStyle}) => {
    return (
        <div className={styles.login_nav} style={ (style)? {display: 'block'} : {display:'none'}} onMouseLeave={()=> handleStyle(false)}>
            <ul>
                <li className={styles.resources_list}>Manage Policy</li>
                <li className={styles.resources_list}>Raise a claim</li>
                <li className={styles.resources_list}>Renew Policy</li>
            </ul>
        </div>
    )
}