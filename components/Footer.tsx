import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div
      className="sticky bottom-0 flex  text-white justify-between  px-10 sm:px-20   text-2xl space-x-10 sm:space-x-20 xl:space-x-44
  overflow-x-scroll whitespace-nowrap"
    >
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
        href="./"
      >
        Back to the Top
      </a>
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
        href="./About"
      >
        About
      </a>
      <a
        className="last:pr-24 pr-l-24 
                cursor-pointer transition duration-100  
                transform hover:scale-125 hover:text-white active:text-red-500"
        href="./Contact"
      >
        Contact
      </a>
    </div>
  );
}

export default Footer;
