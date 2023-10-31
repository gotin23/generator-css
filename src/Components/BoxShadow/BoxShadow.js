import React from "react";
import "./BoxShadow.css";
import { useState } from "react";

export default function BoxShadow() {
  const [rangeInputs, setRangeInput] = useState({
    horizontalShadow: "0",
    verticalShadow: "0",
    blurShadow: "0",
    spreadShadow: "0",
    colorShadow: "#2e2e2e",
    opacityShadow: "0.75",
  });

  const [toogleInset, setToogleInset] = useState(false);

  const handleInset = () => {
    setToogleInset(!toogleInset);
  };
  const [toogleCopy, setToogleCopy] = useState(false);

  const handleInputs = (e) => {
    if (e.target.classList.contains("inp-horizontal-shadow")) {
      setRangeInput({
        ...rangeInputs,
        horizontalShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-vertical-shadow")) {
      setRangeInput({
        ...rangeInputs,
        verticalShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-blur-shadow")) {
      setRangeInput({
        ...rangeInputs,
        blurShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-spread-shadow")) {
      setRangeInput({
        ...rangeInputs,
        spreadShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-color-shadow")) {
      setRangeInput({
        ...rangeInputs,
        colorShadow: e.target.value,
      });
    } else if (e.target.classList.contains("inp-opacity-shadow")) {
      setRangeInput({
        ...rangeInputs,
        opacityShadow: e.target.value,
      });
    }
  };
  const hex = rangeInputs.colorShadow;
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return (
        "(" + r + "," + g + "," + b + "," + rangeInputs.opacityShadow + ")"
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
    const codeInset = toogleInset ? "inset" : "";
    const codeToCopy =
      "box-shadow:" +
      rangeInputs.horizontalShadow +
      "px" +
      " " +
      rangeInputs.verticalShadow +
      "px" +
      " " +
      rangeInputs.blurShadow +
      "px" +
      " " +
      rangeInputs.spreadShadow +
      "px" +
      " " +
      rgba +
      codeInset +
      ";";

    navigator.clipboard.writeText(codeToCopy);
  };

  return (
    <div className="tool">
      <h1 className="box-shadow-title">Box shadow</h1>
      <div className="box-shadow-tool">
        <div className="box-shadow-setting">
          <div className="container-input">
            <label htmlFor="horizontal-shadow">
              Horizontal shadow length{" "}
              <span className="label-value">
                {rangeInputs.horizontalShadow}px
              </span>
            </label>
            <input
              className="inp-horizontal-shadow"
              id="horizontal-shadow"
              type="range"
              min="0"
              max="200"
              onChange={handleInputs}
              value={rangeInputs.horizontalShadow}
            />
          </div>
          <div className="container-input">
            <label htmlFor="vertical-shadow">
              Vertical shadow length{" "}
              <span className="label-value">
                {rangeInputs.verticalShadow}px
              </span>
            </label>
            <input
              className="inp-vertical-shadow"
              id="vertical-shadow"
              type="range"
              min="0"
              max="200"
              onChange={handleInputs}
              value={rangeInputs.verticalShadow}
            />
          </div>
          <div className="container-input">
            <label htmlFor="blur-shadow">
              Blur radius{" "}
              <span className="label-value">{rangeInputs.blurShadow}px</span>
            </label>
            <input
              className="inp-blur-shadow"
              id="blur-shadow"
              type="range"
              min="0"
              max="400"
              onChange={handleInputs}
              value={rangeInputs.blurShadow}
            />
          </div>
          <div className="container-input">
            <label htmlFor="spread-shadow">
              Spread radius{" "}
              <span className="label-value">{rangeInputs.spreadShadow}px</span>
            </label>
            <input
              className="inp-spread-shadow"
              id="spread-shadow"
              type="range"
              min="0"
              max="100"
              onChange={handleInputs}
              value={rangeInputs.spreadShadow}
            />
          </div>
          <div className="container-input">
            <label htmlFor="color-shadow">
              Color{" "}
              <span className="label-value">{rangeInputs.colorShadow}</span>
            </label>
            <input
              className="inp-color-shadow"
              id="color-shadow"
              type="color"
              onChange={handleInputs}
              value={rangeInputs.colorShadow}
            />
          </div>
          <div className="container-input">
            <label htmlFor="opacity-shadow">
              Shadow color opacity{" "}
              <span className="label-value">{rangeInputs.opacityShadow}px</span>
            </label>
            <input
              className="inp-opacity-shadow"
              id="opacity-shadow"
              type="range"
              min="0"
              max="1"
              step="0.01"
              onChange={handleInputs}
              value={rangeInputs.opacityShadow}
            />
          </div>
          <div className="container-input">
            <button onClick={handleInset}>
              Inset {toogleInset ? "ON" : "OFF"}
            </button>
          </div>
        </div>
        <div className="box-shadow-preview">
          <div
            className="box-preview"
            style={{
              boxShadow: `${rangeInputs.horizontalShadow}px ${
                rangeInputs.verticalShadow
              }px ${rangeInputs.blurShadow}px ${
                rangeInputs.spreadShadow
              }px ${rgba} ${toogleInset ? "inset" : ""}`,
            }}
          ></div>
        </div>
      </div>
      <div className="code-to-copy">
        <h2>code css :</h2>
        <p className="copy">
          box-shadow: {rangeInputs.horizontalShadow}px{" "}
          {rangeInputs.verticalShadow}px {rangeInputs.blurShadow}px{" "}
          {rangeInputs.spreadShadow}px {rgba} {toogleInset ? "inset" : ""};
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
