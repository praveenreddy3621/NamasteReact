import Logo from "../assets/image/download.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import useAuth from "../hooks/useAuth"

// SPA - Single Page Applications
const Title = () => {
  return (
    <div className="title">
      <img src={Logo} alt="Food_Villa_Image" />
      <h1 key="header1">Food Villa</h1>
    </div>
  );
};

export const loggedInUser = () => {
  return true;
};

export const Header = () => {
  const isOnline = useOnline();
  const {handleClick, isLogged} = useAuth();


  return (
    <div key="header-key" className="header">
      <Title />
      <ul key="keyul" className="navBar">
        <Link to="/">
          <li key="key1">Home</li>
        </Link>
        <Link to="/about">
          <li key="key2">About</li>
        </Link>
        <Link to="/contact">
          <li key="key3">Contact</li>
        </Link>
        <Link to='/instamart'>
          <li key="key3">
            Instamart
          </li>
        </Link>
        <li key="key4">Cart</li>
      </ul>
      {isOnline ? "✅" : "🔴"}
      {<button
        onClick={handleClick}>
        {isLogged ? "LogOut" : "LogIn"}
      </button>}
    </div>
  );
};

export default Header;
