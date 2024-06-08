import style from "../styles/error.module.css";

const ErrorPage = () => {
  return (
    <div className={style.main}>
      <h1 className={style.title}>404</h1>
      <h2 className={style.title}>Error</h2>
      <p>The page you were looking for could not be found.</p>

      <a href="/" className={style.link}>
        Back to Start
      </a>
    </div>
  );
};

export default ErrorPage;
