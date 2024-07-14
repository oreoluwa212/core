import { useState } from "react";
import useCartStore from "../../zustand/CartStore";

function QuantityControl({ itemQuantity, itemId, state, setState }) {
  const { updateItem } = useCartStore();

  const handleIncrement = () => {
    setState((prevCount) => {
      const newCount = prevCount + 1;
      updateItem(itemId, newCount);
      return newCount;
    });
  };
  const handleDecrement = () => {
    setState((prevCount) => {
      const newCount = Math.max(prevCount - 1, 1);
      updateItem(itemId, newCount);
      return newCount;
    });
  };
  return (
    <div className="flex items-center">
      <button onClick={handleDecrement} className="px-2">
        -
      </button>
      <span className="px-4">{itemQuantity}</span>
      <button
        onClick={handleIncrement}
        className="px-2"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
