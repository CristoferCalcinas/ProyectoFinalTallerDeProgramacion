// AutoAtom.js
import React from 'react';

const AutoAtom = ({ imageUrl }) => {
  return (
    <div
      style={{
        maxWidth: '400px', // Establece el ancho máximo deseado para tus imágenes
        maxHeight: '500px', // Establece la altura máxima deseada para tus imágenes
      }}
    >
      <img
        src={imageUrl}
        alt="Auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Ajusta la imagen para que quepa completamente dentro del contenedor
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default AutoAtom;
