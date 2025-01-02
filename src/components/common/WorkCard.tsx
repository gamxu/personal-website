import { formatDateRange } from "@/lib/markdownProcess";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "./badge";
import { CardProps } from "@/lib/types";

export default function WorkCard({
  slug,
  title,
  imgPath,
  startDate,
  endDate,
  category,
}: Readonly<CardProps>) {
  return (
    <Link
      href={`/experiences/${slug}`}
      className="flex flex-col bg-gradient-to-br from-[#13161D] to-[#494D50] relative rounded-[10px] 
      overflow-hidden shadow-md shadow-white/10 hover:scale-105 transition-all duration-150"
    >
      <div className="absolute bg-[#212429]/80 top-2 right-2 px-2 rounded-full text-sm font-light z-50">
        {formatDateRange(startDate, endDate)}
      </div>
      <div
        style={{ aspectRatio: "16/9" }}
        className="relative bg-white overflow-hidden flex-shrink-0"
      >
        {/* Image with blur effect */}
        <Image
          className="absolute w-full h-full object-cover blur inset-0 z-20"
          src={"/contents/works-img/" + imgPath}
          width={400}
          height={300}
          alt="work-picture"
        />

        {/* Image on top without blur */}
        <Image
          className="absolute w-full h-full object-contain inset-0 z-30"
          src={"/contents/works-img/" + imgPath}
          width={400}
          height={300}
          alt="work-picture"
        />
      </div>

      <div className="flex flex-col flex-grow min-h-0 justify-between gap-1 px-4 py-3">
        <p className="line-clamp-2">{title}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          <Badge label={category} />
        </div>
      </div>
    </Link>
  );
}
