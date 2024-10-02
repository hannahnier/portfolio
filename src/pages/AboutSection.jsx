import style from "../styles/about.module.css";
import photo from "../assets/photo.jpg";
import Animated from "../components/Animated";
import AnimatedTurn from "../components/AnimatedTurn";
import { useLangContext } from "../utils/LangProvider";
import { aboutSection, startSection } from "../utils/dictionary";

const AboutSection = () => {
  const { language } = useLangContext();
  const techStack = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "SASS",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "npm",
    "Git",
  ];
  return (
    <section className={style.main} name="about" id="about">
      <h2 className="sectionTitle">{aboutSection[language].title}</h2>

      <div className={style.container}>
        <div className={style.photoBackground}>
          <AnimatedTurn>
            <img
              src={photo}
              className={style.photo}
              alt={aboutSection[language].photoTag}
            />
          </AnimatedTurn>
        </div>
        <div className={style.textContainer}>
          <Animated delay={0}>
            <p className={style.text}>{aboutSection[language].bubble1}</p>
          </Animated>
          <Animated delay={0.2}>
            <p className={style.text}>{aboutSection[language].bubble2}</p>
          </Animated>
          <Animated delay={0.4}>
            <p className={style.text}>{aboutSection[language].bubble3}</p>
          </Animated>
        </div>
        <h3 className={style.techTitle}>Tech Stack</h3>
        <div className={style.techStackContainer}>
          {techStack.map((skill, index) => (
            <Animated delay={`${index / 12 + 0.2}`} key={index}>
              <h4>{skill}</h4>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
