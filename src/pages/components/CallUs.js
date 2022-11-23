import { Box, Typography } from "@mui/material"
import { styled } from "@mui/styles"

const CallUs =()=>{
    return(
        <MyBox>
            <Typography sx={{fontSize:"30px", color:"white", letterSpacing:2}}>CALL US : 9837367399</Typography>
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
"@media screen and (max-width:768px)":{
    fontSize:"20px"
}
})