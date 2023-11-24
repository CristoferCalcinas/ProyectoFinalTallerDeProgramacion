// ModelCarsPage.js
import React from 'react';
import NavBar from '../organismos/NavBar';
import AdvancedO from '../organismos/AdvancedO';

const CarsbyMakePage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: '50px' }}>
        <AdvancedO />
      </div>
    </>
  );
};

export default CarsbyMakePage;