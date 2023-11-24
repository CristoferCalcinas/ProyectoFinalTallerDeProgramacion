import React from 'react';
import AutoAtom from '../atomos/AutoAtom';

const MakeGroupMoleculeH = ({ imageUrls, imageSizes }) => {
  return (
    <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
      {/* Contenedor para la primera imagen */}
      <div style={{ marginRight: '10' }}>
        <AutoAtom imageUrl={imageUrls[0]} style={{ maxWidth: '300px', maxHeight: '300px' }} />
      </div>

      {/* Contenedor para las dos imágenes horizontales al lado de la primera */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AutoAtom imageUrl={imageUrls[1]} style={imageSizes[1]} />
        <AutoAtom imageUrl={imageUrls[2]} style={imageSizes[2]} />
      </div>
    </div>
  );
};

export default MakeGroupMoleculeH;
