import { WorkCardProps } from "@/libs/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkCard({
  title,
  imgPath,
  startDate,
  endDate,
  imgAlign = "top",
  path
}: Readonly<WorkCardProps>) {
  return (
    <Link
      href={"/work-detail"+path}
      className="bg-gradient-to-br from-[#13161D] to-[#494D50] relative rounded-[10px] 
      overflow-hidden shadow-md shadow-white/10 hover:scale-105 transition-all duration-150"
    >
      <div className="absolute bg-[#212429]/50 top-2 right-2 px-2 rounded-full text-sm font-light">
        {endDate ? (
          <>
            {startDate} - {endDate}
          </>
        ) : (
          <>{startDate}</>
        )}
      </div>
      <div style={{ aspectRatio: "16/9" }} className="bg-white">
        <Image
          className={`w-full h-full object-cover object-${imgAlign}`}
          src={imgPath}
          width={400}
          height={300}
          alt="work-picture"
        />
      </div>
      <div className="flex flex-col gap-1 px-4 py-3">
        <p className="line-clamp-2">{title}</p>
        {/* <p className="text-right text-sm underline">See More</p> */}
      </div>
    </Link>
  );
}
