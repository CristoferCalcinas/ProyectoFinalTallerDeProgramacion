import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MakeGroupMolecule from '../moleculas/MakeGroupMolecule';
import MakeGroupMoleculeH from '../moleculas/MakeGroupMoleculeH';  // Asegúrate de importar el componente correcto
import Toyota from '../../Images/Toyota.png';
import Chevrolet from '../../Images/Chevrolet.png';
import Nissan from '../../Images/Nissan.png';
import Ford from '../../Images/Ford.png';
import Susuki from '../../Images/Susuki.png';
import Hyundai from '../../Images/Hyundai.png';

const Make = () => {
  return (
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
      <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'left', marginBottom: '5px', width: '100%' }}>
        Find Cars by Make
      </Typography>

      {/* Molecula 1 */}
      <MakeGroupMolecule
        imageUrls={[Toyota, Susuki, Hyundai]}
        imageSizes={[
          { maxWidth: '500px', maxHeight: '500px' },
          { maxWidth: '500px', maxHeight: '500px' },
          { maxWidth: '500px', maxHeight: '500px' },
        ]}
      />

      {/* Molecula 2 */}
      <MakeGroupMoleculeH
        imageUrls={[Ford, Nissan, Chevrolet]}
        imageSizes={[
            { maxWidth: '500px', maxHeight: '500px' },
            { maxWidth: '200px', maxHeight: '200px' },
            { maxWidth: '200px', maxHeight: '200px' },
        ]}
/>

    </Box>
  );
};

export default Make;
