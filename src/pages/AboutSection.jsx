import style from "../styles/about.module.css";
import photo from "../assets/photo.jpg";
import Animated from "../components/Animated";
import AnimatedTurn from "../components/AnimatedTurn";

const AboutSection = () => {
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
    "Git",
  ];
  return (
    <section className={style.main} name="about" id="about">
      <h2 className="sectionTitle">About Me</h2>

      <div className={style.container}>
        <div className={style.photoBackground}>
          <AnimatedTurn>
            <img src={photo} className={style.photo} alt="A photo of me" />
          </AnimatedTurn>
        </div>
        <div className={style.textContainer}>
          <Animated delay={0}>
            <p className={style.text}>
              Before delving into the world of web development, I was a Social
              Scientist. This has provided me with the ability to break down and
              map complex issues.
            </p>
          </Animated>
          <Animated delay={0.2}>
            <p className={style.text}>
              I have always been captivated by numbers, logics and code. That is
              why I am excited to pursue this passion professionally now.
            </p>
          </Animated>
          <Animated delay={0.4}>
            <p className={style.text}>
              Whether frontend or backend - I work diligently to create
              inspiring and innovative solutions.
            </p>
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
