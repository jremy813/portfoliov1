import React, { useRef, useEffect } from "react";
import "./App.css";
import Logo from "./logo_transparent.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  let container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
      },
    });
  });

  return (
    <div ref={(el) => (container = el)} className="app">
      <section className="app__sec1">
        <div className="app__sec1info">
          <h1>Jeremy Watkins</h1>
          <h2>Front End Developer</h2>
        </div>
        <div>
          <span>find out more &#8594;</span>
        </div>
      </section>
      <section className="app__sec2">
        <h2>Skills</h2>
      </section>
    </div>
  );
}

export default App;
