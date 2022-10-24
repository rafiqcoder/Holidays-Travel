import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="nav">
      <h1 className="sm:text-8xl sm:mb-20">BUILD YOUR NEXT VERSION</h1>
      <h3 className="span loader sm:mb-16">
        <span className="m">B</span>
        <span className="m">E</span>
        <span className="m">N</span>
        <span className="m">E</span>
        <span className="m">F</span>
        <span className="m">I</span>
        <span className="m">T</span>
        <span className="m">S</span>
        <span className="m">&nbsp;</span>
        <span className="m">o</span>
        <span className="m">f</span>
        <span className="m">&nbsp;</span>
        <span className="m">T</span>
        <span className="m">E</span>
        <span className="m">C</span>
        <span className="m">H</span>
        <span className="m">N</span>
        <span className="m">O</span>
        <span className="m">L</span>
        <span className="m">O</span>
        <span className="m">G</span>
        <span className="m">I</span>
        <span className="m">E</span>
        <span className="m">S</span>
      </h3>

      <Button>
        <Link>Start Learning</Link>
      </Button>
      
       <canvas className="background"></canvas>;
     
    </section>
  );
};

export default Hero;
