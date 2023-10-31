import React, { useState, useEffect } from "react";
import "./NavBar.css";
import menuImg from "./menu.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuToggle, setMenuToogle] = useState(false);
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setSizeScreen(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });
  const changeMenu = () => {
    setMenuToogle(!menuToggle);
  };
  return (
    <nav>
      {(menuToggle || sizeScreen > 500) && (
        <ul className="liste">
          <li className="items">
            <NavLink
              to="/css-tools-generator"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/border-radius"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Border Radius
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/text-shadow"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Text Shadow
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/filter"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Filter
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/cursor"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Cursor Style
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/gradient"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Gradient Tool
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/box-shadow"
              style={({ isActive }) => {
                return isActive ? { color: "#2777be" } : null;
              }}
            >
              Box Shadow
            </NavLink>
          </li>
        </ul>
      )}
      {sizeScreen < 500 && (
        <button onClick={changeMenu}>
          <img src={menuImg} alt="menu" />
        </button>
      )}
    </nav>
  );
}
