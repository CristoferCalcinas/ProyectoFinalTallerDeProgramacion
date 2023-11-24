// moleculas/MakeGroupMolecule.js
import React from 'react';
import AutoAtom from '../atomos/AutoAtom';

const MakeGroupMolecule = ({ imageUrls, imageSizes }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
      <AutoAtom imageUrl={imageUrls[0]} style={imageSizes[0]} />
      <AutoAtom imageUrl={imageUrls[1]} style={imageSizes[1]} />
      <AutoAtom imageUrl={imageUrls[2]} style={imageSizes[2]} />
    </div>
  );
};

export default MakeGroupMolecule;

