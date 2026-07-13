import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navbar'>

      <h1>Placement Management System</h1>

      <div className='profile'>
        Welcome, student

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>
      </div>

    </nav>
  );
}

export default NavBar;