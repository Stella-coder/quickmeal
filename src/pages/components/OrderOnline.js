import { Box, Container } from "@mui/material"
import {styled} from "@mui/styles"
import MediaCard from "shared/Card"
import HeaderProps from "shared/HeaderProps"
import img1 from "assets/spa1.jpg"
import img2 from "assets/pizza1.jpg"
import img3 from "assets/sharwama.jpg"
import img4 from "assets/cake.jpg"



const OrderOnline =()=>{
    return(
        <MyContainer>
            <HeaderProps text="11:00am to 9:00pm" header="Order Online"/>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", margin:"20px 0px"}}>
                <MediaCard name="Spaghetti" img={img1} />
                <MediaCard name="Pizza" img = {img2}  />
                <MediaCard name="Sharwama" img={img3} />
                <MediaCard name="Cake" img={img4} />
                
            </Box>

        </MyContainer>
    )
}

export default OrderOnline

const MyContainer = styled(Container)({

})