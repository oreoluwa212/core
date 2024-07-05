function SimpleBtn({ className, children }) {
  return (
    <button
      className={`bg-transparent text-white py-3 text-sm rounded-[24px] ${className}`}
    >
      {children}
    </button>
  );
}

export default SimpleBtn;
