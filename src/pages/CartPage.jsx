import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";
import useCartStore from "../zustand/CartStore";
import QuantityControl from "../components/buttons/QuantityControl";
import { extractPrice } from "../utility";

const CartPage = () => {
  const [price, setPrice] = useState();
  const [count, setCount] = useState(1);
  const { removeItemFromCart, clearCart } = useContext(CartContext);
  const { items: cartItems } = useCartStore();

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] lgss:mt-16 w-full flex flex-col justify-between gap-16 lg:px-[5%]">
        <div className="overflow-x-auto mt-14 pt-5">
          {cartItems.length > 0 ? (
            <table className="min-w-full hidden md:table">
              <thead>
                <tr>
                  <th className="px-[8%] border-b border-black py-3 text-left">
                    Artwork
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Price
                  </th>
                  <th className="px-8 py-3 border-b border-black text-left">
                    Quantity
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const unitPrice = extractPrice(item.price);
                  return (
                    <tr key={index}>
                      <td className="py-6 flex items-start">
                        <img
                          src={item.img}
                          alt={item.medium}
                          className="w-24 h-24 object-cover mr-4"
                        />
                        <div>
                          <p className="text-lg font-medium">{item.medium}</p>
                          <p className="text-sm text-gray-500">{item.size}</p>
                          <p className="text-sm text-gray-500">
                            Available: {item.quantity}
                          </p>
                          <button
                            onClick={() => removeItemFromCart(index)}
                            className="text-red-500 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                      <td className="px-6 text-left">{item.price}</td>
                      <td className="px-6 text-left">
                        <QuantityControl
                          state={count}
                          setState={setCount}
                          itemQuantity={item.count}
                          itemId={item.id}
                        />
                      </td>
                      <td className="px-6 text-left">
                        {item.count * unitPrice}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="min-w-full hidden md:table">
              <thead>
                <tr>
                  <th className="px-[8%] w-[40%] border-b border-black py-3 text-left">
                    Artwork
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Price
                  </th>
                  <th className="px-8 py-3 border-b border-black text-left">
                    Quantity
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No items in cart.{" "}
                    <Link to="/galleries/products" className="text-blue-500">
                      Proceed to shop
                    </Link>
                  </td>
                </tr>
              </tbody>
            </div>
          )}

          <div className="md:hidden">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                const unitPrice = extractPrice(item.price);
                return (
                  <div
                    className="flex flex-col border-b border-black py-6 px-5"
                    key={index}
                  >
                    <div className="flex items-start mb-4">
                      <img
                        src={item.img}
                        alt={item.medium}
                        className="w-24 h-24 object-cover mr-4"
                      />
                      <div>
                        <div>
                          <p className="text-lg font-medium">{item.medium}</p>
                          <p className="text-sm text-gray-500">{item.size}</p>
                          <p className="text-sm text-gray-500">
                            Available: {item.quantity}
                          </p>
                          <button
                            onClick={() => removeItemFromCart(index)}
                            className="text-red-500 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Price:</span>
                      <span>{item.price}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Quantity:</span>
                      <td className="px-6 text-left">
                        <QuantityControl
                          state={count}
                          setState={setCount}
                          itemQuantity={item.count}
                          itemId={item.id}
                        />
                      </td>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Total:</span>
                      <span>{item.count * unitPrice}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col border-b border-black py-6 px-5">
                <p className="text-center">
                  No items in cart.
                  <Link to="/galleries/products" className="text-blue-500">
                    Proceed to shop
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end px-5 md:px-0">
          <Link
            to="/checkout"
            className="flex items-center rounded-full justify-center border-2 border-black py-4 px-5 md:w-[25%] bg-black text-white mt-4 w-full"
          >
            <span>Proceed to Checkout</span>
          </Link>
          <button
            onClick={clearCart}
            className="flex items-center justify-center border-2 border-red-500 py-4 px-5 bg-red-500 rounded-full text-white mt-4 w-full md:w-[25%]"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
