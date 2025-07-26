import React from 'react';
import ProductCard from './ProductCard';
import { assets } from '../assets/assets';

const products = [
  { id: 1, name: 'Fresh Tomatoes', price: '₹25/kg', image: './src/assets/tomato_image.png' },
  { id: 2, name: 'Potatos', price: '₹50/kg', image: './src/assets/potato_image_1.png' },
  { id: 3, name: 'Onions', price: '₹30/kg', image: './src/assets/onion_image_1.png' }, 
  {
      id: 4,
      name: "Amul Milk 1L",
      price: "₹60/L",
      image: './src/assets/amul_milk_image.png',
    },

    {
        id: 5,
        name: "Paneer 200g",
        price: "₹90/200g",
        image: './src/assets/paneer_image.png',
      },
      {
        _id: 6,
        name: "Eggs 12 pcs",
        price: "₹90/12 pc",
        image: './src/assets/eggs_image.png',
      },

      {
        _id: 7,
        name: "Cheese 200g",
        price: "₹140/200 gm",
        image: './src/assets/cheese_image.png',
      }

];

export default function ProductList() {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}