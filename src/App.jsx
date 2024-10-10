import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ProductImage from './components/Image';
import product from './product'; // Import the product JSON object

const firstName = "Kingsley";  

function App() {
 
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <ProductImage />
        <div className="p-4">
          <Name />
          <Price />
          <Description />
          <button className="bg-red-700 text-white py-2 px-4 rounded-lg mt-4">
            Buy Now
          </button>
        </div>
      </div>
      <div className="mt-5 text-center">
        {firstName ? (
          <>
            <h3 className="text-xl font-semibold">Hello, {firstName}!</h3>
            <img
              src={product.image}
              alt="product"
              className="w-13 h-14 mt-2"
            />
          </>
        ) : (
          <h3 className="text-xl font-semibold">Hello, there!</h3>
        )}
      </div>
      </div>
  );
}

export default App;
