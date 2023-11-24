import React from 'react';

const InputBox = () => {
  const StyleInput = {
    padding: '20px 15px',
    fontFamily: 'Georgia',
    fontSize:'22px',
    marginBottom: '12px',
    width:'300px',
    borderStyle: 'none',
    borderRadius: '20px',
  };


  return (
    <div style={{marginTop:'0px'}}>
      <form style={{display:'flex', flexDirection:'column'}}>
        
        <input
          placeholder='Make'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Model'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Min year'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Max year'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Min price'
          style={{ ...StyleInput }}
        />
        <input
          placeholder='Max price'
          style={{ ...StyleInput }}
        />

      </form>
    </div>
  );
};

export default InputBox;