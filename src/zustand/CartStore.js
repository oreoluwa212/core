import { create } from "zustand";
import { extractPrice } from "../utility";

const TAX_RATE = 0;

// Load the cart state from localStorage
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: [], subTotal: 0, total: 0 };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load cart state", e);
    return { items: [], subTotal: 0, total: 0 };
  }
};

// Save the cart state to localStorage
const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Could not save cart state", e);
  }
};

const useCartStore = create((set) => ({
  ...loadCartState(),

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.artist === item.artist);
      const itemPrice = extractPrice(item.price);
      let newItems, newSubTotal, newTotal;

      if (existingItem) {
        newItems = state.items.map((i) =>
          i.artist === item.artist ? { ...i, count: i.count + 1 } : i
        );
      } else {
        newItems = [...state.items, { ...item, count: 1 }];
      }

      newSubTotal = newItems.reduce(
        (sum, item) => sum + extractPrice(item.price) * item.count,
        0
      );
      newTotal = newSubTotal * (1 + TAX_RATE);

      const newState = {
        items: newItems,
        subTotal: newSubTotal,
        total: newTotal,
      };
      saveCartState(newState);
      return newState;
    }),

  removeItem: (artist) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.artist === artist);
      if (!itemToRemove) return state;
      const itemPrice = extractPrice(itemToRemove.price);
      const updatedItems = state.items.filter((item) => item.artist !== artist);
      const newSubTotal = state.subTotal - itemPrice * itemToRemove.count;
      const newTotal = newSubTotal * (1 + TAX_RATE);

      const newState = {
        items: updatedItems,
        subTotal: newSubTotal,
        total: newTotal,
      };
      saveCartState(newState);
      return newState;
    }),

  updateItem: (artist, count) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.artist === artist ? { ...item, count } : item
      );
      const subTotal = updatedItems.reduce(
        (sum, item) => sum + extractPrice(item.price) * item.count,
        0
      );
      const total = subTotal * (1 + TAX_RATE);

      const newState = { items: updatedItems, subTotal, total };
      saveCartState(newState);
      return newState;
    }),

  clearCart: () =>
    set(() => {
      const newState = { items: [], subTotal: 0, total: 0 };
      saveCartState(newState);
      return newState;
    }),
}));

export default useCartStore;
