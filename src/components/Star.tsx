import React, { FC, SyntheticEvent } from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected: boolean;
  onSelect: (e: SyntheticEvent) => void;
}
const Star: FC<StarProps> = ({ selected = false, onSelect }) => {
  return (
    <FaStar
      color={selected ? "whitesmoke" : "darkslategrey"}
      onClick={onSelect}
    />
  );
};

export default Star;
