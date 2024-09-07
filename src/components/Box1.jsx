import React from "react";

const Box1 = ({ data, dark }) => {
  return (
    <div className=" h-[95%] pb-[20px]  overflow-y-scroll ">
      {data?.products?.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-[20px] px-[10px]  py-[10px] cursor-pointer  border-b-[1px]  ${
            dark === "black" ? "border-slate-700" : "border-gray-300"
          } hover:text-white hover:bg-indigo-900 hover:rounded-[5px]`}
        >
          <img
            src={item?.thumbnail}
            alt="product"
            className="w-[50px] h-[50px] rounded-full bg-[#60a5fa] object-contain"
          />
          <span>{item?.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Box1;
