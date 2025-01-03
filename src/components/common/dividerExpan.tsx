import React from "react";

export default function ExpandDivider() {
  return (
    <div className="w-full py-4">
      <div className="h-[2px] bg-orange-normal w-full animate-expandWidth origin-left" />
    </div>
  );
}
