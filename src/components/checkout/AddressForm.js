import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../redux/features/shippingSlice';

export default function AddressForm() {
  const dispatch = useDispatch();
  const addressFormData = useSelector((state) => state.shipping);

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
  return (
    <React.Fragment>
     
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Street address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressFormData.address1}
            onChange={(e) => handleInputChange('address1', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Alternate address"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressFormData.address2}
            onChange={(e) => handleInputChange('address2', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={addressFormData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={addressFormData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={addressFormData.zip}
            onChange={(e) => handleInputChange('zip', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={addressFormData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
