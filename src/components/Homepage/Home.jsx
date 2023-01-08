import style from "./homepage.module.css";
import {Navbar} from "./Navbar"
import {CarForm} from "./CarForm"
import {UserReviews} from "./UserReviews"
import HomeMiddle from "./HomeMiddle"
import Mobile from "./Mobile"
import Partner from "./Partner"

export const Home = () => {
    return (
        <div className = {style.home_home}>
            <Navbar />
            <CarForm/>
            <Mobile/>
            <Partner/>
            <UserReviews/>
            <HomeMiddle/>
        
        </div>
    )
}