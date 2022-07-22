import { Link } from "react-router-dom";

const NavBar = (data) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          {data.path}
        </a>
      </div>
      <div class="navbar-center">
        <p>{data.center}</p>
      </div>
      <div className="navbar-end">
      <Link to="/Information" className="btn btn-ghost">
          Information
        </Link>
        <Link to="/Changelog" className="btn btn-ghost">
          Changelog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
