import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
// import GameThumbnail from "./GameThumbnail";
import { motion } from "framer-motion";
import clientID from "../utils/ApiStuff";


function Results() {
  
  const [container, setContainer] = useState([] as any[]);
 
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": clientID as string,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    async function fetchContainer() {
      const api_url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games";
      const response = await fetch(api_url, options);
      const data = await response.json();
      const { genre } = data;

      setContainer(data);
    }
    fetchContainer();
  }, []);
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // const openYoutube = (name) => {
  //   window.open(`https://www.youtube.com/search?q=${name}`, "_blank");
  // };
  console.log(container);
  return (
    <div className="flex flex-wrap justify-center ">
      {container.map((games, help) => {
        return (
          <div
            key={help}
            id="thumbs"
            className="cursor-pointer shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-lg
                w-500 h-400 p-20 hover:scale-110 hover:text-white hover:text-8xl  transition transition-duration: 150ms
                "
          >
            <motion.img
              className=" object-contain 
                  "
              height={300}
              width={500}
              // onClick={() => openInNewTab(container.game_url)}
              src={games.thumbnail}
            />

            <h2 className="text-2xl text-center p-t-10">{games.title}</h2>
            {/* create a download button */}
            <div className="flex justify-center">
              <button
                className="bg-[#ff0000] text-white p-2 rounded-lg m-2 "
                onClick={() => openInNewTab(games.game_url)}
              >
                {" "}
                Download{" "}
              </button>
            </div>

            {/* <GlobeAmericasIcon className="h-10" /> */}
            {/* <h2 className="text-2xl text-center p-t-10">{container.genre}</h2> */}

            {/* <button
              onClick={() => openYoutube(container.title)}
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Show Gameplay
              </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default Results;
