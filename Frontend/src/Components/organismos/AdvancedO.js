import React from 'react';
import InputBox from '../moleculas/InputBox';
import InputBoxContinue from '../moleculas/InputBoxContinue';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AutoAtom from '../atomos/AutoAtom';
import Dibujo from '../../Images/Dibujo.png';

const AdvancedO = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          minHeight: '100vh',
          backgroundColor: '#444',
          padding: '20px',
        }}
      >
        {/* Texto "Find Cars by Model" arriba de los primeros dos autos */}
        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'left', marginBottom: '5px', width: '100%' }}>
          Find cars advanced
        </Typography>

        {/* Columna 1 */}
        <div style={{ width: '30%', display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
          <InputBox />
        </div>

        {/* Columna 2 */}
        <div style={{ width: '30%', display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
          <InputBoxContinue />
        </div>

        {/* Columna 3 */}
        <div style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
          <AutoAtom imageUrl={Dibujo} />
          <p style={{ color: 'white', textAlign: 'center',fontSize:'30px'	 }}>
            Your ideal car
          </p>
        </div>
      </Box>
    </div>
  );
};

export default AdvancedO;
