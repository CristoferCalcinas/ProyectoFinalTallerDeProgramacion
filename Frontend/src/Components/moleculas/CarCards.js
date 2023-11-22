import React from 'react';
import ImgCar from '../atomos/ImgCar';

const CarCards = ({ img, alt}) => {
  return (
    <div style={{width:'400px'}}>
        <ImgCar img={img} alt={alt} />
    </div>
  );
};

export default CarCards;