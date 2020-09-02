import React from 'react';
import { useState } from 'react';

export default (props) => {
  const [numeros, setNumeros] = useState(Array(6).fill(0))


  const getRandomNumber = (min = 1, max = 60) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numbers = [];
  const handleClick = () => {
    //clean the array
    numbers.splice(0, numbers.length);

    for (let i = 1; i < 7; i++) {
      let numberGenerated = getRandomNumber()

      while (numbers.indexOf(numberGenerated) !== -1) {
        numberGenerated = getRandomNumber()
        // console.log('Numero repetido ' + numberGenerated);
      }

      numbers.push(numberGenerated);
    }

    setNumeros(numbers.sort((a, b) => a - b))
  }

  return (
    <div>
      <div>
        <h3>Gerador de números da Mega-Sena</h3>
  <h4 style={{ fontSize: '20px' }}>{numeros.join(' - ')}</h4>
      </div>

      <div>
        <button type='button' onClick={() => {
          handleClick()

        }}>
          Gerar Números
          </button>
      </div>

    </div>
  )
}
