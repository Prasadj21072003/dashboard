import React from "react";

const Box8 = ({ data, dark }) => {
  return (
    <div className=" h-[99%]  flex flex-col gap-[2px] overflow-y-auto ">
      {data?.products?.slice(0, 4).map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-[20px] px-[10px] py-[10px] cursor-pointer  border-b-[1px] ${
            dark === "black" ? "border-slate-700" : "border-gray-300"
          } hover:bg-[#ffa600] hover:rounded-[10px] hover:text-white`}
        >
          <span
            className={`px-[20px] py-[10px] rounded-full   bg-[#60a5fa] 
             text-white text-[20px]`}
          >
            {item?.id}
          </span>
          <div className="flex gap-[10px]">
            <span>{item?.brand}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box8;
