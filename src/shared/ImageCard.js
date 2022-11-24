import { Box, CardMedia } from "@mui/material"
import { styled } from "@mui/styles"
// import img from "assets/1.jpg"

const ImageCard =({img})=>{
    return(
        <CardImg
        src = {img}
        />
       
    )
}

export default ImageCard

const CardImg = styled("img")({
height:"280px",
width:"280px",
margin:"10px",
transform:"scale(1)",
objectFit:"cover",
transition: "all 350ms",
borderRaduis:"15px",

"&:hover":{
  
    transform:"scale(1)",
}
})