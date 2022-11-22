// import Card from "../../shared/Card"
import Header from "../Header/Header"
import HeroSection from "../../shared/HeroSection"
import OrderOnline from "./OrderOnline"
import FromMenu from "./FromMenu"
import MediaCard from "shared/Card"
import CallUs from "./CallUs"
import heroImg from "assets/spa1.jpg"
import { Carousel } from 'antd';
import img2 from "assets/pizza1.jpg"

const HomeScreen = ()=>{
    return(
    <div>
        
      <Carousel autoplay fade autoplaySpeed={2000} >
        <div><HeroSection name="QuickMeal Restaurant" address="45 Gwarzo Road, Buk, Kano." img={heroImg} /></div>
        <div><HeroSection name="QuickMeal Restaurant" address="45 Gwarzo Road, Buk, Kano." img={img2} /></div>
        </Carousel>
        <div><OrderOnline/></div>
        <div><CallUs/></div>
        <div><FromMenu/></div>
       
        
    </div>
    )
}

export default HomeScreen



// const App = () => (
//   <Carousel autoplay fade>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
