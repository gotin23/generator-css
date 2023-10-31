import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <p>
        Website powered by{" "}
        <span className="gotin-contact">
          <Link to="/contact">Gotin23</Link>
        </span>{" "}
        2022
      </p>
    </footer>
  );
}
