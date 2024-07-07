import React from "react";

const HeaderText = ({ title, subtitle, description, className }) => {
  return (
    <div className={`${className}`}>
      <h1 className="pb-8 text-[26px] lgss:text-5xl font-medium">{title}</h1>
      <h2 className="text-2xl mt-4">{subtitle}</h2>
      <p className="text-sm font-extralight">{description}</p>
    </div>
  );
};

export default HeaderText;
