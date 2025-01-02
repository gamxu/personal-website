import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardProps } from "@/lib/types";
import { formatDateRange } from "@/lib/markdownProcess";

interface ResourceCardProps extends CardProps {
  description: string;
}

export default function ResourceCard({
  slug,
  title,
  imgPath,
  // category,
  startDate,
  endDate,
  description,
}: Readonly<ResourceCardProps>) {
  return (
    <Link
      href={`/resources/${slug}`}
      className="bg-gradient-to-br from-[#13161D] to-[#494D50] relative rounded-[10px] 
      overflow-hidden shadow-md shadow-white/10 hover:scale-105 transition-all duration-150"
    >
      {startDate && (
        <div className="absolute bg-[#212429]/70 top-2 right-2 px-2 rounded-full text-sm font-light z-50">
          {formatDateRange(startDate, endDate)}
        </div>
      )}
      <div
        style={{ aspectRatio: "16/9" }}
        className="relative bg-white overflow-hidden"
      >
        {/* Image with blur effect */}
        <Image
          className="absolute w-full h-full object-cover blur inset-0 z-20"
          src={"/contents/resources-img/" + imgPath}
          width={400}
          height={300}
          alt="work-picture"
        />

        {/* Image on top without blur */}
        <Image
          className="absolute w-full h-full object-contain inset-0 z-30"
          src={"/contents/resources-img/" + imgPath}
          width={400}
          height={300}
          alt="work-picture"
        />
      </div>

      <div className="flex flex-col justify-between gap-1 px-4 py-3">
        <p className="line-clamp-2">{title}</p>
        <p className="line-clamp-3 text-sm font-light">{description}</p>
      </div>
    </Link>
  );
}
