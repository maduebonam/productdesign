import React from 'react';
import product from '../product'; // Import product JSON object

const Price = () => {
  return <p className="text-lg font-semibold text-black">{product.price}</p>;
};

export default Price;