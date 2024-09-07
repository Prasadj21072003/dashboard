import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Linechart = ({ data, dark }) => {
  return (
    <div className="w-full h-full  flex items-center justify-start ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={730} height={300} data={data?.products}>
          <XAxis dataKey="brand" stroke="#FFA500" />
          <YAxis ataKey="rating" stroke="#FFA500" />
          <Tooltip
            contentStyle={
              dark === "black"
                ? { background: "#1E1E20" }
                : { background: "white" }
            }
          />
          <CartesianGrid />
          <Line type="monotone" dataKey="rating" stroke="#60a5fa" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
