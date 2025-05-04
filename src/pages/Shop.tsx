
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cycles from '../data/cycles';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

type FilterOptions = {
  category: string;
  priceRange: [number, number];
  availability: boolean | null;
};

const Shop = () => {
  const [filteredCycles, setFilteredCycles] = useState(cycles);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    priceRange: [0, 100000],
    availability: null,
  });
  
  const { addToCart } = useCart();
  
  // Apply filters
  useEffect(() => {
    let result = [...cycles];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(cycle => cycle.category === filters.category);
    }
    
    // Filter by price range
    result = result.filter(cycle => 
      cycle.price >= filters.priceRange[0] && 
      cycle.price <= filters.priceRange[1]
    );
    
    // Filter by availability
    if (filters.availability !== null) {
      result = result.filter(cycle => cycle.isAvailable === filters.availability);
    }
    
    setFilteredCycles(result);
  }, [filters]);
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({...filters, category: e.target.value});
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setFilters({...filters, priceRange: [min, max]});
  };
  
  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters({
      ...filters, 
      availability: value === 'all' ? null : value === 'true'
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shop E-Cycles</h1>
        
        {/* Filters */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={filters.category}
                onChange={handleCategoryChange}
              >
                <option value="all">All Categories</option>
                <option value="city">City</option>
                <option value="mountain">Mountain</option>
                <option value="folding">Folding</option>
                <option value="cruiser">Cruiser</option>
                <option value="sport">Sport</option>
                <option value="cargo">Cargo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePriceChange(0, 100000)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filters.priceRange[0] === 0 && filters.priceRange[1] === 100000
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => handlePriceChange(0, 40000)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filters.priceRange[0] === 0 && filters.priceRange[1] === 40000
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Under ₹40k
                </button>
                <button
                  onClick={() => handlePriceChange(40000, 60000)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filters.priceRange[0] === 40000 && filters.priceRange[1] === 60000
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  ₹40k - ₹60k
                </button>
                <button
                  onClick={() => handlePriceChange(60000, 100000)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filters.priceRange[0] === 60000 && filters.priceRange[1] === 100000
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Over ₹60k
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                value={filters.availability === null ? 'all' : filters.availability.toString()}
                onChange={handleAvailabilityChange}
              >
                <option value="all">All</option>
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCycles.length > 0 ? (
            filteredCycles.map((cycle) => (
              <div key={cycle.id} className="product-card">
                <div className="relative">
                  <img 
                    src={cycle.image} 
                    alt={cycle.name} 
                    className="w-full h-56 object-cover"
                  />
                  {!cycle.isAvailable && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <span className="text-white font-semibold px-3 py-1 rounded-md bg-red-500">
                        Out of Stock
                      </span>
                    </div>
                  )}
                  {cycle.bestseller && (
                    <span className="absolute top-2 right-2 badge badge-green">
                      Best Seller
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{cycle.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">{cycle.category}</div>
                  
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="font-bold text-xl">₹{cycle.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">or rent at ₹{cycle.rentPrice}/mo</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Link 
                      to={`/cycle/${cycle.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      View Details
                    </Link>
                    
                    <button 
                      className={`btn btn-primary btn-sm flex items-center justify-center ${
                        !cycle.isAvailable && 'opacity-50 cursor-not-allowed'
                      }`}
                      onClick={() => cycle.isAvailable && addToCart(cycle, 1, false)}
                      disabled={!cycle.isAvailable}
                    >
                      <ShoppingCart className="mr-1" size={16} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-16 text-center">
              <p className="text-xl text-gray-500">No e-cycles match your filters. Please try different options.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
