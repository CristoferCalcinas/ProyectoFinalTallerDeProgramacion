import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Chevrolet from '../../images/Chevrolet.png';
import Ford from '../../images/Ford.png';
import Hyundai from '../../images/Hyundai.jpg';
import Nissan from '../../images/Nissan.png';
import Suzuki from '../../images/Suzuki.png';
import Toyota from '../../images/Toyota.png';

const StyledButton = styled(Button)({
  cursor: 'pointer',
  border: 'none',
  padding: '0',
  background: 'none',
  width: '50px', // Tamaño inicial
  height: '50px', // Tamaño inicial
  '& img': {
    width: '90%', // Para asegurarte de que la imagen llene el botón
    height: '90%', // Para asegurarte de que la imagen llene el botón
  },
});

const GalleryImg = () => {
  const [imageStyles, setImageStyles] = useState({
    Chevrolet: { left: 850, top: 400, width: '220px', height: '150px' },
    Ford: { left: 400, top: 100, width: '30%', height: '30%' },
    Hyundai: { left: -450, top: 400, width: '20%', height: '10%' },
    Nissan: { left: 650, top: 240, width: '15%', height: '15%' },
    Suzuki: { left: -100, top: 80, width: '30%', height: '10%' },
    Toyota: { left: -450, top: -90, width: '30%', height: '30%' },
  });

  const handleDrag = (brand, e, data) => {
    setImageStyles((prevStyles) => ({
      ...prevStyles,
      [brand]: { ...prevStyles[brand], left: data.x, top: data.y },
    }));
  };

  const handleClick = (brand) => {
    setImageStyles((prevStyles) => ({
      ...prevStyles,
      [brand]: { ...prevStyles[brand], width: '150px', height: '150px' }, // Ajusta el tamaño deseado
    }));
    console.log(`Clic en la imagen de ${brand}`);
  };

  return (
    <div className="contenedor-imagenes">
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            background-color: #333;
          }
        `}
      </style>
      <div className="lado-izquierdo">
        <Draggable bounds="parent" onDrag={(e, data) => handleDrag('Chevrolet', e, data)}>
          <StyledButton onClick={() => handleClick('Chevrolet')} style={imageStyles.Chevrolet}>
            <img src={Chevrolet} alt="Chevrolet" />
          </StyledButton>
        </Draggable>
        <Draggable bounds="parent" onDrag={(e, data) => handleDrag('Ford', e, data)}>
          <StyledButton onClick={() => handleClick('Ford')} style={imageStyles.Ford}>
            <img src={Ford} alt="Ford" />
          </StyledButton>
        </Draggable>
        <Draggable bounds="parent" onDrag={(e, data) => handleDrag('Hyundai', e, data)}>
          <StyledButton onClick={() => handleClick('Hyundai')} style={imageStyles.Hyundai}>
            <img src={Hyundai} alt="Hyundai" />
          </StyledButton>
        </Draggable>
      </div>
      <div className="lado-derecho">
        <Draggable bounds="parent" onDrag={(e, data) => handleDrag('Nissan', e, data)}>
          <StyledButton onClick={() => handleClick('Nissan')} style={imageStyles.Nissan}>
            <img src={Nissan} alt="Nissan" />
          </StyledButton>
        </Draggable>
        <Draggable bounds="parent" onDrag={(e, data) => handleDrag('Suzuki', e, data)}>
          <StyledButton onClick={() => handleClick('Suzuki')} style={imageStyles.Suzuki}>
            <img src={Suzuki} alt="Suzuki" />
          </StyledButton>
        </Draggable>
        <Draggable bounds="parent" onDrag={(e, data) => handleDrag('Toyota', e, data)}>
          <StyledButton onClick={() => handleClick('Toyota')} style={imageStyles.Toyota}>
            <img src={Toyota} alt="Toyota" />
          </StyledButton>
        </Draggable>
      </div>
    </div>
  );
};

export default GalleryImg;
