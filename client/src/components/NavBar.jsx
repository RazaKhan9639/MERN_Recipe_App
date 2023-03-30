import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const handleLogout = () => {
    setCookies("access_token", "", { path: "/" });
    window.localStorage.removeItem("userID");
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipies">Saved Recipes</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button
          onClick={handleLogout}
          className="loButton"
          style={{
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            padding: "5px",
            margin: "5px",
            fontSize: "1rem",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textDecoration: "none",
            outline: "none",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default NavBar;
