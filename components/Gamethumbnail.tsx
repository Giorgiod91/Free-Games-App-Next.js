import Image from "next/image";
import React from "react";

function GameThumbnail() {
  return (
    <div
      className="
    w-500 h-400 p-20  hover:scale-110 transition  transition-duration: 150ms
    "
    >
      {/* object-fit-contain keeps img quality while resizing */}
      <img
        className="
         object-contain 
        "
        alt=""
        height={300}
        width={500}
      />
     
      <p>short description</p>
      <h2 className="p-t-10"></h2>
      
    </div>
  );
}

export default GameThumbnail;
