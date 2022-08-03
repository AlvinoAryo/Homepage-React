import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = (data) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          AlvinoAryo
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end transition duration-300 ease-in-out">
          <button className="btn btn-ghost">
            <GiHamburgerMenu className="w-full" />
          </button>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="text-sm">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
