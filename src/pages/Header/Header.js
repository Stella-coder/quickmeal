import React,{useState, useEffect} from "react"
import {Container, Box, Typography} from "@mui/material"
import {styled} from "@mui/styles"
import { Link } from "react-router-dom"
import img from "assets/1.jpg"
import { Scale } from "@mui/icons-material"
// import MenuRoundedIcon from "@mui/icons-material"


const Header = ()=>{
    const [toggle, setToggle] = useState(false)
    const [cartToggle, setCartToggle] = useState(false)
    const changeToggle =()=>{
        setToggle(!toggle)
        console.log(toggle)
    }
    
    const changeCartToggle =()=>{
        setCartToggle(!cartToggle)
        console.log(cartToggle, "cart")
    }


    const[navbar, setNavbar] = useState(false)

    const changeBgColor = ()=> {
        // console.log(window.scrollY)
        if (window.scrollY >=100){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
       
    }

    useEffect(()=>{
        changeBgColor()
        window.addEventListener("scroll", changeBgColor)
    })

    return(
        <>
        <MyContainer sx={{backgroundColor: navbar? "#1B2024": "transparent"}} >
            <Wrapper>
                <MenuH onClick={changeToggle}>menu</MenuH>
                <Logo> logo</Logo>
                <Wrapper2> 
                    <Link to="/"style={{textDecoration:"none", color:"white"}} >
                    <MyTypography sx={{fontSize:"12px", textDecoration:"none", }}>Home</MyTypography>
                    </Link>
                    <Link to ="/menu" style={{textDecoration:"none", color:"white"}}>
                    <MyTypography sx={{fontSize:"12px"}}>Our Menu</MyTypography>
                    </Link>
                    <Link to ="/gallery" style={{textDecoration:"none", color:"white"}}>
                    <MyTypography sx={{fontSize:"12px"}}>Gallery</MyTypography>
                    </Link>
                    <Link to="contact" style={{textDecoration:"none", color:"white"}}>
                    <MyTypography sx={{fontSize:"12px"}}>Contact</MyTypography>
                    </Link>
                   
                </Wrapper2>
              
                <Cart onClick={changeCartToggle}> cart</Cart>
            </Wrapper>
        </MyContainer>
         {
            toggle?
            <MobileWrapper>
            <div style={{width:"100%", display:"flex", justifyContent:"center", cursor:"pointer"}} onClick={changeToggle}>X</div>
            <WrapText>
                     <MyTypographyMobile sx={{fontSize:"12px"}}>Home</MyTypographyMobile>
                    <MyTypographyMobile sx={{fontSize:"12px"}}>Our Menu</MyTypographyMobile>
                    <MyTypographyMobile sx={{fontSize:"12px"}}>Gallery</MyTypographyMobile>
                    <MyTypographyMobile sx={{fontSize:"12px"}}>Contact</MyTypographyMobile>
            </WrapText>
        </MobileWrapper>
        : null
           }
        {
            cartToggle?
            <CartContainer>
            <CartWrapper>
                <CartHeader>
                    <HoldH>SIGN IN</HoldH>
                    <HoldH>VIEW ORDER</HoldH>
                    <div style={{marginRight:"20px", cursor:"pointer"}} onClick={changeCartToggle} >X</div>
                </CartHeader>
                <HoldScroll>
                <CartCard>
                    <Hold>
                    <Text>
                        <Name>Piza</Name>
                        <div style={{display:"flex"}}>
                            1 x <Price>#3455</Price>
                        </div>
                    </Text>
                    <CartImage src={img}/>
                    </Hold>
                    <DeleteIcon>d</DeleteIcon>
                </CartCard>
                <CartCard>
                    <Hold>
                    <Text>
                        <Name>Piza</Name>
                        <div style={{display:"flex"}}>
                            1 x <Price>#3455</Price>
                        </div>
                    </Text>
                    <CartImage src={img}/>
                    </Hold>
                    <DeleteIcon>d</DeleteIcon>
                </CartCard>
                </HoldScroll>
                <SubTotal>
                    SubTotal:  <Price>#3455</Price>
                </SubTotal>
                <Checkout>Checkout</Checkout>
            </CartWrapper>
            </CartContainer>
            :
            null
        }
           </>
    )
}
export default Header

const MyContainer = styled(Box)({
    height:"80px",
    width:"100%",
    position:"fixed",
    color:"white",
    zIndex:10,
    transition:"all 350ms"
   
}) 
const Wrapper = styled(Box)({
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
   
}) 
const Logo = styled("div")({  
}) 
const WrapText = styled("div")({  
display:"flex",
flexDirection:'column',
height:"50vh",
justifyContent:"space-around",
padding:"0px 20px",
}) 
const MenuH = styled("div")({  
    "@media screen and (min-width:768px)":{
        display:"none"
    }
}) 
const Wrapper2 = styled(Box)({
    display:"flex",
    justifyContent:"space-around",
    width:"400px",
    "@media screen and (max-width:768px)":{
        display:"none"
    }
    
}) 
const Cart = styled(Box)({
      
}) 
const MobileWrapper = styled(Box)({
     height:"100vh",
     width:"100vw",
     backgroundColor:"rgba(27,32,36, 0.99)" ,
     display:"flex",
    //  justifyContent:"center",
    color:"white",
     position:"fixed",
     flexDirection:'column',
     zIndex:1000,
     "@media screen and (min-width:768px)":{
        display:"none"
    }
   
}) 
const MyTypography = styled("div")({
    // margin:"10px 5px",
    fontSize:"11px",
    textTransform:"uppercase",
    cursor:"pointer" ,
    transition:"all 350ms",
    
    "&:hover" :{
        color:"#DEA954",
    }    
}) 
const MyTypographyMobile = styled("div")({
    // margin:"10px 5px",
    fontSize:"11px",
    textTransform:"uppercase",
    cursor:"pointer" ,
    transition:"all 350ms",
    borderBottom:" 1px solid #DEA954",
    padding:"5px 0px",
    
    "&:hover" :{
        color:"#DEA954",
    }    
}) 

const CartContainer = styled("div")({ 
    width: "100%",
    height:"100vh",
    backgroundColor:"rgba(0,0,0,0.2)" ,
    position:"fixed",
    display:"flex",
    justifyContent:"flex-end",
    color:"white",
    zIndex:100,
    "@media screen and (max-width:768px)":{
    
    }
}) 
const CartWrapper = styled("div")({ 
    width: "400px",
    height:"400px",
    // height:"100%",
    backgroundColor:"#1B2024" ,
    marginTop:"80px",
    marginRight:"20px",
    borderTop:"1px solid #DEA954",
   
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    "@media screen and (max-width:768px)":{
        width:"100vw",
        height:"100vh",
        margin:0
    }
   
}) 

const CartHeader = styled("div")({
    display:"flex",
    height:"40px",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
 })
const CartCard = styled("div")({
    display:"flex",
    alignItems:"center",
    width:"100%",
    backgroundColor:"rgba(32,36,40, 0.99)",
    // backgroundColor:"white",
    minHeight:"80px",
  justifyContent:"center",
  borderTop:"1px solid rgba(255,255,255, 0.1)",
  borderBottom:"1px solid rgba(255,255,255, 0.1)",
    
})
const SubTotal = styled("div")({ 
    display:"flex",
    margin:"10px 0px"
})
const Checkout = styled("div")({ 
    height:"40px",
    width:"200px",
    backgroundColor:"#DEA954",
    transition:"all 350ms",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer",
    "&:hover": {
        transform:"scale(1.05)",
        color:"black"

    }
})
const Text = styled("div")({
    width:"200px",
    fontSize:"14px"
    
 })
const Name = styled("div")({
    
 })
const CartImage = styled("img")({
    width:"90px",
    height:"60px",
    borderRadius:"5px",
    objectFit:"cover",
    margin:"0px 10px"
 })
const DeleteIcon = styled("div")({ })
const Hold = styled("div")({
    display:"flex",
    alignItems:"center",
    width:"80%",
    justifyContent:"space-between"
    
 })
const Price = styled("div")({
    color:"#DEA954",
 })
const HoldScroll = styled("div")({
    width:"100%",
    height: "200px",
    overflowY:"scroll",
 })
const HoldH = styled("div")({ 
    width:"130px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"14px"
    
})
// const CartWrapper = styled("div")({ })