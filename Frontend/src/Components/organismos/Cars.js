// Cars.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CarGroupMolecule from '../moleculas/CarGroupMolecule';
import camioneta from '../../Images/camioneta.png';
import convertible from '../../Images/convertible.png';
import coupe from '../../Images/coupe.png';
import jeep from '../../Images/jeep.png';
import sedan from '../../Images/sedan.png';
import suv from '../../Images/Suv.png';

const Cars = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // Alinea los elementos arriba
        justifyContent: 'space-evenly',
        minHeight: '100vh',
        backgroundColor: '#444',
        padding: '20px',
      }}
    >
      {/* Texto "Find Cars by Model" arriba de los primeros dos autos */}
      <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'left', marginBottom: '5px', width: '100%' }}>
        Find Cars by Model
      </Typography>

      {/* Molecula 1 */}
      <CarGroupMolecule
        imageUrls={[camioneta, convertible]}
      />

      {/* Molecula 2 */}
      <CarGroupMolecule
        imageUrls={[coupe, jeep]}
      />

      {/* Molecula 3 */}
      <CarGroupMolecule
        imageUrls={[sedan, suv]}
      />
    </Box>
  );
};

export default Cars;
