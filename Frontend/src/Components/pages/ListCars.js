import React from 'react';
import NavBar from '../organismos/NavBar';
import CarCardsGroup from '../organismos/CarCardsGroup';


const ListCars = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <CarCardsGroup />
      </div>
    </div>
  );
};

export default ListCars;