import { Box, CardMedia } from "@mui/material"
import { styled } from "@mui/styles"
import img from "assets/1.jpg"

const ImageCard =()=>{
    return(
        // <CardImg
        // src = {img}
        // />
       <div className="parent">
        <div></div>
       </div>
    )
}

export default ImageCard

// const CardImg = styled("img")({
// height:"280px",
// width:"350px",
// margin:"10px",
// transform:"scale(0.5)",
// objectFit:"cover",

// "&:hover":{
  
//     transform:"scale(1)",
// }

// })

const CardImg = styled("div")({
    height:"280px",
    width:"350px",
    margin:"10px" ,

    "&:hover ${CardImgChild}":{
  
    transform:"scale(1.2)",
}
})
const CardImgChild = styled("div")({
    width: "100%",
  height: "100%",
  backgroundColor: "black",
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  "&:focus":{
  
    transform:"scale(1.2)",
}
})