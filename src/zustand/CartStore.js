import { create } from "zustand";
import { extractPrice } from "../utility";
const TAX_RATE = 0;

const useCartStore = create((set) => ({
  items: [],
  subTotal: 0,
  total: 0,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.artist === item.artist);
      const itemPrice = extractPrice(item.price);
      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.artist === item.artist ? { ...i, count: i.count + 1 } : i
        );
        return {
          items: updatedItems,
          subTotal: state.subTotal + itemPrice,
          total: state.total + itemPrice * (1 + TAX_RATE),
        };
      }
      const newItems = [...state.items, { ...item, count: 1 }];
      const newSubTotal = state.subTotal + itemPrice;
      const newTotal = newSubTotal * (1 + TAX_RATE);
      return {
        items: newItems,
        subTotal: newSubTotal,
        total: newTotal,
      };
    }),
  removeItem: (artist) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.artist === artist);
      if (!itemToRemove) return state;
      const itemPrice = extractPrice(itemToRemove.price);
      const updatedItems = state.items.filter((item) => item.artist !== artist);
      const newSubTotal = state.subTotal - itemPrice * itemToRemove.count;
      const newTotal = newSubTotal * (1 + TAX_RATE);
      return {
        items: updatedItems,
        subTotal: newSubTotal,
        total: newTotal,
      };
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
      return {
        items: updatedItems,
        subTotal,
        total,
      };
    }),
  clearCart: () =>
    set(() => ({
      items: [],
      subTotal: 0,
      total: 0,
    })),
}));
export default useCartStore;
