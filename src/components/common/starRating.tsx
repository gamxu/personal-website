import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const StarRating = ({
  value,
  onChange,
}: {
  value: string | number;
  onChange: (val: number) => void;
}) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className="focus:outline-none"
          onClick={() => onChange(star)}
        >
          {star <= Number(value) ? (
            <AiFillStar className="text-yellow-400 text-3xl" />
          ) : (
            <AiOutlineStar className="text-gray-400 text-3xl" />
          )}
        </button>
      ))}
    </div>
  );
};
