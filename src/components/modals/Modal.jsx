import React from "react";

const Modal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[70%] md:w-[20%] py-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Order Received</h2>
        <p className="mb-6">Thank you for your order!</p>
        <button
          onClick={onClose}
          className="bg-black text-white py-4 px-8 rounded-full text-lg"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Modal;
