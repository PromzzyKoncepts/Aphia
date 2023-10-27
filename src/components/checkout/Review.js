import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import userContext from '../../context/userContext';


const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
  //   { name: 'Card type', detail: 'Visa' },
  //   { name: 'Card holder', detail: 'Mr John Smith' },
  //   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  //   { name: 'Expiry date', detail: '04/2024' },
  // ];
  
export default function Review() {
    
  const { authUser } = React.useContext(userContext);
  const cartItems = useSelector((state) => state.cart.items)
  const cartTotal = useSelector((state) => state.cart.total)
  const shipping = useSelector((state) => state.shipping)
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} secondary={product.category} tertiary={ product.quantity} />
            <Typography variant="body2">&#8358;{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary=" Sum Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            &#8358;{Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
              cartTotal
            )}.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Details
          </Typography>
          <Typography gutterBottom>{authUser.username}</Typography>
          <Typography gutterBottom>{`${shipping.address1}, ${shipping.state}, ${shipping.country}`}</Typography>
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}
