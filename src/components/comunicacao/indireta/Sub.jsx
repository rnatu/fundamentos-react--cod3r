import React from 'react';

export default (props) => {
  function acao() {
    props.onClicar(Math.floor(Math.random() * 101), 'Gerado');
  }

  return (
    <button type="button" onClick={acao}>
      Alterar
    </button>
  );
};
