import React, { useRef, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import HtmlLogo from "./assets/htmllogo.png";
import CssLogo from "./assets/csslogo.png";
import JsLogo from "./assets/jslogo.png";
import ReactLogo from "./assets/reactjslogo.png";
import NextJsLogo from "./assets/nextjslogo.png";
import GitLogo from "./assets/gitlogo.png";
import FirebaseLogo from "./assets/firebaselogo.png";
import gsap from "gsap";
import { TimelineLite } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import data from "./projectData";

function App() {
  // assigning ref values to reference them in animations
  let container = useRef(null);
  let textHeader = useRef(null);
  let textHeader2 = useRef(null);
  let aboutMe = useRef(null);
  let div1 = useRef(null);
  let div2 = useRef(null);
  let div3 = useRef(null);
  let div4 = useRef(null);

  let tl = new TimelineLite();

  // Scroll Trigger gsap animation for horizontal scrolling
  useEffect(() => {
    tl.from(textHeader, 1.2, { y: -1000, ease: "Power3.easeOut" })
      .from(textHeader2, 0.9, { y: 1000, ease: "Power3.easeOut" })
      .from(aboutMe, 1.2, { x: -1000, ease: "Power3.easeOut" });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      "(min-width: 1000px)": function () {
        gsap.to(container, {
          x: () =>
            -(container.scrollWidth - document.documentElement.clientWidth) +
            "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => "+=" + container.offsetWidth,
          },
        });
      },
    });
  }, []);

  // Animations for projects
  function mouseOver(el) {
    gsap.to(el, {
      scale: 1.03,
      duration: 0.5,
      ease: "power3",
    });
  }

  function mouseOut(el) {
    gsap.to(el, {
      scale: 1,
      duration: 0.5,
      ease: "power3",
    });
  }

  return (
    <>
      <div ref={(el) => (container = el)} className="app">
        <Header />
        <section className="app__sec1">
          <div className="app__sec1info">
            <h1 ref={(el) => (textHeader = el)}>Jeremy Watkins</h1>
            <h2 ref={(el) => (textHeader2 = el)}>Front End Developer</h2>
          </div>
          <div>
            <span>projects &#8594;</span>
          </div>
          <div className="app__about">
            <div ref={(el) => (aboutMe = el)} className="app__aboutMe">
              <p>
                <span className="purple">const </span>
                <span className="blue">aboutMe</span>
                <span className="purple"> =</span>
                <span className="gold"> &#123;</span> <br /> Age:
                <span className="orange">19,</span>
                <br /> Location: <span className="green">'Tampa, FL', </span>
                <br />
                Interests:
                <span className="green">
                  'Web Development, Basketball, Video Games, Anime, Design',
                </span>
                <br />
                Description:
                <span className="green">
                  'Front End Developer with a lot of passion for bringing
                  websites to life. I started Web Development 9th grade year in
                  my first Web Design class and I fell in love. I would like to
                  learn more about UI/UX!'
                </span>
                <br />
                <span className="gold">&#125;</span>
              </p>
              <div className="app__skills1">
                <img src={HtmlLogo} alt="html logo" />
                <img src={CssLogo} alt="css logo" />
                <img src={JsLogo} alt="avascript logo" />
                <img src={ReactLogo} alt="react logo" />
                <img src={NextJsLogo} alt="nextjs logo" />
                <img src={GitLogo} alt="git logo" />
                <img src={FirebaseLogo} alt="firebase logo" />
              </div>
            </div>
            <div className="app__aboutMeTag">
              <span>&#8592; about me </span>
            </div>
          </div>
        </section>

        <section className="app__sec3">
          <h2>Projects</h2>
          <div className="app__projects">
            {data.map((data) => (
              <div>
                <h3>{data.name}</h3>
                <a rel="noopener noreferrer" target="_blank" href={data.link}>
                  <div
                    ref={(el) => (data.ref = el)}
                    onMouseEnter={() => mouseOver(data.ref)}
                    onMouseOut={() => mouseOut(data.ref)}
                    style={{
                      backgroundImage: data.image,
                    }}
                  ></div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
