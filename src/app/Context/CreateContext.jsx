'use client';
import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItems: () => {},
  removeItems: () => {},

});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEMS') {
    const existingIndex = state.items.findIndex(item => item.id === action.item.id);
    const updatedItems = [...state.items];

    if (existingIndex > -1) {
      const existingItem = updatedItems[existingIndex];
      updatedItems[existingIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEMS') {
    const existingIndex = state.items.findIndex(item => item.id === action.id);
    const updatedItems = [...state.items];

    if (updatedItems[existingIndex].quantity === 1) {
      updatedItems.splice(existingIndex, 1);
    } else {
      const updatedItem = updatedItems[existingIndex];
      updatedItems[existingIndex] = {
        ...updatedItem,
        quantity: updatedItem.quantity - 1
      };
    }

    return { items: updatedItems };
  }
 
  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  function addItems(item) {
    dispatch({ type: 'ADD_ITEMS', item });
  }

  function removeItems(id) {
    dispatch({ type: 'REMOVE_ITEMS', id });
  }

  const contextValue = {
    items: cartState.items,
    addItems,
    removeItems,
  
  };
 console.log(contextValue);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
