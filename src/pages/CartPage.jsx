import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import useCartStore from "../zustand/CartStore";
import QuantityControl from "../components/buttons/QuantityControl";
import { extractPrice } from "../utility";
import TransparentBtn from "../components/buttons/TransparentBtn";

const CartPage = () => {
  const [count, setCount] = useState(1);
  const { items: cartItems, total, removeItem, clearCart } = useCartStore();

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-between gap-16 md:gap-8 lg:px-[5%]">
        <div className="w-full flex justify-between items-center py-8">
        <Link to={"/galleries/products"}>
          <TransparentBtn btnText={"Back to Shop"} />
        </Link>
        <button
          onClick={() => clearCart()}
          className="flex items-center justify-center border-2 border-red-500 py-3 px-5 bg-red-500 rounded-full text-white"
          >
          Clear Cart
        </button>
          </div>
        <div className="overflow-x-auto">
          {cartItems.length > 0 ? (
            <div className="">
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
                              onClick={() => removeItem(item.artist)}
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
                            itemId={item.artist}
                          />
                        </td>
                        <td className="px-6 text-left font-semibold">
                          {item.count * unitPrice}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="w-full flex justify-end">
                <div className="w-[37%] flex justify-start py-3 border-y-2  items-start font-semibold text-2xl">
                  <h1 className="w-[60%]">Total</h1>
                  <p className="font-extrabold">{total}</p>
                </div>
              </div>
            </div>
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
                  <div className="w-full px-5">
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
                              onClick={() => removeItem(item.artist)}
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
                            itemId={item.artist}
                          />
                        </td>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Total:</span>
                        <span>{item.count * unitPrice}</span>
                      </div>
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
        </div>
      </div>
    </div>
  );
};

export default CartPage;
