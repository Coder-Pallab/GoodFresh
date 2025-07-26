import React from 'react';
import NavBar from '../Components/NavBar.jsx';
import HeroSection from '../Components/HeroSection.jsx';
import ProductList from '../Components/ProductList.jsx';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProductList />
    </div>
  );
}
