import React, { useState } from 'react';
import Sub from './Sub';

export default (props) => {
  const [num, setNum] = useState(0);

  function click(valorGerado, text) {
    setNum(valorGerado);

  }

  return (
    <div>
      <h3>
      Gerar número de 1 a 100
      </h3>
      <h1>
      {num}
      </h1>
      <Sub onClicar={click} />
    </div>
  );
};
