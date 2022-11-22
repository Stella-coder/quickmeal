import { Box } from "@mui/material"
import Button from "shared/Button"
import HeaderProps from "shared/HeaderProps"
import MealCard from "shared/MealCard"


const FromMenu =()=>{
    return(
        <div>
            <HeaderProps text="Random dishes" header="From our menu"/>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", margin:"20px"}}>
                <MealCard/>
                <MealCard/>
                <MealCard/>
                <MealCard/>
                <MealCard/>
            </Box>
            <Box sx={{display:"flex",width:"100%", justifyContent:"center"}}>
               <Box sx={{width:"200px"}}> <Button text ="View all menu" clr="black" br="black"/></Box>
                </Box>
        </div>
    )
}

export default FromMenu