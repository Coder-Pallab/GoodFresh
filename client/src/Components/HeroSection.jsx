import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center p-6 bg-gray-100">
      <p className="text-lg mb-4">
        Bridge the gap between vendors and stall owners to buy raw materials at cheap prices with great user experience.
      </p>
      <div className="space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Browse Materials</button>
        <button className="bg-blue-900 text-white px-4 py-2 rounded">Post Requirements</button>
      </div>
    </section>
  );
}