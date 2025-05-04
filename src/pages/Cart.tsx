import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { Trash2, ArrowLeft, ShoppingCart, Home } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, updateRentalMonths, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <span className="ml-4 bg-gray-100 px-3 py-1 rounded-full text-gray-800">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.cycle.id}-${item.isRental ? 'rental' : 'purchase'}`} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-32 h-32 mb-4 sm:mb-0 sm:mr-4">
                    <img
                      src={item.cycle.image}
                      alt={item.cycle.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.cycle.name}</h3>
                        <p className="text-gray-500 capitalize text-sm mb-2">{item.cycle.category} E-Cycle</p>
                        <div className="mb-2">
                          {item.isRental ? (
                            <span className="badge badge-orange">Rental</span>
                          ) : (
                            <span className="badge badge-green">Purchase</span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cycle.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-3 justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <label htmlFor={`quantity-${item.cycle.id}`} className="text-sm font-medium">
                          Quantity:
                        </label>
                        <select
                          id={`quantity-${item.cycle.id}`}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.cycle.id, parseInt(e.target.value))}
                          className="border rounded-md p-1 text-sm"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      {item.isRental && (
                        <div className="flex items-center space-x-2">
                          <label htmlFor={`months-${item.cycle.id}`} className="text-sm font-medium">
                            Duration:
                          </label>
                          <select
                            id={`months-${item.cycle.id}`}
                            value={item.rentalMonths}
                            onChange={(e) => updateRentalMonths(item.cycle.id, parseInt(e.target.value))}
                            className="border rounded-md p-1 text-sm"
                          >
                            <option value={1}>1 Month</option>
                            <option value={3}>3 Months</option>
                            <option value={6}>6 Months</option>
                            <option value={12}>12 Months</option>
                          </select>
                        </div>
                      )}

                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {item.isRental
                            ? formatPrice(item.cycle.rentPrice * (item.rentalMonths || 1) * item.quantity)
                            : formatPrice(item.cycle.price * item.quantity)}
                        </div>
                        {item.isRental && (
                          <div className="text-sm text-gray-600">
                            {item.rentalMonths} {item.rentalMonths === 1 ? 'month' : 'months'} @ {formatPrice(item.cycle.rentPrice)}/mo
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <Link to="/shop" className="text-primary hover:underline flex items-center">
                  <ArrowLeft size={16} className="mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <div key={`summary-${item.cycle.id}-${item.isRental ? 'rental' : 'purchase'}`} className="flex justify-between text-sm">
                      <span>
                        {item.cycle.name} x {item.quantity} {item.isRental ? `(${item.rentalMonths} month rental)` : ''}
                      </span>
                      <span className="font-medium">
                        {item.isRental
                          ? formatPrice(item.cycle.rentPrice * (item.rentalMonths || 1) * item.quantity)
                          : formatPrice(item.cycle.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-medium">₹0</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>

                <button
                  className="btn btn-primary w-full mt-6"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  Secure payment powered by Razorpay
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any e-cycles to your cart yet.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="btn btn-primary px-6 py-3">
                Browse Shop
              </Link>
              <Link to="/" className="btn btn-secondary px-6 py-3 flex items-center justify-center">
                <Home size={18} className="mr-2" />
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
