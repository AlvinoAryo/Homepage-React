const NavBar = (data) => {
  return (
    <div class="navbar">
      <a href="/" class="btn btn-ghost normal-case text-xl">{data.title}</a>
    </div>
  );
};

export default NavBar;
