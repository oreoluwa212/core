import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } = useContext(CartContext);

  const calculateTotalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

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
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-6 flex items-start">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-24 h-24 object-cover mr-4"
                      />
                      <div>
                        <p className="text-lg font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="text-sm text-gray-500">{item.description1}</p>
                        <p className="text-sm text-gray-500">Available: {item.availableQuantity}</p>
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
                      <div className="flex items-center">
                        <button onClick={() => decreaseItemQuantity(index)} className="px-2">-</button>
                        <span className="px-4">{item.quantity}</span>
                        <button onClick={() => increaseItemQuantity(index)} className="px-2" disabled={item.quantity >= item.availableQuantity}>+</button>
                      </div>
                    </td>
                    <td className="px-6 text-left">{calculateTotalPrice(item)}</td>
                  </tr>
                ))}
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
              cartItems.map((item, index) => (
                <div
                  className="flex flex-col border-b border-black py-6 px-5"
                  key={index}
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-cover mr-4"
                    />
                    <div>
                      <p className="text-lg font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-sm text-gray-500">{item.description1}</p>
                      <p className="text-sm text-gray-500">Available: {item.availableQuantity}</p>
                      <button
                        onClick={() => removeItemFromCart(index)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Price:</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center">
                      <button onClick={() => decreaseItemQuantity(index)} className="px-2">-</button>
                      <span className="px-4">{item.quantity}</span>
                      <button onClick={() => increaseItemQuantity(index)} className="px-2" disabled={item.quantity >= item.availableQuantity}>+</button>
                    </div>
                  </div>
                  <div className="hidden lgss:flex justify-between">
                    <span className="font-medium">Total:</span>
                    <span>{calculateTotalPrice(item)}</span>
                  </div>
                </div>
              ))
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border-2 border-black py-4 px-5 bg-gray-200">
              <input
                type="text"
                placeholder="Discount Code"
                className="bg-gray-200 w-full"
              />
              <button className="ml-4 font-medium">Apply</button>
            </div>
            <Link
              to="/galleries/products"
              className="flex items-center border-2 border-black py-4 px-5"
            >
              <span>Update Cart</span>
            </Link>
          </div>
          <Link
            to="/checkout"
            className="flex items-center justify-center border-2 border-black py-4 px-5 bg-black text-white mt-4 w-full md:w-auto"
          >
            <span>Proceed to Checkout</span>
          </Link>
          <button
            onClick={clearCart}
            className="flex items-center justify-center border-2 border-red-500 py-4 px-5 bg-red-500 text-white mt-4 w-full md:w-auto"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
