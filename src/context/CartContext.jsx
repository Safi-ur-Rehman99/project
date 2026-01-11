import React, { createContext, useContext, useReducer, useMemo } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const quantityToAdd = action.payload.quantity || 1;
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + (action.payload.price * quantityToAdd),
          itemCount: state.itemCount + quantityToAdd,
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: quantityToAdd }],
        total: state.total + (action.payload.price * quantityToAdd),
        itemCount: state.itemCount + quantityToAdd,
      };
    }
    
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity),
        itemCount: state.itemCount - itemToRemove.quantity,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (!item || quantity < 0) return state;
      
      if (quantity === 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const quantityDiff = quantity - item.quantity;
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
        total: state.total + (item.price * quantityDiff),
        itemCount: state.itemCount + quantityDiff,
      };
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};