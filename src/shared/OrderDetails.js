import * as React from 'react';
import { Box, } from "@mui/material"
import { styled } from "@mui/styles"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc,qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}



function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const OrderDetails = ()=>{
    return(
        <Container>
            <Header>Your Order</Header>
            <Wrapper>
            <TableContainer >
      <Table sx={{ width:"100%" }} aria-label="spanning table">
        <TableHead>
        
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell >Total</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>1 * {row.desc}</TableCell>
              <TableCell >{row.qty}</TableCell>
              
            </TableRow>
          ))}
          <TableRow>
            
            <TableCell >Subtotal</TableCell>
            <TableCell >{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
         
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell >{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            </Wrapper>
        </Container>
    )
}

export default OrderDetails


const Container = styled(Box)({
    display:"flex",
    width:"100%",
   alignItems:"center",
    backgroundColor:"black",
    minHeight:"100vh",
    PaddingTop:"85px",
    flexDirection:"column"
    

})
const Wrapper = styled(Box)({
    width:"500px",
    backgroundColor:"white",
    marginTop:"20px",
    "@media screen and (max-width:768px)":{
        width:"100%"
    }
    
})
const Header = styled("div")({
    color:"white",
    fontSize:"20px",
    marginTop:"85px"
})
// const Container = styled(Box)({})



// export default function SpanningTable() {
//   return (
    
//   );
// }