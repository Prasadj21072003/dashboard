"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Box1 from "./Box1";
import Smallchart from "./Smallchart";
import Linechart from "./Linechart";
import Piechart from "./Piechart";
import Box8 from "./Box8";
import StarIcon from "@mui/icons-material/Star";
import InventoryIcon from "@mui/icons-material/Inventory";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";

const Charts = ({ skipno, dark }) => {
  const [products, setproducts] = useState([]);
  const [listproducts, setlistproducts] = useState([]);

  const getproducts = async () => {
    console.log(skipno);
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${skipno}`
      );

      setproducts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getlistproducts = async () => {
    console.log(skipno);
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=6&skip=${skipno}`
      );

      setlistproducts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
    getlistproducts();
  }, [skipno]);

  return (
    <div className=" max-xl:h-[83%] max-2xl:h-[78%] max-md:h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 auto-rows-[minmax(180px,auto)] gap-[20px] ">
      <div
        className={`p-[20px] max-md:order-7 max-2xl:h-[800px] flex flex-col gap-[0.625rem]  row-span-4 h-[700px]  rounded-[0.625rem]   ${
          dark === "black"
            ? "bg-[#1E1E20] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-gray-700 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        } overflow-y-scroll `}
      >
        <span className="font-semibold tracking-wider">
          {" "}
          <ShoppingCartSharpIcon className="bg-[transperant] p-[2px] " /> Sold
          Products
        </span>
        {<Box1 data={products} dark={dark} />}
      </div>
      <div
        className={`p-[20px]  rounded-[0.625rem]   ${
          dark === "black"
            ? "bg-indigo-900 text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-white bg-[#ffa600] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        } flex flex-col gap-[0.625rem] `}
      >
        <span className="font-semibold tracking-wide mb-[0.625rem]">
          <EmojiEventsIcon className="bg-[transperant] p-[2px]" /> Top Sold
          Product
        </span>

        {products?.products !== undefined ? (
          <Smallchart data={products?.products[0]} />
        ) : (
          <Smallchart data={products?.products} />
        )}
      </div>
      <div
        className={`p-[20px]   rounded-[0.625rem]   ${
          dark === "black"
            ? "bg-[#ffa600] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-white bg-[#60a5fa] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        }  flex flex-col gap-[0.625rem]`}
      >
        <span className="font-semibold tracking-wider mb-[0.625rem]">
          <TrendingUpIcon className="bg-[transperant] p-[2px] " /> Trendy
          Product
        </span>
        {products?.products !== undefined ? (
          <Smallchart data={products?.products[1]} />
        ) : (
          <Smallchart data={products?.products} />
        )}
      </div>
      <div
        className={`p-[20px]  max-md:order-6 max-xl:order-8 max-2xl:order-6 max-2xl:h-[400px] row-span-2 rounded-[0.625rem]   ${
          dark === "black"
            ? "bg-[#1E1E20] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-gray-700 bg-[white] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        }`}
      >
        <span className="font-semibold tracking-wider">
          {" "}
          <InventoryIcon className="bg-[transperant] p-[2px] " /> Top Products
          Stocks
        </span>
        <Piechart data={listproducts} />
      </div>

      <div
        className={`p-[20px]  rounded-[0.625rem]   ${
          dark === "black"
            ? "bg-[#ffa600] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-white bg-[#60a5fa] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        }  flex flex-col gap-[0.625rem]`}
      >
        <span className="font-semibold tracking-wider mb-[0.625rem]">
          <TrendingUpIcon className="bg-[transperant] p-[2px] " /> Trendy
          Product
        </span>
        {products?.products !== undefined ? (
          <Smallchart data={products?.products[2]} />
        ) : (
          <Smallchart data={products?.products} />
        )}
      </div>
      <div
        className={`p-[20px]  rounded-[0.625rem]    ${
          dark === "black"
            ? "bg-[#ffa600] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-white bg-[#60a5fa] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        } flex flex-col gap-[0.625rem]`}
      >
        <span className="font-semibold tracking-wider mb-[0.625rem]">
          <TrendingUpIcon className="bg-[transperant] p-[2px] " /> Trendy
          Product
        </span>
        {products?.products !== undefined ? (
          <Smallchart data={products?.products[3]} />
        ) : (
          <Smallchart data={products?.products} />
        )}
      </div>
      <div
        className={`p-[20px]    max-2xl:order-8 max-2xl:col-span-3 max-xl:col-span-2 max-md:col-span-1 flex flex-col items-center justify-center  row-span-1 col-span-2 rounded-[0.625rem] h-[290px]   ${
          dark === "black"
            ? "bg-[#1E1E20] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-gray-700 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        }`}
      >
        <span className="font-semibold tracking-wider self-start mb-[0.625rem] ">
          {" "}
          <StarIcon className=" p-[2px] " /> Ratings
        </span>

        <Linechart data={listproducts} dark={dark} />
      </div>
      <div
        className={`p-[20px] max-2xl:order-7  max-2xl:h-[400px] flex flex-col gap-[0.625rem]  row-span-1 h-[290px] rounded-[0.625rem]   ${
          dark === "black"
            ? "bg-[#1E1E20] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-gray-700 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        } `}
      >
        <span className="font-semibold tracking-wider ">
          {" "}
          <ShoppingBagSharpIcon className="bg-[transperant] p-[2px] " /> Top
          Sold Brands With Ids
        </span>
        <Box8 data={products} dark={dark} />
      </div>
    </div>
  );
};

export default Charts;
