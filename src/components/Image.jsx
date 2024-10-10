import React from 'react';
import product from '../product'; // Import product JSON object

const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="w-36 h-42 object-cover items-center ml-24 rounded-t-lg"
    />
  );
};

export default Image;