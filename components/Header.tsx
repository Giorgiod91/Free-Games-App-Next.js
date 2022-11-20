import React, { useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";


function Header({}) {
  return (
    <header className="  w-full md:ml-30  flex items-center  m-5 justify-evenly">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <a href="./">
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </a>

          <HeaderItem title="SEARCH" Icon={MagnifyingGlassCircleIcon} />
          

        
      </div>
      
    </header>
  );
}

export default Header;
