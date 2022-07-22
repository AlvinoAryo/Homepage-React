const HomePage = () => {
  const defaultColor = "text-rose-600";
  const heroStyle = {
    backgroundImage: "url(https://placeimg.com/1000/800/arch)",
  };
  return (
    <div className="font-bold m-2 p-4">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Vino Aryo</h1>
            <span classNameName="co_text">
              (<span className={defaultColor}>&lt;</span>
              Full Stack Developer <span className={defaultColor}>/&gt;</span>)
            </span>
            <p className="py-6">Welcome to my personal website.</p>
            <p className="skills">
              Developer with skills of <br />
              <span className={defaultColor}>HTML</span> |{" "}
              <span className={defaultColor}>CSS</span> |{" "}
              <span className={defaultColor}>Bootstrap</span> |{" "}
              <span className={defaultColor}>JavaScript</span> |{" "}
              <span className={defaultColor}>NodeJS</span> |{" "}
              <span className={defaultColor}>Python</span> |{" "}
              <span className={defaultColor}>React Js</span> |{" "}
              <span className={defaultColor}>Laravel</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
