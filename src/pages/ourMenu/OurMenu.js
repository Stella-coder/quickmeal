import React from "react"
import { Box,Typography } from "@mui/material"
import { styled } from "@mui/styles"
import HeroSection from "shared/HeroSection"
import MealCard from "shared/MealCard"
import img1 from "assets/glas1.jpg"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';





const OurMenu = ()=>{
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    

    return(
        <Box sx={{width:"100%"}}>
            <HeroSection name="our menu" img={img1}/>
            <Box sx={{display:"flex", width:"100%", justifyContent:"flex-start", margin:"30px", flexDirection:"column"}}>
           
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit"  TabIndicatorProps={{
    style: {
      backgroundColor: "#DEA954",
     color:"2DAA6F",
    }
  }} >
    <Tab label="Pizza" {...a11yProps(0)} />
    <Tab label="Soup" {...a11yProps(1)} />
    <Tab label="Shawarma" {...a11yProps(2)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
 <WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={1}>
<WrapperBox>
    <MealCard/>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={2}>
<WrapperBox>
    <MealCard/>
    <MealCard/>
    <MealCard/>
 </WrapperBox>
</TabPanel>
            </Box>
           
           
        </Box>
    )
}

export default OurMenu

const HeaderBox = styled(Box)({
  display:"flex",
  flexWrap:"wrap", 
  minWidth:"400px",
  justifyContent:"space-around",
  textTransform:"uppercase",
//   color:"gray",
  letterSpacing:1,
  

})
const WrapperBox = styled(Box)({
display:"flex",
justifyContent:"center",
alignItems:"center",
flexWrap:"wrap",
width:"100%",
})

const Text = styled("div")({
    fontSize:"13px",
    cursor:"pointer",
    transition:"all 350ms",
"&:hover":{
    color:"#DEA954"
}
})