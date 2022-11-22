import { Box, Typography } from "@mui/material"
import { styled } from "@mui/styles"
import HeroSection from "shared/HeroSection"
import ImageCard from "shared/ImageCard"
import MealCard from "shared/MealCard"

const Gallery = ()=>{
    return(
        <Box>
            <HeroSection name="gallery"/>
            
            <WrapperBox>
                <ImageCard/>
            </WrapperBox>
        </Box>
    )
}

export default Gallery


const WrapperBox = styled(Box)({
display:"flex",
justifyContent:"center",
alignItems:"center",
flexWrap:"wrap"
})