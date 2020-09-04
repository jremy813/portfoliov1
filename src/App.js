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

        <div className="app__aboutMe">
          <p>
            const aboutMe = &#123; <br /> Age: 19, <br /> Location: 'Tampa, FL'
            <br />
            Interests: 'Web Development, Basketball, Video Games, Anime, Design'
            Description: 'Front End Developer with a lot of passion for bringing
            websites to life. I started Web Development 9th grade year in my
            first Web Design class and I fell in love. I would like to learn
            more about UI/UX!' <br />
            &#125;
          </p>
        </div>
      </section>
      <section className="app__sec2">
        <h2>Skills</h2>
      </section>
    </div>
  );
}

export default App;
