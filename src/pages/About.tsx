
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-6">About EcoCycle</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2020, EcoCycle was born from a simple idea: to make eco-friendly transportation accessible to everyone. 
              Our founder, an avid cyclist and environmental enthusiast, recognized the growing need for sustainable transportation 
              options in urban environments and set out to create a solution that was both practical and environmentally conscious.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At EcoCycle, our mission is to accelerate the transition to sustainable transportation by providing high-quality electric 
              bicycles at accessible prices. We believe that everyone should have the opportunity to reduce their carbon footprint 
              without compromising on convenience or style.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <p className="text-gray-700">
              We carefully select each model in our collection for its quality, durability, and eco-friendly design. Our electric bicycles 
              combine cutting-edge technology with sleek aesthetics, ensuring that you can ride in style while doing your part for the planet.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Sustainability Commitment</h2>
            <p className="text-gray-700">
              Sustainability is at the heart of everything we do. From our product selection to our packaging and delivery methods, 
              we strive to minimize our environmental impact at every stage. We're committed to continuous improvement and transparency 
              in our sustainability practices.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
