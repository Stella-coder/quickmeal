import { Box, Typography } from "@mui/material"
import {styled} from "@mui/styles"

const HeaderProps =({text,header})=>{
    return(
        <MyBox>
            <Typography sx={{color:"#DEA954", fontStyle:"italic", letterSpacing: 2, fontSize:"12px"}}> -  {text} - </Typography>
            <MyTypo> {header}</MyTypo>
        </MyBox>
    )
}

export default HeaderProps

const MyBox = styled(Box)({
display:"flex",
justifyContent:"center",
alignItems:"center",
width:"100%",
height:"200px",
flexDirection:"column",
flexWrap:"wrap",
"@media screen and (max-width:768px)":{
    height:"100%",
    margin:"30px 0px"
}
})
const MyTypo = styled("div")({
    textTransform:"upperCase", 
    padding:"5px  20px", 
    letterSpacing: 2, 
    borderTop:"1px solid black", 
    borderBottom: "1px solid black",
     fontSize:"28px",
     "@media screen and (max-width:768px)":{
        fontSize:"20px"
    }
})