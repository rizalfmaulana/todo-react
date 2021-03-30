import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Blog
        </Link>
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
