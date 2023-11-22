import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BasicButtons from '../atomos/BasicButton';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

export default function NavBar() {
  const navBarContainerStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    backgroundColor: '#000', 
    padding: '10px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    zIndex:'999'
  };

  const logoStyle = {
    color: '#fff', 
    fontSize: '50px'
  };

  const logoContainerStyle = {
    position: 'absolute',
    marginRight: '30px',
    right: '10px', 
  };

  return (
    <Box sx={navBarContainerStyle}>
      <Stack spacing={12} direction="row">
        <BasicButtons label='White&Black' size={20} textColor={'#fff'} />
        <BasicButtons label='Used Cars' size={20} textColor={'#fff'} />
        <BasicButtons label='New Cars' size={20} textColor={'#fff'} />
        <BasicButtons label='Sell Cars' size={20} textColor={'#fff'} />
        <BasicButtons label='Find Cars' size={20} textColor={'#fff'} />
      </Stack>
      <Box sx={logoContainerStyle}>
        <IconButton color="inherit" aria-label="menu">
          <PersonIcon sx={logoStyle} />
        </IconButton>
      </Box>
    </Box>
  );
}