import * as React from 'react';
import {Card, Box} from '@mui/material';

import Typography from '@mui/material/Typography';
import img from "../assets/sharwama.jpg"
import {styled} from "@mui/styles"

export default function MediaCard({name, img}) {
  return (
    <div style={{margin:"10px"}}>
      <MyBox sx={{backgroundImage:`url(${img})`,  }}>
        <Box sx={{width:"95%",  position:"relative", display:"flex", justifyContent:"center", height:"96%" , boxShadow:"0 4px 30px rgba(0,0,0, 0.5)" , backgroundColor:"rgba(255,255,255,0)",}}>
        <Typography sx={{position:"absolute", bottom:"5px", letterSpacing:1, textTransform:"upperCase", color:"white"}}>{name}</Typography>
        </Box>
        
      </MyBox>

    </div>
  );
}

const MyBox = styled(Box)({
  backgroundSize:"cover",
   backgroundRepeat:"no-repeat",
   backgroundPosition:"fixed",
   display:"flex",
    justifyContent:"center", 
   alignItems:"center",
    width:"250px", 
    height:"350px",
    "@media screen and (max-width:768px)":{
      height:"150px",
      width:"120px"
  }
})