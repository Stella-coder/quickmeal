import React, {useState, useEffect} from 'react';
import { Box, } from "@mui/material"
import { styled } from "@mui/styles"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { totalOrder } from 'utils/ReduxGlobal';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  const dispatch = useDispatch()
  const data = useSelector((state) => state.persistedReducer.order);
    const totalCost = useSelector((state) => state.persistedReducer.totalMealCost);
    // const [total, setTotal] = useState(totalCost)
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(totalOrder());
    console.log(totalCost, "total")
  }, [data])
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
          {data.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.qty} * {row.desc}</TableCell>
              <TableCell >{row.price}</TableCell>
              
            </TableRow>
          ))}
          <TableRow>
            
            <TableCell >Subtotal</TableCell>
            <TableCell >{totalCost}</TableCell>
          </TableRow>
         
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell >{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            </Wrapper>
            <Payment>
              <PaymentHeader>Payment Method </PaymentHeader>
              <PaymentWrapper>
    
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <div> Pay on delivery</div>
      </PaymentWrapper>
      <PaymentWrapper>
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
  
    <div> Pay with paystack</div>
  
  </PaymentWrapper>
{
  selectedValue === "a"?   <PaymentButton>Place your order</PaymentButton>
  :<PaymentButton onClick={handleOpen}>Open paystack modal</PaymentButton>
}

  <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
            </Payment>
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
const Payment = styled(Box)({
  backgroundColor:"white",
  minWidth:300,
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  height:"180px",
  margin:"10px 0px"
})
const PaymentHeader = styled("div")({
  fontSize:"20px",
  fontWeight:"bold"
})
const PaymentWrapper = styled(Box)({
  display:"flex",
  alignItems:"center"
})
const PaymentButton = styled("div")({
  width:"180px",
  height:"40px",
  backgroundColor:"black",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:"white",
  borderRadius:"5px",
  cursor:"pointer"
})
// const Container = styled(Box)({})



