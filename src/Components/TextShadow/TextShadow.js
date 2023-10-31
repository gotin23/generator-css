import React from "react";
import "./TextShadow.css";
import { useState } from "react";

export default function TextShadow() {
  const [rangeInputs, setRangeInputs] = useState({
    horizontalShadow: "0",
    verticalShadow: "0",
    shadowColor: "#000000",
    blurRadius: "0",
    shadowOpacity: "1",
    fontSize: "40",
  });
  const [toogleCopy, setToogleCopy] = useState(false);
  const handleInputsRange = (e) => {
    if (e.target.classList.contains("inp-horizontal-shadow")) {
      setRangeInputs({
        ...rangeInputs,
        horizontalShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-vertical-shadow")) {
      setRangeInputs({
        ...rangeInputs,
        verticalShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-color-shadow")) {
      setRangeInputs({
        ...rangeInputs,
        shadowColor: e.target.value,
      });
    } else if (e.target.classList.contains("inp-blur-radius")) {
      setRangeInputs({
        ...rangeInputs,
        blurRadius: e.target.value,
      });
    } else if (e.target.classList.contains("inp-shadow-opacity")) {
      setRangeInputs({
        ...rangeInputs,
        shadowOpacity: e.target.value,
      });
    } else if (e.target.classList.contains("inp-font-size")) {
      setRangeInputs({
        ...rangeInputs,
        fontSize: e.target.value,
      });
    }
  };
  const hex = rangeInputs.shadowColor;
  // Fonction pour convertir une color hex en rgba
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return (
        "(" + r + "," + g + "," + b + "," + rangeInputs.shadowOpacity + ")"
      );
    }
    return null;
  }
  const rgba = "rgba" + hexToRgb(hex);
  const handleCopy = () => {
    setToogleCopy(true);
    setTimeout(() => {
      setToogleCopy(false);
    }, 1000);
    const codeToCopy =
      "text-shadow:" +
      rangeInputs.horizontalShadow +
      "px" +
      " " +
      rangeInputs.verticalShadow +
      "px" +
      " " +
      rangeInputs.blurRadius +
      "px" +
      " " +
      `${
        rgba === "rgbanull"
          ? "rgba(0,0,0," + rangeInputs.shadowOpacity + ")"
          : rgba
      }` +
      ";";
    navigator.clipboard.writeText(codeToCopy);
  };

  return (
    <div>
      <h1 className="text-shadow-title">Text Shadow</h1>
      <div className="text-shadow-container-tool">
        <div className="text-shadow-setting">
          <div className="container-input">
            <label htmlFor="horizontal-shadow">
              Horizontal shadow{" "}
              <span className="label-value">
                {rangeInputs.horizontalShadow}px
              </span>
            </label>
            <input
              className="inp-horizontal-shadow"
              id="horizontal-shadow"
              type="range"
              value={rangeInputs.horizontalShadow}
              min="-200"
              max="200"
              onChange={handleInputsRange}
            />
          </div>
          <div className="container-input">
            <label htmlFor="vertical-shadow">
              Vertical shadow{" "}
              <span className="label-value">
                {rangeInputs.verticalShadow}px
              </span>{" "}
            </label>
            <input
              className="inp-vertical-shadow"
              id="vertical-shadow"
              type="range"
              value={rangeInputs.verticalShadow}
              min="-200"
              max="200"
              onChange={handleInputsRange}
            />
          </div>
          <div className="container-input">
            <label htmlFor="blur-radius">
              Blur radius{" "}
              <span className="label-value">{rangeInputs.blurRadius}px</span>{" "}
            </label>
            <input
              className="inp-blur-radius"
              id="blur-radius"
              type="range"
              value={rangeInputs.blurRadius}
              min="0"
              max="50"
              onChange={handleInputsRange}
            />
          </div>
          <div className="container-input">
            <label htmlFor="shadow-color">
              Shadow color <span className="label-value">{hexToRgb(hex)}</span>
            </label>
            <input
              className="inp-color-shadow"
              id="shadow-color"
              type="color"
              value={rangeInputs.shadowColor}
              onChange={handleInputsRange}
            />
          </div>
          <div className="container-input">
            <label htmlFor="shadow-opacity">
              Shadow color opacity{" "}
              <span className="label-value">{rangeInputs.shadowOpacity}</span>{" "}
            </label>
            <input
              className="inp-shadow-opacity"
              id="shadow-opacity"
              type="range"
              value={rangeInputs.shadowOpacity}
              min="0"
              max="1"
              step="0.01"
              onChange={handleInputsRange}
            />
          </div>
          <div className="container-input">
            <label htmlFor="font-size">
              Font size{" "}
              <span className="label-value">{rangeInputs.fontSize}px</span>{" "}
            </label>
            <input
              className="inp-font-size"
              id="font-size"
              type="range"
              value={rangeInputs.fontSize}
              min="5"
              max="70"
              onChange={handleInputsRange}
            />
          </div>
        </div>
        <div className="text-shadow-preview">
          <h2
            style={{
              textShadow: `${rangeInputs.horizontalShadow}px ${
                rangeInputs.verticalShadow
              }px ${rangeInputs.blurRadius}px ${
                rgba !== "rgbanull"
                  ? rgba
                  : "rgba(0,0,0," + rangeInputs.shadowOpacity + ")"
              } `,
              fontSize: `${rangeInputs.fontSize}px`,
            }}
          >
            This is a text for test your shadow
          </h2>
        </div>
      </div>
      <div className="code-to-copy">
        <h2>code css :</h2>
        <p className="copy">
          text-shadow: {rangeInputs.horizontalShadow}px{" "}
          {rangeInputs.verticalShadow}px {rangeInputs.blurRadius}px{" "}
          {rgba !== "rgbanull"
            ? rgba
            : "rgba(0,0,0," + rangeInputs.shadowOpacity + ")"}{" "}
          ;
        </p>

        <button onClick={handleCopy}>
          Copy{" "}
          <div className={`copy-toast ${toogleCopy ? "active" : null}`}>
            copié
          </div>
        </button>
      </div>
    </div>
  );
}
