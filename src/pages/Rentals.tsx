
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cycles from '../data/cycles';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Rentals = () => {
  const availableCycles = cycles.filter(cycle => cycle.isAvailable);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddRentalToCart = (cycle: typeof cycles[0], months: number = 1) => {
    addToCart(cycle, 1, true, months);
    toast({
      title: "Added to Cart",
      description: `${cycle.name} added for ${months} month rental at ₹${cycle.rentPrice * months}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">E-Cycle Rentals</h1>
            <p className="text-xl mb-6">
              Experience the freedom of electric cycling without the commitment of buying.
              Rent an e-cycle starting at just ₹1,500 per month.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Benefits */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Rent With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 text-center bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Flexible Duration</h3>
              <p className="text-gray-600">Rent for as little as 1 month or as long as a year.</p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Free Maintenance</h3>
              <p className="text-gray-600">All maintenance and servicing included in rental price.</p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Try Before You Buy</h3>
              <p className="text-gray-600">Not sure about buying? Test different models through rental.</p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Safety Equipment</h3>
              <p className="text-gray-600">Helmet and safety gear included with every rental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Plans */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rental Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the rental duration that works best for you. The longer you rent, the more you save!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4">Monthly</h3>
              <p className="text-gray-600 mb-6">Perfect for short-term needs or trying out e-cycling.</p>
              <div className="text-3xl font-bold mb-2">₹1,500<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Month-to-month flexibility
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Free maintenance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Helmet included
                </li>
              </ul>
              <Link to="/shop" className="btn btn-primary w-full">
                Browse E-Cycles
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-secondary transform scale-105 md:scale-110">
              <div className="badge badge-orange absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</div>
              <h3 className="text-xl font-bold mb-4">Quarterly (3 Months)</h3>
              <p className="text-gray-600 mb-6">Our most popular option with great value.</p>
              <div className="text-3xl font-bold mb-2">₹4,000<span className="text-lg font-normal text-gray-500">/3 months</span></div>
              <div className="text-green-600 mb-6">Save ₹500 compared to monthly</div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  15% discount on extended rental
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Free maintenance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Helmet and safety gear included
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  One free accessory
                </li>
              </ul>
              <Link to="/shop" className="btn btn-secondary w-full">
                Browse E-Cycles
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Annual</h3>
              <p className="text-gray-600 mb-6">Best value for long-term commitments.</p>
              <div className="text-3xl font-bold mb-2">₹15,000<span className="text-lg font-normal text-gray-500">/year</span></div>
              <div className="text-green-600 mb-6">Save ₹3,000 compared to monthly</div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  25% discount on annual rental
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium maintenance package
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Full safety gear set
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Option to purchase at discounted price
                </li>
              </ul>
              <Link to="/shop" className="btn btn-primary w-full">
                Browse E-Cycles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cycles for Rent */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Available for Rent</h2>
            <Link to="/shop" className="text-primary font-medium flex items-center hover:underline">
              View All <ArrowRight className="ml-1" size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCycles.slice(0, 6).map((cycle) => (
              <div key={cycle.id} className="product-card">
                <img 
                  src={cycle.image} 
                  alt={cycle.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{cycle.name}</h3>
                  <p className="text-gray-500 capitalize mb-3">{cycle.category}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-bold">₹{cycle.rentPrice}/month</div>
                    <Link to={`/cycle/${cycle.id}`} className="text-primary text-sm hover:underline">
                      View Details
                    </Link>
                  </div>
                  
                  <button 
                    className="btn btn-secondary w-full"
                    onClick={() => handleAddRentalToCart(cycle, 1)}
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">How Renting Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-2">Choose Your E-Cycle</h3>
              <p className="text-gray-600">
                Browse our selection and pick the perfect e-cycle for your needs. 
                Each model has detailed specifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-2">Select Rental Period</h3>
              <p className="text-gray-600">
                Choose how long you'd like to rent: 1 month, 3 months, 6 months, or a full year for the best value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-2">Checkout & Enjoy</h3>
              <p className="text-gray-600">
                Complete your order, and we'll deliver the e-cycle to your doorstep with all accessories included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rentals;
