import React from 'react';
import ImgCar from '../atomos/ImgCar';
import img1 from '../../Images/anuncio_auto1.png'
import img2 from '../../Images/anuncio_auto2.png'
import img3 from '../../Images/anuncio_auto3.png'

const AdCarImage = () => {
  return (
    <div>
        <div style={{width:'500px', display:'flex'}}>
            <ImgCar img={img1}/>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'200px'}}>
            <ImgCar img={img3}/>
            </div>
            <div style={{width:'192px'}}>
            <ImgCar img={img2}/>
            </div>

        </div>
    </div>
  );
};

export default AdCarImage;