import style from "./homepage.module.css";
export const NavContentTwo = ({applyStyles, style, handleStyle}) => {
    return (
        <div className="resources_nav" style={ (style)? {display: 'block'} : {display:'none'}} onMouseLeave={()=> handleStyle(false)}>
            <ul>
                <li className={style.resources_list}>All Resources</li>
                <li className={style.resources_list}>Guides</li>
                <li className={style.resources_list}>Articles</li>
            </ul>
        </div>
    )
}