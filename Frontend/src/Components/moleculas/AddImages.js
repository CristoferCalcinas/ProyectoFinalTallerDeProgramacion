import React from 'react';
import { Button, Typography } from '@mui/material';

const AddImages = () => {

  return (
    <div style={{marginTop:'150px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Button style={{backgroundColor:'white', width:'80%', height:'450px', fontSize:'22px', color:'gray', fontFamily:'Georgia', textTransform:'capitalize', borderRadius: '20px'}}>Add Photos</Button>
      <Button style={{backgroundColor:'black', marginTop:'15px', width:'60%', color:'white', fontFamily:'Georgia', fontSize:'22px', textTransform:'capitalize', borderRadius: '20px'}}>Continue</Button>
    </div>
  );
};

export default AddImages;