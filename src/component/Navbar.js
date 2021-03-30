import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="#" className="brand-logo">
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
