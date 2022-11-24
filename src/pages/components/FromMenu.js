import React, {useState,useEffect} from "react"
import { Box } from "@mui/material"
import Button from "shared/Button"
import HeaderProps from "shared/HeaderProps"
import MealCard from "shared/MealCard"
import {app} from "../../base"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addOrder } from "utils/ReduxGlobal";


const FromMenu =()=>{
    const dispatch = useDispatch();
    const[data, setData]= useState([])

    const getData = async () => {
        await app
          .firestore()
          .collection("product")
        //   .orderBy("category")
        //   .startAt("Drinks")
        //   .endAt("Drinks")
          .onSnapshot((snapshot) => {
            const items = [];
            snapshot.forEach((doc) => {
              items.push({ ...doc.data(), id: doc.id });
            });
            setData(items);
            console.log("ajegunle", data);
          });
      };
      useEffect(() => {
        getData();
      ;
      }, []);
    return(
        <div>
            <HeaderProps text="Random dishes" header="From our menu"/>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", margin:"20px"}}>
                {
                    data?.map((props, i)=>(
                        <MealCard 
                        key={i}
                        img={props.avatar} 
                        name={props.name}
                        desc={props.desc}
                        price={props.price}
                        clk={() => {
                            console.log("jjjs")
                            dispatch(addOrder(props))
                          }}
                        />
                    ))
                }
            </Box>
            <Box sx={{display:"flex",width:"100%", justifyContent:"center"}}>
                <Link to="/menu">
               <Box sx={{width:"200px"}}> 
               <Button text ="View all menu" clr="black" br="black"/>
               </Box>
               </Link>
                </Box>
                
        </div>
    )
}

export default FromMenu