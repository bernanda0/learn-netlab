import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroTitle() {
  const [text] = useTypewriter({
    words: ["OBJECT ORIENTED PROGRAMMING", "COMPUTER NETWORKS", "DATABASE SYSTEM", "NETWORK DESIGN", "CYBER SECURITY"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  return (
    <h1 className="text-5xl">
      LEARN <span className="font-extrabold">{text}</span>
      <Cursor cursorStyle="<"/>
    </h1>
  );
}

export default HeroTitle;
