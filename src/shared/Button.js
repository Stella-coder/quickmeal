import { Box, Typography } from "@mui/material"
import {styled} from "@mui/styles"

const Button = ({br,clr, text, fs, click})=>{
  return(
    <MyBox onClick={click} sx={{borderBottom:`2px solid ${br}`,} }>
      <Typography sx={{color: clr, textTransform:"uppercase", fontSize:fs}}>{text}</Typography>
    </MyBox>
  )
}

export default Button

const MyBox = styled(Box)({
  height:"25px",
minWidth:"100px",
backgroundColor:"#EFEFEF",
display:"flex",
justifyContent:"center",
alignItems:"center",
borderRadius:" 0 15px",
maxWidth:"100%",
margin:"5px 0px",
cursor:"pointer",
boxShadow:"0 4px 30px rgba(0,0,0, 0.3)",
padding:"5px",
transition: "all 350ms",

"&:hover":{
  color:"#DEA954",
  borderRadius: "2px solid #DEA954"
}

})