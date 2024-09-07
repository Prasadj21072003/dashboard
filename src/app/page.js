"use client";
import Charts from "@/components/Charts";
import { use, useEffect, useState } from "react";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import Brightness7SharpIcon from "@mui/icons-material/Brightness7Sharp";

export default function Home() {
  const [skipno, setskipno] = useState(0);
  const [time, settime] = useState("");
  const [dark, setdark] = useState("black");

  useEffect(() => {
    if (time === "24 hours") {
      setskipno(0);
    } else if (time === "month") {
      setskipno(5);
    } else {
      setskipno(9);
    }
  }, [time]);

  return (
    <div
      className={`w-screen   flex flex-col gap-[1.25rem] py-[0.625rem] px-[4rem] max-lg:px-[2rem] overflow-x-hidden h-screen ${
        dark === "black" ? "bg-black text-white  " : "text-black bg-[#DFEBEB] "
      }`}
    >
      <div
        className={`w-full h-fit p-[1.25rem] flex items-center justify-between bg-[#1E1E20] rounded-[10px] ${
          dark === "black"
            ? "bg-[#1E1E20] text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            : "text-[#0E0E0E] bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
        }`}
      >
        <span className="text-[1.5rem] tracking-wider font-semibold max-sm:hidden">
          Dashboard
        </span>

        <select
          name="time"
          id="time"
          className={`z-[0]  py-[0.625rem] px-[2.5rem] focus:outline-none   ${
            dark === "black"
              ? "bg-indigo-900 text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
              : "text-white bg-[#ffa600] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          }`}
          onChange={(e) => {
            e.preventDefault();
            settime(e.target.value);
          }}
        >
          <option
            selected
            value="24 hours"
            className={`z-[10]  py-[0.938rem] px-[1.25rem] ${
              dark === "black"
                ? "bg-indigo-900 text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                : "text-white bg-[#ffa600] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            }`}
          >
            24 Hours
          </option>
          <option
            value="week"
            className={`z-[10]  py-[0.938rem] px-[1.25rem] ${
              dark === "black"
                ? "bg-indigo-900 text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                : "text-white bg-[#ffa600] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            }`}
          >
            1 Week
          </option>
          <option
            value="month"
            className={`z-[10]  py-[0.938rem] px-[1.25rem] ${
              dark === "black"
                ? "bg-indigo-900 text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                : "text-white bg-[#ffa600] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            }`}
          >
            1 Month
          </option>
        </select>

        <div>
          {dark === "black" ? (
            <DarkModeSharpIcon
              className="text-indigo-400 cursor-pointer"
              onClick={() => {
                setdark("white");
              }}
            />
          ) : (
            <Brightness7SharpIcon
              className="text-[#ffa600] cursor-pointer"
              onClick={() => {
                setdark("black");
              }}
            />
          )}
        </div>
      </div>
      <div className=" w-scrren  ">
        <Charts skipno={skipno} dark={dark} />
      </div>
    </div>
  );
}
