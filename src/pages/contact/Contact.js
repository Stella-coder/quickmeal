import { Box, Typography } from "@mui/material"
import { styled } from "@mui/styles"
import HeroSection from "shared/HeroSection"
import MealCard from "shared/MealCard"
import bg from "assets/rest2.jpg"

const Contact = ()=>{
    return(
        <Box>
            <HeroSection name="contact" img={bg} />
            
            {/* <WrapperBox>
               
            </WrapperBox> */}
        </Box>
    )
}

export default Contact


const WrapperBox = styled(Box)({
display:"flex",
justifyContent:"center",
alignItems:"center",
flexWrap:"wrap"
})