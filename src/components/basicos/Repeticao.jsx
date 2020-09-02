import React from 'react';
import products from '../data/products';

export default (props) => {
  function getProductsOnListItem() {
    return products.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.name} - R$ {prod.price}{' '}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Repetição</h1>
      <ul>{getProductsOnListItem()}</ul>
    </div>
  );
};
