import React from "react";

function Nav() {
  return (
    <div
      className="flex px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 xl:space-x-44
    overflow-x-scroll whitespace-nowrap justify-between scrollbar-hide mb-5"
    >
      <a
        href="./Pc"
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
      >
        PC
      </a>
      <a
        href="./Mmorpg"
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
      >
        MMORPG
      </a>
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
        href="./Horror"
      >
        HORROR
      </a>
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
        href="./Shooter"
      >
        SHOOTER
      </a>
      <a
        href="./NewGames"
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
      >
        NEW
      </a>
    </div>
  );
}

export default Nav;
