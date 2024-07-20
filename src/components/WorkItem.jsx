import style from "../styles/work.module.css";
import iconGithub from "../assets/icons/github.svg";

const WorkItem = ({ url, name, techs, imgSrc, gitHub, subtitle }) => {
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
        <p>{subtitle}</p>
        <p>{techs}</p>
        <div className={style.links}>
          <a href={gitHub} className={style.icon} target="_blank">
            <img src={iconGithub} alt="Github Icon" />
          </a>
          {name !== "TurboTyping" && (
            <a href={url} className={style.linkToSite} target="_blank">
              Visit site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
