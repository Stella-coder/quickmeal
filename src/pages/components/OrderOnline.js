import { Box, Container, Grid } from "@mui/material"
import {styled} from "@mui/styles"
import MediaCard from "shared/Card"
import HeaderProps from "shared/HeaderProps"
import img1 from "assets/spa1.jpg"
import img2 from "assets/pizza1.jpg"
import img3 from "assets/sharwama.jpg"
import img4 from "assets/cake.jpg"
import Slider from "react-slick"



const OrderOnline = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  
const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

    return(
        <MyContainer>
            <HeaderProps text="11:00am to 9:00pm" header="Order Online"/>
            <Box sx={{display:"flex",  justifyContent:"center", alignItems:"center", margin:"20px 0px", width:"100%"}}>
         

                <MediaCard name="Spaghetti" img={img1} />
                <MediaCard name="Pizza" img = {img2}  />
                <MediaCard name="Sharwama" img={img3} />
                <MediaCard name="Cake" img={img4} />
                {/* </Grid> */}
             
            </Box>

        </MyContainer>
    )
}

export default OrderOnline

const MyContainer = styled("div")({
width:"100%"
})