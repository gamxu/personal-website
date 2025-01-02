import { cn } from "@/lib/utils";
import React from "react";

export default function Badge({ label }: Readonly<{ label: string }>) {
  return (
    <div
      className={cn("text-sm font-light inline-block px-2 rounded-full", {
        "bg-orange-normal text-white": label === "work",
        "bg-blue-500 text-white": label === "certificate",
      })}
    >
      {label}
    </div>
  );
}
