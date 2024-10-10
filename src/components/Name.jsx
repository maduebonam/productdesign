import React from 'react';
import product from '../product'; // Import product JSON object

const Name = () => {
  return <h2 className="text-2xl font-bold">{product.name}</h2>;
};

export default Name;