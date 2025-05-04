
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Cycle } from '../data/cycles';

interface CartItem {
  cycle: Cycle;
  quantity: number;
  isRental: boolean;
  rentalMonths?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (cycle: Cycle, quantity: number, isRental: boolean, rentalMonths?: number) => void;
  removeFromCart: (cycleId: number) => void;
  updateQuantity: (cycleId: number, quantity: number) => void;
  updateRentalMonths: (cycleId: number, months: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cycle: Cycle, quantity: number, isRental: boolean, rentalMonths: number = 1) => {
    setCartItems(prevItems => {
      // Check if item already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.cycle.id === cycle.id && item.isRental === isRental
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        if (isRental) {
          updatedItems[existingItemIndex].rentalMonths = rentalMonths;
        }
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { cycle, quantity, isRental, rentalMonths: isRental ? rentalMonths : undefined }];
      }
    });
  };

  const removeFromCart = (cycleId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.cycle.id !== cycleId));
  };

  const updateQuantity = (cycleId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.cycle.id === cycleId ? { ...item, quantity } : item
      )
    );
  };

  const updateRentalMonths = (cycleId: number, months: number) => {
    if (months < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.cycle.id === cycleId && item.isRental ? { ...item, rentalMonths: months } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (item.isRental) {
        return total + (item.cycle.rentPrice * (item.rentalMonths || 1) * item.quantity);
      } else {
        return total + (item.cycle.price * item.quantity);
      }
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateRentalMonths,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
