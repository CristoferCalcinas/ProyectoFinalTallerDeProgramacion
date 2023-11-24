// ModelCarsPage.js
import React from 'react';
import NavBar from '../organismos/NavBar';
import Make from '../organismos/Make';

const CarsbyMakePage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: '50px' }}>
        <Make />
      </div>
    </>
  );
};

export default CarsbyMakePage;