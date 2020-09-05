import React, { useRef, useEffect } from "react";
import "./App.css";
import Logo from "./assets/logo_transparent.png";
import HtmlLogo from "./assets/htmllogo.png";
import CssLogo from "./assets/csslogo.png";
import JsLogo from "./assets/jslogo.png";
import ReactLogo from "./assets/reactjslogo.png";
import NextJsLogo from "./assets/nextjslogo.png";
import GitLogo from "./assets/gitlogo.png";
import FirebaseLogo from "./assets/firebaselogo.png";
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
    <>
      <div ref={(el) => (container = el)} className="app">
        <header>
          <img src={Logo} alt="logo" />
        </header>
        <section className="app__sec1">
          <div className="app__sec1info">
            <h1>Jeremy Watkins</h1>
            <h2>Front End Developer</h2>
          </div>
          <div>
            <span>projects &#8594;</span>
          </div>
          <div className="app__about">
            <div className="app__aboutMe">
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
            <div
              style={{
                backgroundImage: `url('https://i.gyazo.com/2a9aa2c4243a305345338e20f8e829c9.png')`,
              }}
            ></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
