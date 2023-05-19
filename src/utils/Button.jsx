import React from "react";

const Button = ({title}) => {
  return (
    <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-400 cursor-pointer">{title}</button>
  );
};

export default Button;