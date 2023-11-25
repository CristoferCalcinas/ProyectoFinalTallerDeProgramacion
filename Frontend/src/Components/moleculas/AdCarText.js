import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ImgCar from '../atomos/ImgCar';
import img1 from '../../Images/anuncio_auto_caracteristicas.png'
import img2 from '../../Images/caracteristicas.png'

const AdCarText = () => {
  return (
    <div>
        <div>

            <Typography variant={'h4'} style={{fontFamily:'Georgia'}}>JeepWrangler</Typography>
            <Typography style={{lineHeight:'3', fontSize:'25px', fontFamily:'Georgia'}}>4.0 Aut.</Typography>
            <hr style={{margin:'50px 0px'}}></hr>
            <div style={{width:200, position:'absolute', marginLeft:'257px'}}>
            <ImgCar img={img2}/>
            </div>
            <Typography style={{lineHeight:'2', fontSize:'25px', fontFamily:'Georgia'}}>$ 14.900</Typography>
            <Typography style={{fontFamily:'Georgia'}}>Price negotiable</Typography>
            <Button sx={{color:'#333', marginTop:'20px', padding:'0'}}><Typography sx={{backgroundColor:'white', padding:'10px 50px', fontSize:'25px', textTransform:'capitalize', color:'black'}}>Contact</Typography></Button>
        </div>
        <div style={{marginTop:'40px'}}>
            <ImgCar img={img1}/>
        </div>
    </div>
  );
};

export default AdCarText;