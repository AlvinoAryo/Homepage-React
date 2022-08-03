const HomePage = () => {
  const defaultClass = "text-rose-600 hover:bg-rose-700 hover:text-rose-50 transition duration-300 ease-in-out";
  
  return (
    <div className="font-bold m-2 p-4" data-aos="zoom-in">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Vino Aryo</h1>
            <span classNameName="co_text">
              (<span className={defaultClass}>&lt;</span>
              Developer <span className={defaultClass}>/&gt;</span>)
            </span>
            <p className="py-6">Welcome to my personal website.</p>
            <p className="skills ">
              Developer with skills of <br />
              <span className={defaultClass}>HTML</span> |{" "}
              <span className={defaultClass}>CSS</span> |{" "}
              <span className={defaultClass}>Bootstrap</span> |{" "}
              <span className={defaultClass}>JavaScript</span> |{" "}
              <span className={defaultClass}>NodeJS</span> |{" "}
              <span className={defaultClass}>Python</span> |{" "}
              <span className={defaultClass}>React Js</span> |{" "}
              <span className={defaultClass}>Laravel</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
