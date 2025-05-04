
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cycles from '../data/cycles';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CycleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const cycleId = parseInt(id || '0');
  const cycle = cycles.find(c => c.id === cycleId);
  
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<'buy' | 'rent'>('buy');
  const [rentalMonths, setRentalMonths] = useState(1);
  
  const { addToCart } = useCart();
  
  if (!cycle) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Cycle not found</h1>
          <p className="mb-8">The cycle you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn btn-primary"
          >
            Back to Shop
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleRentalMonthsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRentalMonths(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    addToCart(
      cycle, 
      quantity, 
      purchaseType === 'rent',
      purchaseType === 'rent' ? rentalMonths : undefined
    );
    
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${cycle.name} ${purchaseType === 'rent' ? `(${rentalMonths} month rental)` : ''}`,
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container py-8">
        {/* Back button */}
        <button 
          onClick={() => navigate('/shop')}
          className="flex items-center text-gray-600 hover:text-primary mb-6"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Shop
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img 
              src={cycle.image} 
              alt={cycle.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Details Section */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{cycle.name}</h1>
            <p className="text-lg font-medium text-gray-500 mb-4 capitalize">{cycle.category} E-Cycle</p>
            
            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">₹{cycle.price.toLocaleString()}</div>
              <div className="text-gray-600">or rent at ₹{cycle.rentPrice}/month</div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{cycle.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Battery</p>
                  <p className="font-medium">{cycle.battery}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Range</p>
                  <p className="font-medium">{cycle.range}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Max Speed</p>
                  <p className="font-medium">{cycle.maxSpeed}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Weight</p>
                  <p className="font-medium">{cycle.weight}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1">
                  {cycle.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Available Colors</h3>
                <div className="flex gap-2">
                  {cycle.colors.map((color, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Purchase Options */}
            {cycle.isAvailable ? (
              <div className="border-t pt-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-3">Select Purchase Type</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPurchaseType('buy')}
                      className={`flex-1 py-2 px-4 rounded-md ${
                        purchaseType === 'buy'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      Buy (₹{cycle.price.toLocaleString()})
                    </button>
                    <button
                      onClick={() => setPurchaseType('rent')}
                      className={`flex-1 py-2 px-4 rounded-md ${
                        purchaseType === 'rent'
                          ? 'bg-secondary text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      Rent (₹{cycle.rentPrice}/month)
                    </button>
                  </div>
                </div>
                
                {purchaseType === 'rent' && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rental Duration
                    </label>
                    <select
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={rentalMonths}
                      onChange={handleRentalMonthsChange}
                    >
                      <option value={1}>1 Month (₹{cycle.rentPrice})</option>
                      <option value={3}>3 Months (₹{(cycle.rentPrice * 3).toLocaleString()})</option>
                      <option value={6}>6 Months (₹{(cycle.rentPrice * 6).toLocaleString()})</option>
                      <option value={12}>12 Months (₹{(cycle.rentPrice * 12).toLocaleString()})</option>
                    </select>
                  </div>
                )}
                
                <div className="grid grid-cols-3 gap-4 items-end mb-6">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-primary w-full py-3 text-base flex items-center justify-center"
                    >
                      <ShoppingCart className="mr-2" size={20} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-t pt-6">
                <div className="bg-red-50 text-red-700 p-4 rounded-md mb-4">
                  <h3 className="font-semibold mb-1">Currently Out of Stock</h3>
                  <p>This product is currently unavailable. Please check back later.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CycleDetail;
