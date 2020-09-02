import React from 'react';

export default (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        // style={{ fontSize: '1.4rem', width: '60px' }}
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={(e) => props.onPassoChange(+e.target.value)}
      />
    </div>
  );
};
