import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded shadow p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-green-700 font-bold">{product.price}</p>
    </div>
  );
}