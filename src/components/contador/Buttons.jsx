import React from 'react';

export default (props) => {
  return (
    <div>
      <button type="button" onClick={props.inc} style={{ marginRight: '5px' }}>
        +
      </button>
      <button type="button" onClick={props.dec}>
        -
      </button>
    </div>
  );
};
