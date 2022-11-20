import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import HeaderItem from "../components/HeaderItem";
import { HomeIcon } from "@heroicons/react/24/solid";

type Props = {};

function About({}: Props) {
  const technologies = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      description: "The React Framework for Production",
      link: "https://nextjs.org/",
    },
    {
      name: "TypeScript",
      description:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom designs.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Framer Motion",
      description:
        "Open source, production-ready animation and gesture library for React",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "React Icons",
      description:
        "Include popular icons in your React projects easily with react-icons.",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      name: "Api",
      description: "I uses RapidApi(free-to-game) for this project.",
      link: "https://rapidapi.com/",
    },
    {
      name: "react-social-icons",
      description: "React component for displaying social media icons.",
      link: "https://www.npmjs.com/package/react-social-icons",
    },
  ];

  return (
    //section with a short description

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h1 className="absolute top-6 uppercase left-5 text-2xl tracking-[20px]">
        Tech Used
      </h1>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
      snap-x snap-mandatory scrollbar scrollbar-track-white/25
      scrollbar-thumb-[#fafafa] z-20"
      >
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-sreen flex-shrink-0  snap-center flex flex-col  space-y-5
              items-center justify-center p-20 md:p-44 h-screen "
          >
            {" "}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <a href={technology.link} target="_blank" rel="noreferrer">
                <h3 className="text-3xl text cennter font-bold">
                  {technology.name}
                </h3>
              </a>
              <p className="text.lg text-center md:text-left text-zinc-500">
                {technology.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a className="sticky-bottom" href="./">
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </a>
    </motion.div>
  );
}

export default About;
