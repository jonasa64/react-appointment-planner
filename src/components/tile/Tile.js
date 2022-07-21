import React from "react";

export const Tile = ({ item }) => {
  return (
    item && (
      <div className="tile-container">
        <p className="tile-title">{item.name ? item.name : item.title}</p>
        <p className="tile">{item.email ? item.email : item.date}</p>
        <p className="tile">{item.phone ? item.phone : item.time}</p>
        <p className="tile">{item.contact ? item.contact : ""}</p>
      </div>
    )
  );
};
