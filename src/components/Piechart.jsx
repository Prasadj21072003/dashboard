import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Piechart = ({ data }) => {
  return (
    <div className="w-full h-[90%]  flex items-center justify-center ">
      <PieChart height={200} width={200} className="z-[10] h-[31.25rem]">
        <Pie
          data={data?.products}
          dataKey="stock"
          nameKey="title"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="orange"
        />

        <Tooltip contentStyle={{ background: "white" }} />
      </PieChart>
    </div>
  );
};

export default Piechart;
