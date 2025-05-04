
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cycles from '../data/cycles';
import { ArrowRight, Bike } from 'lucide-react';

const Index = () => {
  // Get featured cycles (bestsellers or first 3)
  const featuredCycles = cycles.filter(cycle => cycle.bestseller) || cycles.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ride the Future with <span className="text-primary">Eco</span>Cycle
              </h1>
              <p className="text-lg text-gray-700 max-w-lg">
                Discover our premium range of electric bicycles designed for comfort, 
                sustainability, and adventure. Buy or rent today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="btn btn-primary btn-lg">
                  Shop Now
                </Link>
                <Link to="/rentals" className="btn btn-secondary btn-lg">
                  Rent from ₹1500/month
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890" 
                alt="Electric Bicycle" 
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm text-gray-500">Starting at</p>
                <p className="text-2xl font-bold text-primary">₹5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EcoCycle?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center space-y-4 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Bike className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Eco-Friendly Transport</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint with zero-emission electric bicycles that help protect our environment.
              </p>
            </div>
            
            <div className="p-6 text-center space-y-4 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Bike className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Flexible Options</h3>
              <p className="text-gray-600">
                Choose between buying your own e-cycle or renting one monthly, depending on your needs.
              </p>
            </div>
            
            <div className="p-6 text-center space-y-4 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Bike className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-gray-600">
                Expertly crafted e-cycles with high-performance components and long-lasting batteries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured E-Cycles</h2>
            <Link to="/shop" className="text-primary font-medium flex items-center hover:underline">
              View All <ArrowRight className="ml-1" size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCycles.map((cycle) => (
              <div key={cycle.id} className="product-card">
                <div className="aspect-w-16 aspect-h-10 relative">
                  <img 
                    src={cycle.image} 
                    alt={cycle.name} 
                    className="object-cover w-full h-64"
                  />
                  {cycle.bestseller && (
                    <span className="absolute top-2 right-2 badge badge-green">
                      Best Seller
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{cycle.name}</h3>
                      <span className="text-sm text-gray-500">{cycle.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">₹{cycle.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">Rent: ₹{cycle.rentPrice}/mo</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-sm text-gray-700">Range: {cycle.range}</span>
                    <span className="text-sm text-gray-700">Max Speed: {cycle.maxSpeed}</span>
                  </div>
                  <div className="mt-4">
                    <Link 
                      to={`/cycle/${cycle.id}`} 
                      className="btn btn-primary btn-sm w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Try Before You Buy!</h2>
              <p className="text-lg mb-6">
                Rent an e-cycle for just ₹1,500 per month. Perfect for those who want to
                experience electric biking before making a purchase.
              </p>
              <Link to="/rentals" className="btn bg-white text-secondary hover:bg-gray-100 btn-lg">
                Explore Rental Options
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1593764592116-bfb2a97c642a" 
                alt="Rental E-Cycle" 
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
