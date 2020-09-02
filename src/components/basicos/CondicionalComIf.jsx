import React from 'react';
import If from './If';

export default (props) => {
  return (
    <div>
      <h1>O numero é {props.numero}</h1>

      <If test={props.numero % 2 === 0}>
        <span>Par</span>
      </If>
      <If test={props.numero % 2 === 1}>
        <span>Impar</span>
      </If>
    </div>
  );
};
