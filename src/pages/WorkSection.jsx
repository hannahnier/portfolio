import WorkItem from "../components/WorkItem";
import style from "../styles/work.module.css";

import gemischtegefuehleScreenshot from "../assets/work/screenshot_gemischtegefuehle.png";
import laundromatScreenshot from "../assets/work/laundromat_screenshot.png";
import greenthumbScreenshot from "../assets/work/screenshot_greenthumb.png";
import turbotypingScreenshot from "../assets/work/screenshot_turbotyping.png";
import paintScreenshot from "../assets/work/screenshot_paint.png";
import leafloversScreenshot from "../assets/work/leaflovers_screeshot2.png";
import clockworkScreenshot from "../assets/work/screenshot_clockwork.png";

const items = [
  {
    url: "https://gemischtegefuehle.onrender.com/",
    name: "gemischteGefühle",
    collab: [
      {
        name: "barisbalcimusic",
        link: "https://github.com/barisbalcimusic",
        id: 1,
      },
      { name: "luisePkt", link: "https://github.com/luisePkt", id: 2 },
      {
        name: "nadjascodejourney",
        link: "https://github.com/nadjascodejourney",
        id: 3,
      },
    ],
    description:
      "A mental health application for tracking and analyzing emotional states in depth",
    tech: "React | Tailwind | Node | Express | MongoDB | React",
    imgSrc: gemischtegefuehleScreenshot,
    gitHub: "https://github.com/MindfulStudio/frontend/",
  },
  {
    url: "https://clockworkclementine.onrender.com/",
    name: "Clockwork Clementine",
    description: "A calendar app with a backend server",
    tech: "Node | Express | MongoDB | React",
    imgSrc: clockworkScreenshot,
    gitHub: "https://github.com/hannahnier/ClockworkClementine",
  },
  {
    url: "https://hb-paint.netlify.app/",
    name: "H&B Paint",
    collab: [
      {
        name: "barisbalcimusic",
        link: "https://github.com/barisbalcimusic",
        id: 1,
      },
    ],
    description:
      "An online drawing program that offers essential tools for creative work",
    tech: "JavaScript | HTML5 | SCSS ",
    imgSrc: paintScreenshot,
    gitHub: "https://github.com/hannahnier/paint",
  },
  {
    url: "https://leaflovers.onrender.com",
    name: "LeafLovers",
    collab: [{ name: "luisePkt", link: "https://github.com/luisePkt", id: 1 }],
    description: "A plant matching app, built with React",
    tech: "React | HTML5 | CSS3",
    imgSrc: leafloversScreenshot,
    gitHub: "https://github.com/hannahnier/LeafLovers",
  },
  {
    url: "https://greenthumb.onrender.com/",
    name: "Green Thumb",
    description: "A Website for planning vegetable gardens, built with React",
    tech: "React | HTML5 | CSS3",
    imgSrc: greenthumbScreenshot,
    gitHub: "https://github.com/hannahnier/green-thumb",
  },
  {
    url: "https://hannahnier.github.io/Laundromat/",
    name: "Laundromat",
    description: "A Native CSS Website for a Fictitious London Laundrette",
    tech: "HTML5 | CSS3",
    imgSrc: laundromatScreenshot,
    gitHub: "https://github.com/hannahnier/Laundromat",
  },
  {
    url: "https://github.com/hannahnier/TurboTyping",
    name: "TurboTyping",
    description: "A simple terminal game for measuring your typing speed",
    tech: "JavaScript | Node.js",
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
            tech={item.tech}
            imgSrc={item.imgSrc}
            gitHub={item.gitHub}
            collab={item.collab}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
