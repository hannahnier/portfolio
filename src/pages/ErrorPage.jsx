const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1 style={{ margin: "0.5em" }}>404</h1>
      <h2 style={{ margin: "0.5em" }}>Error</h2>
      <p>The page you were looking for could not be found.</p>

      <a
        href="/"
        style={{
          background: "rgb(247, 240, 159)",
          border: "none",
          borderRadius: "0.5em",
          padding: "0.5em",
          margin: "50px",
          color: "rgb(8, 10, 37)",
          textDecoration: "none",
        }}
        // onClick={() => setActiveNav("#")}
        // className={activeNav === "#" ? style.active : ""}
      >
        Back to Start
      </a>
    </div>
  );
};

export default ErrorPage;
