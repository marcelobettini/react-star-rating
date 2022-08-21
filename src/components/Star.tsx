import React, { FC, SyntheticEvent } from "react";
import { FaStar } from "react-icons/fa";

interface iProps {
  selected: boolean;
  onSelect: (e: SyntheticEvent) => void;
}
const Star: FC<iProps> = ({ selected = false, onSelect }) => {
  return (
    <FaStar
      color={selected ? "whitesmoke" : "darkslategrey"}
      onClick={onSelect}
    />
  );
};

export default Star;
