import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroTitle() {
  const [text] = useTypewriter({
    words: ['OOP', 'Jaringan Komputer', 'SBD', 'DMJ', 'Cyber Security'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  return (
    <h1 style={{ margin: "50px", fontFamily: "monospace" }}>
        Mata Kuliah :
      <span style={{ fontFamily: "monospace"}}> {text}</span>
      <Cursor cursorStyle='<'/>
    </h1>
  );
}

export default HeroTitle;
