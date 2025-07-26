import React from 'react';

const sellerData = {
  name: 'Mahesh Traders',
  location: 'Jorhat, Assam',
  products: [
    { id: 1, name: 'Tomatoes', stock: 100, price: 22 },
    { id: 2, name: 'Green Chilies', stock: 75, price: 45 },
    { id: 3, name: 'Onions', stock: 120, price: 28 },
  ]
};

export default function SellerDashboard() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Welcome, {sellerData.name}</h2>
      <p className="mb-4 text-gray-600">Location: {sellerData.location}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sellerData.products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">Stock: {product.stock} kg</p>
            <p className="text-green-700 font-semibold">Price: ₹{product.price}/kg</p>
            <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
              Edit Listing
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
