import { Box, Typography } from "@mui/material"
import { styled } from "@mui/styles"

const CallUs =()=>{
    return(
        <MyBox>
            <span >CALL US : 9837367399</span>
        </MyBox>
    )
}

export default CallUs

const MyBox = styled(Box)({
display:"flex",
width:"100%",
minHeight:"150px",
backgroundColor:"black",
justifyContent:"center",
alignItems:"center",
flexWrap:"wrap",
color:"white",
fontSize:"30px",
letterSpacing:4,
"@media screen and (max-width:768px)":{
    fontSize:"17px"
}
})