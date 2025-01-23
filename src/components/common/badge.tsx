import { cn } from "@/lib/utils";
import React from "react";

export default function Badge({ label }: Readonly<{ label: string }>) {
  // Map label to specific styles
  const labelStyles: Record<string, string> = {
    work: "bg-orange-normal text-white",
    certificate: "bg-blue-500 text-white",
  };

  return (
    <div className="flex flex-wrap gap-2">
      <div
        key={label}
        className={cn(
          "text-sm font-light inline-block px-2 rounded-full",
          labelStyles[label] || "bg-gray-300 text-black" // Default style
        )}
      >
        {label}
      </div>
    </div>
  );
}
