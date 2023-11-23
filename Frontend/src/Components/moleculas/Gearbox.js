import React, {useState} from 'react';
import { Typography, Button } from '@mui/material';

const Gearbox = () => {
  const StyleInput = {
    padding: '20px 15px',
    fontFamily: 'Georgia',
    fontSize:'22px',
    marginBottom: '12px',
    width:'300px',
    borderStyle: 'none',
    borderRadius: '20px',
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getButtonStyle = (option) => {
    return {
      backgroundColor: selectedOption === option ? '#bbb' : 'white', 
      color: selectedOption === option ? 'white' : 'black', 
      border: `1px solid ${selectedOption === option ? '#bbb' : 'black'}`,
    };
  };


  return (
    <div style={{marginTop:'100px'}}>
      <Typography sx={{ fontFamily: 'Georgia', color:'white', marginBottom:'10px' }} variant='h4'>
        Gearbox
      </Typography>
      <form style={{display:'flex', flexDirection:'column'}}>
        <div>
        <Button
            sx={{width:'167px', padding: '10px 15px', marginBottom:'12px', fontSize:'22px', fontFamily:'Georgia', textTransform:'capitalize', borderRadius: '20px',}}
            onClick={() => handleOptionClick('Manual')}
            style={getButtonStyle('Manual')}
          >
            Manual
          </Button>
          <Button
            sx={{width:'167px', padding: '10px 15px', marginBottom:'12px', fontSize:'22px', fontFamily:'Georgia', textTransform:'capitalize', borderRadius: '20px',}}
            onClick={() => handleOptionClick('Automatic')}
            style={getButtonStyle('Automatic')}
          >
            Automatic
          </Button>
        </div>
        <input
          placeholder='Model'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Km'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Year'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Price'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Type of fuel'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='References'
          style={{ ...StyleInput }}
        />

      </form>
    </div>
  );
};

export default Gearbox;