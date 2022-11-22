// import Card from "../../shared/Card"
import Header from "../Header/Header"
import HeroSection from "../../shared/HeroSection"
import OrderOnline from "./OrderOnline"
import FromMenu from "./FromMenu"
import MediaCard from "shared/Card"
import CallUs from "./CallUs"
import heroImg from "assets/spa1.jpg"

const HomeScreen = ()=>{
    return(
    <div>
      
        <div><HeroSection name="QuickMeal Restaurant" address="45 Gwarzo Road, Buk, Kano." img={heroImg} /></div>
        <div><OrderOnline/></div>
        <div><CallUs/></div>
        <div><FromMenu/></div>
       
        
    </div>
    )
}

export default HomeScreen