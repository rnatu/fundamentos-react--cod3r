import React, { useState } from 'react';

export default (props) => {
  const [defaultText, setText] = useState('Insira um texto');

  return (
    <div>
      <h4>{defaultText}</h4>
      <input
        type="text"
        // value={defaultText}
        onClick={(e) => {
          e.target.value = '';
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};
