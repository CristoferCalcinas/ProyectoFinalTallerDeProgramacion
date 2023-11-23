import React from 'react';
import AdCarImage from '../moleculas/AdCarImage';
import AdCarText from '../moleculas/AdCarText';
import { Box, Typography } from '@mui/material';


const AdCarGroup = () => {
  return (
    <div style={{paddingTop:'90px', color:'white', fontFamily:'Georgia', backgroundColor:'#333'}}>
    <div>
        <Typography sx={{marginLeft:'100px', fontSize:'30px'}}>Back</Typography>
    </div>
    <Box sx={{paddingTop:'100px', display:'flex', justifyContent:'center', backgroundColor:'black', color:'white', height:'85vh', margin:'0px 100px'}}>
      <div style={{width:'55%', display:'flex', justifyContent:'center'}}>
        <AdCarImage></AdCarImage>
      </div>
      <div style={{width:'35%'}}>
        <AdCarText></AdCarText>
      </div>
    </Box>

    </div>
    
  );
};

export default AdCarGroup;
