import { Box, Typography } from "@mui/material"
import {styled} from "@mui/styles"


const HeroSection =({name,address, img})=>{


    return(
       <MyBox sx={{ backgroundImage: `url(${img})`, }}>
         <BoxWrapper>
           <Name style={{}}>{name}</Name>
           <Address style={{}}> {address}</Address>
           </BoxWrapper> 
       </MyBox>
    )
}

export default HeroSection

const MyBox = styled(Box)({
    height:"90vh",
    width:"100%",
    // backgroundImage: `url(${img})`, 
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"fixed",
    "@media screen and (max-width:768px)":{
        height:"70vh",
    }
})
const BoxWrapper = styled(Box)({
    height:"100%",
    width:"100%",
    backgroundColor:"rgba(0,0,0,0.2)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    color:"white",
    fontSize:"bold",
    flexWrap:"wrap",
    textAlign:"center"
    
})
const Name = styled("div")({
    fontSize:"65px", 
    letterSpacing: 4, 
    textTransform:"upperCase",
    "@media screen and (max-width:768px)":{
        fontSize:"30px",
    }
})
const Address = styled("div")({
    fontSize:"20px",
    letterSpacing: 4,
    "@media screen and (max-width:768px)":{
        fontSize:"15px",
    }
})
