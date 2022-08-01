import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const NavBar = (data) => {
  const avatar = setInterval(() => {
    Math.floor(1000 + Math.random() * 9000);
  }, 1000);
  return (
    <div className="navbar" data-aos="fade-down">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          AlvinoAryo
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end transition duration-300 ease-in-out" style={{indexZ: 1,}}>
          <button className="btn btn-square btn-ghost" tabindex="0">
            <img
              src={`https://avatars.dicebear.com/api/adventurer/${avatar}.svg`}
              className="rounded"
              alt=""
            />
          </button>
          <ul
            tabindex="0"
            className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <Link to="/Information">Information</Link>
            </li>
            <li>
              <Link to="/ChangeLog">Changelog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
