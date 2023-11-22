import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CarCards from '../moleculas/CarCards';
import imagen1 from '../../Images/auto_1.png'
import imagen2 from '../../Images/auto_2.png'
import imagen3 from '../../Images/auto_3.png'
import imagen4 from '../../Images/auto_4.png'
import imagen5 from '../../Images/auto_5.png'
import imagen6 from '../../Images/auto_6.png'
import imagen7 from '../../Images/auto_7.png'
import imagen8 from '../../Images/auto_8.png'
import imagen9 from '../../Images/auto_9.png'
import imagen10 from '../../Images/auto_10.png'
import imagen11 from '../../Images/auto_11.png'
import imagen12 from '../../Images/auto_12.png'

const cardStyle = {
  padding:'10px 20px',
};

const fontStyle = {
  fontFamily:'Georgia',
  fontSize: '20px',
  color: 'white'
};


const CarCardsGroup = () => {
  return (
    <Box sx={{paddingTop:'100px', backgroundColor:'#333'}}>
      <Typography sx={{paddingLeft:'90px', fontFamily:'Geogia', color:'white'}} variant={'h4'}>Vehicle list</Typography>
      <Box sx={{display:'flex', textAlign:'start', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
        <div style={cardStyle}>
            <CarCards img={imagen1} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Mercedes-BenzCLS500</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen2} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Fiat 23</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen3} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Jaguar 23</Typography>
        </div>
        <div style={cardStyle}>
            <CarCards img={imagen4} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Camaro 70s</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen5} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>BMW Z4</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen6} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Auti TTS</Typography>
        </div>
        <div style={cardStyle}>
            <CarCards img={imagen7} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Audi A4</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen8} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Alfa Romeo Giulia</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen9} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Volkswagen Passat</Typography>
        </div>
        <div style={cardStyle}>
            <CarCards img={imagen10} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Jeep Wrangler Sport</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen11} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Jeep Wrangler</Typography>
        </div>

        <div style={cardStyle}>
            <CarCards img={imagen12} alt={'auto'} label={'12'}/>
            <Typography style={fontStyle}>Mercedes-Benz</Typography>
        </div>
    </Box>

    </Box>

  );
};

export default CarCardsGroup;
