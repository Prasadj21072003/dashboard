import React from "react";

import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
const Smallchart = ({ data }) => {
  return (
    <div className="w-full h-[100%]  flex flex-col justify-around overflow-hidden   ">
      <span className="font-bold tracking-wider flex gap-[0.625rem] items-center text-[1rem] px-[0.625rem]">
        <span className="w-[10px] h-[10px] bg-[#ffa600] rounded-full" />{" "}
        {data?.title}
      </span>

      <div className="flex gap-[0.625rem] px-[5px] relative my-[0.625rem]  items-center">
        <span className="text-[20px] ml-[25px]">Price</span>
        <span className="text-[2rem] absolute right-[0px] tracking-[5px] ">
          ${data?.price}
        </span>
      </div>
    </div>
  );
};

export default Smallchart;
