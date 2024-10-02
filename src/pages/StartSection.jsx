import { useEffect } from "react";
import style from "../styles/start.module.css";
import { useRef } from "react";
import { useState } from "react";
import rocket from "../assets/pixelart/px_rocket.png";
import notebookLight from "../assets/pixelart/px_thinkpad3.png";
import notebookDark from "../assets/pixelart/px_thinkpad2.png";
import { useNavContext } from "../utils/NavProvider";
import { useLangContext } from "../utils/LangProvider";
import iconArrow from "../assets/icons/angles-down-solid.svg";
import { startSection } from "../utils/dictionary";

const StartSection = () => {
  const { darkmode } = useNavContext();
  const { setActiveNav } = useNavContext();
  const { language } = useLangContext();
  const textRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = startSection[language].title;

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
      <div className={style.space}> </div>
      <div className={style.notebookContainer}>
        <img
          className={style.notebook}
          style={{ opacity: "0.85" }}
          src={darkmode ? notebookDark : notebookLight}
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
            <p>{startSection[language].workRef}</p>
          </a>
        </div>
      </div>
      <div className={style.welcome}>
        <h1 className="typewriter" ref={textRef}>
          {typedText}
        </h1>
        <h3>{startSection[language].subtitle}</h3>
      </div>
      <div className={style.space}> </div>

      <a
        href="#work"
        className={style.workHint}
        onClick={() => setActiveNav("#work")}
      >
        {startSection[language].workRefButton}{" "}
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
