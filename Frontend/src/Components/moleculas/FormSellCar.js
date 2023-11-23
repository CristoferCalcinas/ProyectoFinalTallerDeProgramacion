import React from 'react';
import { Typography } from '@mui/material';

const FormSellCar = () => {
  const StyleInput = {
    padding: '20px 15px',
    fontFamily: 'Georgia',
    fontSize:'22px',
    width:'300px',
    borderRadius: '20px',
    borderStyle: 'none'
  };



  const StyleTextarea = {
    marginTop:'15px',
    resize: 'none',
    width: '300px', 
    height: '423px', 
    fontSize: '22px', 
    fontFamily: 'Georgia',
    padding:'20px 15px',
    borderRadius: '20px'
};

  return (
    <div style={{marginTop:'100px'}}>
      <Typography sx={{ fontFamily: 'Georgia', color:'white', marginBottom:'10px' }} variant='h4'>
        Sell your car
      </Typography>
      <form style={{display:'flex', flexDirection:'column'}}>
        <input
          placeholder='Title'
          style={{ ...StyleInput }}
        />

        <textarea
          placeholder='Description'
          style={StyleTextarea}
        ></textarea>
      </form>
    </div>
  );
};

export default FormSellCar;