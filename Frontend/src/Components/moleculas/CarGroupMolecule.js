// CarGroupMolecule.js
import React from 'react';
import AutoAtom from '../atomos/AutoAtom';

const CarGroupMolecule = ({ imageUrls }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <AutoAtom imageUrl={imageUrls[0]} />
      <AutoAtom imageUrl={imageUrls[1]} />
    </div>
  );
};

export default CarGroupMolecule;