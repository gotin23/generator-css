import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import logoBorderRadius from "./border-radius.svg";
import logoCursor from "./cursor_120340.svg";
import logoTextShadow from "./text_shadow_icon_137108.svg";
import logoFilter from "./filter_picture_icon_187459.svg";
import logoBoxShadow from "./box-shadow.svg";
import logoGradient from "./gradient-tool-2.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <h1 className="home-page-title  ">Css Tools Generator </h1>

      <div className="container-tools">
        <Link to="/border-radius">
          <div className="home-tools flipInX ">
            <img
              className="logo-icon-home"
              alt="icon border radius"
              src={logoBorderRadius}
            />
            <p className="description-tool">Border radius</p>
          </div>
        </Link>
        <Link to="/text-shadow">
          <div className="home-tools flipInX">
            <img
              className="logo-icon-home"
              src={logoTextShadow}
              alt="logo text shadow"
            />
            <p className="description-tool">Text shadow</p>
          </div>
        </Link>
        <Link to="/filter">
          <div className="home-tools flipInX">
            <img
              className="logo-icon-home"
              src={logoFilter}
              alt="logo filter"
            />
            <p className="description-tool">Filter</p>
          </div>
        </Link>
        <Link to="/cursor">
          <div className="home-tools flipInX">
            <img
              className="logo-icon-home"
              src={logoCursor}
              alt="lode cursor"
            />
            <p className="description-tool">Cursor</p>
          </div>
        </Link>
        <Link to="/gradient">
          <div className="home-tools flipInX">
            <img
              className="logo-icon-home"
              src={logoGradient}
              alt="logo gradient"
            />
            <p className="description-tool">Gradient</p>
          </div>
        </Link>
        <Link to="/box-shadow">
          <div className="home-tools flipInX">
            <img
              className="logo-icon-home"
              src={logoBoxShadow}
              alt="logo box shadow"
            />
            <p className="description-tool">Box shadow</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
