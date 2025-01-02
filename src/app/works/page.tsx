import React from "react";
import WorkCard from "../../components/common/WorkCard";
import { workArr } from "@/data/WorkArr";

export default function WorkPage() {
  return (
    <div className="px-8 md:px-20 lg:px-40 py-[25px]">
      <p className="text-[32px] font-medium">My Works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 mt-[25px]">
        {workArr.map(({ title, imgPath, startDate, endDate, imgAlign, path }, index) => (
          <WorkCard
            key={index}
            title={title}
            imgPath={imgPath}
            startDate={startDate}
            endDate={endDate}
            imgAlign={imgAlign}
            path={path}
          />
        ))}
      </div>
    </div>
  );
}
