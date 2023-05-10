import React from "react";
import { useState } from "react";
import '../Footer/footer.css';

import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import twitter from "./icons/twitter.png";

export default function Footer() {
  const [animation1, setAnimation1] = useState("");
  const [animation2, setAnimation2] = useState("");
  const [animation3, setAnimation3] = useState("");

  return (
    <footer>
      <div className="icons">
        <a
          className={animation1}
          onMouseEnter={() =>
            setAnimation1(
              "animate__animated animate__headShake animate__repeat-1"
            )
          }
          onMouseLeave={() => setAnimation1("")}
          target="_blank"
          href="*"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook logo" />
        </a>
        <a
          className={animation2}
          onMouseEnter={() =>
            setAnimation2(
              "animate__animated animate__headShake animate__repeat-1"
            )
          }
          onMouseLeave={() => setAnimation2("")}
          target="_blank"
          href="*"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram logo" />
        </a>
        <a
          className={animation3}
          onMouseEnter={() =>
            setAnimation3(
              "animate__animated animate__headShake animate__repeat-1"
            )
          }
          onMouseLeave={() => setAnimation3("")}
          target="_blank"
          href="*"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter logo" />
        </a>
      </div>
      <div className="tech-used">
        <p>This project was created by Group 1 with:</p>
        <div className="icons">
          <a
            className={animation1}
            onMouseEnter={() =>
              setAnimation1(
                "animate__animated animate__headShake animate__repeat-1"
              )
            }
            onMouseLeave={() => setAnimation1("")}
            target="_blank"
            href="*"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook logo" />
          </a>
          <a
            className={animation2}
            onMouseEnter={() =>
              setAnimation2(
                "animate__animated animate__headShake animate__repeat-1"
              )
            }
            onMouseLeave={() => setAnimation2("")}
            target="_blank"
            href="*"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram logo" />
          </a>
          <a
            className={animation3}
            onMouseEnter={() =>
              setAnimation3(
                "animate__animated animate__headShake animate__repeat-1"
              )
            }
            onMouseLeave={() => setAnimation3("")}
            target="_blank"
            href="*"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
