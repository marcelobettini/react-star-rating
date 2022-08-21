import React, { FC, useState } from "react";
import Star from "./Star";
const createArray = (length: number) => [...Array(length)];
interface iProps {
  totalStars?: number;
  style?: object;
}
const StarRating: FC<iProps> = ({ totalStars = 5, style = {} }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ ...style }}>
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>

      {selectedStars < 5 ? (
        <span>
          {selectedStars} of {totalStars} stars
        </span>
      ) : (
        <span>Superb!</span>
      )}
    </div>
  );
};
export default StarRating;
