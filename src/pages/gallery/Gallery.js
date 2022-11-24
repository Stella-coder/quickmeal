import { Box, Typography } from "@mui/material"
import { styled } from "@mui/styles"
import HeroSection from "shared/HeroSection"
import ImageCard from "shared/ImageCard"
import MealCard from "shared/MealCard"
import bg from "assets/rest1.jpg"
import bg1 from "assets/resort.jpg"
import bg2 from "assets/rest2.jpg"

const Gallery = ()=>{
    return(
        <Box>
            <HeroSection name="gallery" img={bg}/>
            
            <WrapperBox>
                <ImageCard img={bg}/>
                <ImageCard img={bg1}/>
                <ImageCard img={bg2}/>
                <ImageCard img={bg}/>
                <ImageCard img={bg}/>
                <ImageCard img={bg}/>
                <ImageCard img={bg}/>
                <ImageCard img={bg}/>
            </WrapperBox>
        </Box>
    )
}

export default Gallery


const WrapperBox = styled(Box)({
display:"flex",
justifyContent:"center",
alignItems:"center",
flexWrap:"wrap",
margin:"30px 30px"
})