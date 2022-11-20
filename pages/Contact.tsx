import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";
import HeaderItem from "../components/HeaderItem";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <a className="sticky-bottom" href="./">
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </a>
      <form action="mailto:foquss@web.de" className="flex flex-col">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
      <div>
        <SocialIcon url="https://twitter.com/Foquss2" className="bg-white" />
        <SocialIcon url="https://github.com/Giorgiod91" className="bg-white" />
      </div>
    </div>
  );
}

export default Contact;
