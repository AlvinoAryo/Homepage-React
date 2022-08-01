import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const MobileNavbar = () => {
  return (
    <>
      <div className="navbar" data-aos="fade-down">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            AlvinoAryo
          </a>
        </div>
        <div className="navbar-end">
          <div class="dropdown dropdown-top dropdown-end">
            <label tabindex="0" class="btn m-1">
              Click
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
