import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>O numero é {props.numero}</h1>
      {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
    </div>
  );
};
