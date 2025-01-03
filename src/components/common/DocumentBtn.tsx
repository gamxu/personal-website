"use client";

import React from "react";

interface DocumentBtnProps {
  label: string;
  fileName: string;
}

export default function DocumentBtn({
  label,
  fileName,
}: Readonly<DocumentBtnProps>) {
  return (
    <button
      onClick={() => window.open(`/documents/${fileName}`)}
      className="bg-orange-normal hover:bg-orange-normal/80 inline-flex justify-center items-center text-sm 
    font-medium text-white-pure py-3 px-5 rounded-[3px] self-start transition-all duration-150"
    >
      {label}
    </button>
  );
}
