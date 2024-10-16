import React from "react";

const Prograss = ({ value }) => {
  return (
    <div className=" flex items-center gap-3">
      <small>{value}</small>
      <progress className="progress w-[60%]" value={value} max="100"></progress>
    </div>
  );
};

export default Prograss;
