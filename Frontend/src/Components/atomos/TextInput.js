import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, id, margin, width, background}) => {
  return <TextField label={label} id={id} margin={margin} style={{width:width, backgroundColor:background}} />;
};

export default TextInput;