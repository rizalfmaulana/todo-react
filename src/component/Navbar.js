import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a href="google.com" className="brand-logo">
          Blog
        </a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todolist">Todo-List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
