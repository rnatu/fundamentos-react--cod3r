import React from 'react';

export default (props) => {
  return (
    <div>
      <button type="button" onClick={props.onInc} style={{ marginRight: '5px' }}>
        +
      </button>
      <button type="button" onClick={props.onDec}>
        -
      </button>
    </div>
  );
};
