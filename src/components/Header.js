import Logo from "../assets/image/download.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import useAuth from "../hooks/useAuth";

// SPA - Single Page Applications
const Title = () => {
  return (
    <div className="">
      <img className="h-28 p-2" src={Logo} alt="Food_Villa_Image" />
    </div>
  );
};

export const loggedInUser = () => {
  return true;
};

export const Header = () => {
  const isOnline = useOnline();
  const { handleClick, isLogged } = useAuth();

  return (
    <div key="header-key" className="flex justify-between bg-pink-50 shadow-lg items-center">
      <Title />
      <ul key="keyul" className="flex py-10">
        <Link to="/">
          <li key="key1" className="px-2">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li key="key2" className="px-2">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li key="key3" className="px-2">
            Contact
          </li>
        </Link>
        <Link to="/instamart">
          <li key="key3" className="px-2">
            Instamart
          </li>
        </Link>
        <li key="key4" className="px-2">
          Cart
        </li>
      </ul>
      <div>{isOnline ? "✅" : "🔴"}</div>
      {<button onClick={handleClick}>{isLogged ? "LogOut" : "LogIn"}</button>}
    </div>
  );
};

export default Header;
