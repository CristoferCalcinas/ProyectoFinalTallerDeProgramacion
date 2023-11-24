import React from 'react';

const AutoAtom = ({ imageUrl, style }) => {
  const defaultStyle = {
    maxWidth: '300px', // Ancho máximo deseado
    maxHeight: '300px', // Altura máxima deseada
    marginBottom: '10px', // Espaciado inferior opcional
  };

  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <div style={mergedStyle}>
      <img
        src={imageUrl}
        alt="Auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default AutoAtom;
