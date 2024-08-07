import WorkItem from "../components/WorkItem";
import style from "../styles/work.module.css";

import laundromatScreenshot from "../assets/work/laundromat_screenshot.png";
import greenthumbScreenshot from "../assets/work/screenshot_greenthumb.png";
import turbotypingScreenshot from "../assets/work/screenshot_turbotyping.png";
import paintScreenshot from "../assets/work/screenshot_paint.png";
import leafloversScreenshot from "../assets/work/leaflovers_screeshot2.png";
import clockworkScreenshot from "../assets/work/screenshot_clockwork.png";

const items = [
  {
    url: "https://clockworkclementine.onrender.com/",
    name: "Clockwork Clementine",
    description: "A calendar app with a backend server",
    techs: "Node | Express | MongoDB | React",
    imgSrc: clockworkScreenshot,
    gitHub: "https://github.com/hannahnier/ClockworkClementine",
  },
  {
    url: "https://hb-paint.netlify.app/",
    name: "H&B Paint",
    subtitle: "Collaborative work with",
    subtitleLinked: "@barisbalcimusic",
    subtitleLink: "https://github.com/barisbalcimusic",
    description:
      "An online drawing program that offers essential tools for creative work",
    techs: "JavaScript | HTML5 | SCSS ",
    imgSrc: paintScreenshot,
    gitHub: "https://github.com/hannahnier/paint",
  },
  {
    url: "https://leaflovers.onrender.com",
    name: "LeafLovers",
    subtitle: "Collaborative work with",
    subtitleLinked: "@luisePkt",
    subtitleLink: "https://github.com/luisePkt",
    description: "A plant matching app, built with React",
    techs: "React | HTML5 | CSS3",
    imgSrc: leafloversScreenshot,
    gitHub: "https://github.com/hannahnier/LeafLovers",
  },
  {
    url: "https://greenthumb.onrender.com/",
    name: "Green Thumb",
    description: "A Website for planning vegetable gardens, built with React",
    techs: "React | HTML5 | CSS3",
    imgSrc: greenthumbScreenshot,
    gitHub: "https://github.com/hannahnier/green-thumb",
  },
  {
    url: "https://hannahnier.github.io/Laundromat/",
    name: "Laundromat",
    description: "A Native CSS Website for a Fictitious London Laundrette",
    techs: "HTML5 | CSS3",
    imgSrc: laundromatScreenshot,
    gitHub: "https://github.com/hannahnier/Laundromat",
  },
  {
    url: "https://github.com/hannahnier/TurboTyping",
    name: "TurboTyping",
    description: "A simple terminal game for measuring your typing speed",
    techs: "JavaScript | Node.js",
    imgSrc: turbotypingScreenshot,
    gitHub: "https://github.com/hannahnier/TurboTyping",
  },
];

const WorkSection = () => {
  return (
    <section className={style.main} name="work" id="work">
      <h2 className="sectionTitle">Work</h2>
      <div className={style.container}>
        {items.map((item, index) => (
          <WorkItem
            key={index}
            url={item.url}
            name={item.name}
            description={item.description}
            techs={item.techs}
            imgSrc={item.imgSrc}
            gitHub={item.gitHub}
            subtitle={item.subtitle}
            subtitleLinked={item.subtitleLinked}
            subtitleLink={item.subtitleLink}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
