import { useEffect } from "react";
import style from "../styles/start.module.css";
import { useRef } from "react";
import { useState } from "react";
import rocket from "../assets/pixelart/px_rocket.png";
import notebook from "../assets/pixelart/px_thinkpad3.png";
import { useNavContext } from "../utils/Context";
import iconArrow from "../assets/icons/angles-down-solid.svg";

const StartSection = () => {
  const { setActiveNav } = useNavContext();
  const textRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I am Hannah";

  useEffect(() => {
    let letterCount = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (letterCount < fullText.length) {
          setTypedText(fullText.substring(0, letterCount + 1));
          letterCount++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText("");
            letterCount = 0;
            startTyping();
          }, 8000);
        }
      }, 250);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.textContent = typedText;
    }
  }, [typedText]);

  return (
    <section className={style.main} name="start" id="start">
      <div className={style.notebookContainer}>
        <img
          className={style.notebook}
          style={{ opacity: "0.85" }}
          src={notebook}
          alt="A notebook drawn in pixel art"
        />
        <img
          className={style.rocket}
          src={rocket}
          alt="A rocket drawn in pixel art"
        />
        <div className={style.notebookLink}>
          <a href="#work" onClick={() => setActiveNav("#work")}>
            &lt;&frasl;&gt;
            <p>My Projects</p>
          </a>
        </div>
      </div>
      <div className={style.welcome}>
        <h1 className="typewriter" ref={textRef}>
          {typedText}
        </h1>
        <h3>A Full-stack Web Developer based in Leipzig</h3>
      </div>

      <a
        href="#work"
        className={style.workHint}
        onClick={() => setActiveNav("#work")}
      >
        Check out my work{" "}
        <img
          src={iconArrow}
          className="icon"
          alt="Arrow Icon"
          style={{ marginLeft: "1em" }}
        />
      </a>
    </section>
  );
};

export default StartSection;
