import { useState } from "react";
import Logo from "../assets/image/download.jpeg";
import { Link } from "react-router-dom";

// SPA - Single Page Applications
//
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
  const [isLogged, setIsLogged] = useState(false);

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
        <li key="key4">Cart</li>
      </ul>
      {isLogged ? (
        <button
          onClick={() => {
            setIsLogged(false);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLogged(true);
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
