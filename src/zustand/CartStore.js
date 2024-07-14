import { create } from "zustand";
const TAX_RATE = 0;

const useCartStore = create((set) => ({
  items: [],
  subTotal: 0,
  total: 0,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      const itemPrice = parseFloat(item.price);
      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        );
        return {
          items: updatedItems,
          subTotal: state.subTotal + itemPrice,
          total: state.total + itemPrice * (1 + TAX_RATE),
        };
      }
      const newItems = [...state.items, { ...item, count: 0 }];
      const newSubTotal = state.subTotal + itemPrice;
      const newTotal = newSubTotal * (1 + TAX_RATE);
      return {
        items: newItems,
        subTotal: newSubTotal,
        total: newTotal,
      };
    }),
  removeItem: (id) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.id === id);
      if (!itemToRemove) return state;
      const itemPrice = parseFloat(itemToRemove.price);
      const updatedItems = state.items.filter((item) => item.id !== id);
      const newSubTotal = state.subTotal - itemPrice * itemToRemove.count;
      const newTotal = newSubTotal * (1 + TAX_RATE);
      return {
        items: updatedItems,
        subTotal: newSubTotal,
        total: newTotal,
      };
    }),
  updateItem: (id, count) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, count } : item
      );
      const subTotal = updatedItems.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.count,
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
  calculateTotals: () =>
    set((state) => {
      const subTotal = state.items.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.count,
        0
      );
      const total = subTotal * (1 + TAX_RATE);
      return {
        subTotal,
        total,
      };
    }),
}));
export default useCartStore;
