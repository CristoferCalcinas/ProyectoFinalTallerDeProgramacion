// ModelCarsPage.js
import React from 'react';
import NavBar from '../organismos/NavBar';
import Cars from '../organismos/Cars';

const ModelCarsPage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: '50px' }}>
        <Cars />
      </div>
    </>
  );
};

export default ModelCarsPage;