import React from 'react';
import FormSellCar from '../moleculas/FormSellCar';
import Gearbox from '../moleculas/Gearbox';
import AddImages from '../moleculas/AddImages';

const PostFormGroup = () => {
  return (
    <div style={{display:'flex'}}>
        <div style={{width:'30%', display:'flex', justifyContent:"center"}}>
        <FormSellCar />  
        </div>
        <div style={{width:'30%', display:'flex', justifyContent:"center"}}>
        <Gearbox />  
        </div>
        <div style={{width:'40%'}}>
        <AddImages />  
        </div>
    </div>
    
  );
};

export default PostFormGroup;
