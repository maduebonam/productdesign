import React from 'react';
import product from '../product'; // Import product JSON object

const Description = () => {
  return <p className="text-gray-700">{product.description}</p>;
};

export default Description;