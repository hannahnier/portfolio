import style from "../styles/work.module.css";
import iconGithub from "../assets/icons/github.svg";
import { workSection } from "../utils/dictionary";
import { useLangContext } from "../utils/LangProvider";

const WorkItem = ({ url, name, tech, imgSrc, gitHub, collab }) => {
  const { language } = useLangContext();
  return (
    <div className={style.workItemBox}>
      <a
        target="_blank"
        className={style.screenshot}
        href={url}
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></a>
      <div className={style.text}>
        <h3>{name}</h3>
        <p>{tech}</p>
        {collab && (
          <p>
            {workSection[language].teamRef}
            {collab.map((link) => (
              <span key={link.id} className={style.collabLinks}>
                <a
                  href={link.link}
                  target="_blank"
                  className={style.collabLinks}
                >
                  {link.name}
                </a>
                {link.id < collab.length ? ", " : ""}
              </span>
            ))}
          </p>
        )}
        <div className={style.links}>
          <a href={gitHub} className={style.icon} target="_blank">
            <img src={iconGithub} alt="Github Icon" />
          </a>
          {name !== "TurboTyping" && (
            <a href={url} className={style.linkToSite} target="_blank">
              {workSection[language].siteRef}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
