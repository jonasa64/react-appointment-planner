import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    items && (
      <div>
        {items.map((item, i) => (
          <Tile item={item} key={i} />
        ))}
      </div>
    )
  );
};
