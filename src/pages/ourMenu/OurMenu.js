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
          <div>
            <HeroSection name="our menu" img={img1}/>
            </div>
            <Box sx={{display:"flex", width:"80%", justifyContent:"flex-start", margin:"30px", flexDirection:"column"}}>
           
            <Box 
            // sx={{ borderBottom: 1, borderColor: 'divider' }}
            sx={{
              width:"100%", display:"flex", flexWrap:"wrap",height:"100%"
            }}
            >
  <Tabs value={value} onChange={handleChange} 
   variant="scrollable"
   scrollButtons
   aria-label="scrollable auto tabs example"
   allowScrollButtonsMobile
  TabIndicatorProps={{
    style: {
      backgroundColor: "#DEA954",
     color:"2DAA6F",
    }
  }} >
    <Tab label="Pizza" {...a11yProps(0)} />
    <Tab label="Soup" {...a11yProps(1)} />
    <Tab label="Shawarma" {...a11yProps(2)} />
    <Tab label="Pasries" {...a11yProps(3)} />
    <Tab label="Salad" {...a11yProps(4)} />
    <Tab label="Snack" {...a11yProps(5)} />
    <Tab label="Cake" {...a11yProps(6)} />
    <Tab label="Ice cream" {...a11yProps(7)} />
    <Tab label="Meat" {...a11yProps(8)} />
    <Tab label="Others" {...a11yProps(9)} />
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
<TabPanel value={value} index={3}>
<WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={4}>
<WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={5}>
<WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={6}>
<WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={7}>
<WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={8}>
<WrapperBox>
    <MealCard/>
 </WrapperBox>
</TabPanel>
<TabPanel value={value} index={9}>
<WrapperBox>
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