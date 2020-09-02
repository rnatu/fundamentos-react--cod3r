import React, { useState } from 'react';
import Sub from './Sub';

export default (props) => {
  const [num, setNum] = useState(0);
  const [label, setLabel] = useState('Gerar');

  function click(valorGerado, text) {
    setNum(valorGerado);
    setLabel(text);
  }

  return (
    <div>
      <h1>
        {label}: {num}
      </h1>
      <Sub onClicar={click} />
    </div>
  );
};
