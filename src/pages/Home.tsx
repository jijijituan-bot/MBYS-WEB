import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Products from '../components/Products';
import Strength from '../components/Strength';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Timeline />
        <Strength />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}