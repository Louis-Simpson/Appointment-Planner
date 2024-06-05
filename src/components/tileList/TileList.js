import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  
  return (
    <div>
      {props.tiles.map((tile, index) => {
        const { name, ...rest } = tile;
        return (
          <Tile key={index} name={name} description={rest} />
        );
      })}
    </div>
  );
};
