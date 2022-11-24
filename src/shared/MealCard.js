import Button from "./Button"
import {Card, Box, Typography, Container} from "@mui/material"
import {styled} from "@mui/styles"
// import img from "assets/sharwama.jpg"

const MealCard = ({price, name, desc, img, clk})=>{
    return(
        <MyCard>
            <ImageBox sx={{backgroundImage:`url(${img})`,}}>
                <PriceBox> #{price}</PriceBox>
            </ImageBox>
            <TextWrapper>
                <Wrapper>
                    <Typography sx={{ fontSize:"17px", textTransform:"uppercase"}}>{name}</Typography>
                    <Typography sx={{color:"gray", fontSize:"13px"}}>{desc}</Typography>
                   <Button clr= "#DEA954" br ="#DEA954" text="Add to cart" fs="11px" click={clk}/>
                </Wrapper>
            </TextWrapper>
        </MyCard>
    )
}

export default MealCard

const MyCard = styled(Card)({
height:"250px",
width: "250px",
margin:"20px",
maxHeight:"100%"



})
const ImageBox = styled(Box)({

 backgroundSize:"cover", 
 backgroundRepeat:"no-repeat", 
 backgroundPosition:"fixed",
display:"flex", 
 justifyContent:"flex-end", 
 width:"100%",
  height:"50%",
})
const PriceBox = styled(Box)({
  color:"white",
 backgroundColor:"black",
 height:"30px",
 display: "flex",
 justifyContent:"center",
 alignItems:"center",
 minWidth:"50px",
})
const TextWrapper = styled(Box)({
    height:"50%",
    width:"100%",
    display:"flex",
    backgroundColor:"#EFEFEF",
    justifyContent:"center",
    alignItems:"center",
})
const Wrapper = styled(Box)({
    minHeight:"100px",
    width:"240px",
    display:"flex",
    padding:"10px",
    borderInline:"1px dashed gray",
    margin:"10px",
    maxHeight:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    padding:"10px"
})