import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary font-montserrat">
          EcoCycle
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/shop" className="font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link to="/rentals" className="font-medium hover:text-primary transition-colors">
            Rentals
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-gray-700 hover:text-primary transition-colors" />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="container py-4 flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/shop" className="font-medium hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/rentals" className="font-medium hover:text-primary transition-colors">
                Rentals
              </Link>
              <Link to="/about" className="font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/cart" className="font-medium hover:text-primary transition-colors flex items-center">
                <ShoppingCart className="mr-2" size={18} /> Cart ({getTotalItems()})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
