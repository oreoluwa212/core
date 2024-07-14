import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Modal from "../components/modals/Modal";
import useCartStore from "../zustand/CartStore";

const ProgressIndicator = () => {
  return (
    <div className="flex justify-center items-center mt-20 py-6 space-x-6">
      <div className="flex items-center">
        <div className="w-10 h-10 border border-black text-black bg-gray-300 flex justify-center items-center rounded-full">
          1
        </div>
        <div className="h-1 bg-gray-300 w-28"></div>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 text-black flex justify-center items-center rounded-full">
          2
        </div>
        <div className="h-1 bg-gray-300 w-28"></div>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 text-black flex justify-center items-center rounded-full">
          3
        </div>
      </div>
    </div>
  );
};

const ShippingAddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State/Province is required";
    if (!formData.postalCode)
      newErrors.postalCode = "Zip/Postal code is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:border-black`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:border-black`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className={`w-full border ${errors.streetAddress ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:border-black`}
        />
        {errors.streetAddress && (
          <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">
          Country <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={`w-full border ${errors.country ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:border-black`}
        />
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">{errors.country}</p>
        )}
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
            State/Province <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full border ${errors.state ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:border-black`}
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">
          Zip/Postal Code <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className={`w-full border ${errors.postalCode ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:border-black`}
        />
        {errors.postalCode && (
          <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      >
        Next
      </button>
    </form>
  );
};

const OrderSummary = () => {
    const { items: cartItems, total } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
      <div
        className="flex w-full justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="my-2">{cartItems.length} item(s) in cart</p>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && (
        <div>
          <hr className="my-2" />
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center font-semibold text-lg justify-between my-2"
            >
              <img
                src={item.img}
                alt={item.medium}
                className="w-24 h-24 object-cover mr-4"
              />
              <p className="text-gray-500">{item.price}</p>
            </div>
          ))}
          <div className="w-full flex justify-end">
            <div className="flex justify-start items-start extrabold border-y-2 py-3 gap-8 text-2xl">
              <h1 className="">Total =</h1>
              <p className="font-semibold">{total}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const ShipmentInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm mt-4">
      <h3 className="font-semibold text-lg mb-2">Shipment Info</h3>
      <div className="flex w-full justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <p className="my-2">Product prices including shipping</p>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && (
        <div>
          <hr className="my-2" />
        </div>
      )}
    </div>
  );
};

const CheckoutPage = () => {
  const [showModal, setShowModal] = useState(false);
    const { items: clearCart } = useCartStore();
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    navigate("/");
  };

  return (
    <div className="w-full font-montserrat bg-white text-black px-[5%]">
      <Header />
      <div className="py-10 lg:px-10">
        <ProgressIndicator />
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Shipping Address</h2>
            <ShippingAddressForm onSubmit={handleFormSubmit} />
          </div>
          <div className="space-y-8">
            <OrderSummary />
            <ShipmentInfo />
          </div>
        </div>
      </div>
      <Modal showModal={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default CheckoutPage;
