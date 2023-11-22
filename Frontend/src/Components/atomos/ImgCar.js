import React from 'react';
import Button from '@mui/material/Button';

const ImgCar = ({ img, alt }) => {

  const buttonStyle = {
    color:'#999'
  };

  return (
    <div>
      <Button style={buttonStyle}>
      <img
        src={img}
        alt={alt}
        style={{
          width: '100%',
          cursor: 'pointer',
        }}
      /></Button>
    </div>
  );
};

export default ImgCar;
