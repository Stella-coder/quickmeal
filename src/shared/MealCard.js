import Button from "./Button"
import {Card, Box, Typography, Container} from "@mui/material"
import {styled} from "@mui/styles"
import img from "assets/sharwama.jpg"

const MealCard = ()=>{
    return(
        <MyCard>
            <ImageBox>
                <PriceBox> $20</PriceBox>
            </ImageBox>
            <TextWrapper>
                <Wrapper>
                    <Typography sx={{ fontSize:"17px", textTransform:"uppercase"}}>Name</Typography>
                    <Typography sx={{color:"gray", fontSize:"13px"}}>Description</Typography>
                   <Button clr= "#DEA954" br ="#DEA954" text="Add to cart" fs="11px"/>
                </Wrapper>
            </TextWrapper>
        </MyCard>
    )
}

export default MealCard

const MyCard = styled(Card)({
height:"250px",
width: "250px",
margin:"10px",
maxHeight:"100%"

})
const ImageBox = styled(Box)({
backgroundImage:`url(${img})`,
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