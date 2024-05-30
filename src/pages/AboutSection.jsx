import style from "../styles/about.module.css";
import photo from "../assets/photo.jpg";

const AboutSection = () => {
  return (
    <section className={style.main} name="about" id="about">
      <h2 className="sectionTitle">About Me</h2>

      <div className={style.container}>
        <div className={style.photoBackground}>
          <img src={photo} className={style.photo} alt="A photo of me" />
        </div>

        <div className={style.textContainer}>
          <p className={style.text}>
            Before delving into the world of web development, I was a Social
            Scientist. This has provided me with the ability to break down and
            map complex issues.
          </p>
          <p className={style.text}>
            I have always been captivated by numbers, logics and code. That is
            why I am incredibly excited to pursue this passion professionally.
          </p>
          <p className={style.text}>
            With an eye for looks and a heart for efficient programming, I work
            diligently to create inspiring and innovative solutions.
          </p>
        </div>
        <h3>Tech Stack</h3>
        <div className={style.techStackContainer}>
          <h4>JavaScript</h4>
          <h4>HTML5</h4>
          <h4>CSS3</h4>
          <h4>SASS</h4>
          <h4>Tailwind</h4>
          <h4>React</h4>
          <h4>Vite</h4>
          <h4>Node.js</h4>
          <h4>Express.js</h4>
          <h4>MongoDB</h4>
          <h4>Git</h4>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
