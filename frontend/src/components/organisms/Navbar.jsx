import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // use context logout

  return (
    <nav className="navbar">
      <Link to="/">🎬 OTT Platform</Link>
      <div className="menu">
        {isAuthenticated ? (
          <>
            <Link to="/add-movie" className="hover:underline">
              Add Movie
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
