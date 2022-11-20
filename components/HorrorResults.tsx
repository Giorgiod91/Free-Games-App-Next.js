import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
// import GameThumbnail from "./GameThumbnail";
import { motion } from "framer-motion";
import clientID from "../utils/ApiStuff";


function HorrorResults() {
  const [container, setContainer] = useState([] as any[]);
  
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror",
      headers: {
        "X-RapidAPI-Key": clientID as string,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    async function fetchContainer() {
      const api_url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror";
      const response = await fetch(api_url, options);
      const data = await response.json();
      const { genre } = data;

      setContainer(data);
      console.log(data);
    }
    fetchContainer();
  }, []);
  const openInNewTab = (url:string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap justify-center ">
      {container.map((container) => {
        return (
          <div
            key={container}
            id="thumbs"
            //           initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   default: {
            //     duration: 0.3,
            //     ease: [0, 0.71, 0.2, 1.01]
            //   },
            //   scale: {
            //     type: "spring",
            //     damping: 5,
            //     stiffness: 100,
            //     restDelta: 0.001
            //   }}}

            className="cursor-pointer shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-lg
                w-500 h-400 p-20 hover:scale-110 hover:text-white hover:text-8xl  transition transition-duration: 150ms
                "
          >
            <motion.img
              className=" object-contain 
                  "
              height={300}
              width={500}
              src={container.thumbnail}
            />
            <h2 className="text-2xl text-center p-t-10">{container.title}</h2>
            <div className="flex justify-center">
              <button
                className="bg-[#ff0000] text-white p-2 rounded-lg m-2 "
                onClick={() => openInNewTab(container.game_url)}
              >
                {" "}
                Download{" "}
              </button>
            </div>
            {/* <p>{container.short_description}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default HorrorResults;
