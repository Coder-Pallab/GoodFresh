import React from 'react';

const cartItems = [
  { id: 1, name: 'Fresh Tomatoes', quantity: 2, price: 25 },
  { id: 2, name: 'Green Chilies', quantity: 1, price: 50 },
];

export default function Cart() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="bg-white rounded shadow p-4 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
            </div>
            <p className="text-green-600 font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4 border-t font-bold text-lg">
          <span>Total</span>
          <span className="text-green-700">₹{total}</span>
        </div>
        <button className="w-full bg-blue-900 text-white py-2 rounded mt-4">Proceed to Checkout</button>
      </div>
    </section>
  );
}
