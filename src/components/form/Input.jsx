import React, { useState } from 'react';

export default (props) => {
  const [defaultText, setText] = useState('Insira um texto');

  return (
    <div>
      <h4>{defaultText}</h4>
      <input
        type="text"
        // value={defaultText}
        onChange={(e) => {
          if(e.target.value === '') {
            setText('Insira um texto');
            return;
          }
          setText(e.target.value);
        }}
      />
    </div>
  );
};
