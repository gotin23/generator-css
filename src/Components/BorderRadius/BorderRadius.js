import React from "react";
import "./borderRadius.css";
import { useState } from "react";
import Footer from "../Footer/Footer";

export default function BorderRadius() {
  const [inputsRange, setInputsRange] = useState({
    allCorners: "0",
    topLeftCorner: "0",
    topRightCorner: "0",
    bottomLeftCorner: "0",
    bottomRightCorner: "0",
    background: "#232268",
  });

  const [border, setBorder] = useState({
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: "0",
  });
  const [toogleCopy, setToogleCopy] = useState(false);
  const codeBorder =
    " " +
    border.borderWidth +
    "px" +
    " " +
    border.borderStyle +
    " " +
    border.borderColor +
    ";";

  const handleBorder = (e) => {
    console.log(border);
    if (e.target.classList.contains("inp-border-width")) {
      setBorder({
        ...border,
        borderWidth: e.target.value,
      });
    } else if (e.target.classList.contains("inp-border-color")) {
      setBorder({
        ...border,
        borderColor: e.target.value,
      });
    } else if (e.target.classList.contains("inp-select-style")) {
      setBorder({
        ...border,
        borderStyle: e.target.value,
      });
    }
  };

  const handleRanges = (e) => {
    if (e.target.classList.contains("inp-all-corners")) {
      console.log(inputsRange);
      setInputsRange({
        ...inputsRange,
        allCorners: e.target.value,
        topLeftCorner: e.target.value,
        topRightCorner: e.target.value,
        bottomLeftCorner: e.target.value,
        bottomRightCorner: e.target.value,
      });
    } else if (e.target.classList.contains("inp-top-left-corner")) {
      console.log(inputsRange);
      setInputsRange({
        ...inputsRange,
        topLeftCorner: e.target.value,
      });
    } else if (e.target.classList.contains("inp-top-right-corner")) {
      setInputsRange({
        ...inputsRange,
        topRightCorner: e.target.value,
      });
    } else if (e.target.classList.contains("inp-bottom-left-corner")) {
      setInputsRange({
        ...inputsRange,
        bottomLeftCorner: e.target.value,
      });
    } else if (e.target.classList.contains("inp-bottom-right-corner")) {
      setInputsRange({
        ...inputsRange,
        bottomRightCorner: e.target.value,
      });
    } else if (e.target.classList.contains("inp-background-color")) {
      setInputsRange({
        ...inputsRange,
        background: e.target.value,
      });
    }
  };
  const handleCopy = () => {
    setToogleCopy(true);
    setTimeout(() => {
      setToogleCopy(false);
    }, 1000);
    const codeRadius =
      "border-radius: " +
      inputsRange.topLeftCorner +
      "px" +
      " " +
      inputsRange.topRightCorner +
      "px" +
      " " +
      inputsRange.bottomRightCorner +
      "px" +
      " " +
      inputsRange.bottomLeftCorner +
      "px" +
      " " +
      ";";
    if (border.borderWidth === "0") {
      navigator.clipboard.writeText(codeRadius);
    } else {
      navigator.clipboard.writeText(`${codeRadius}
border:${codeBorder}`);
    }
  };

  return (
    <>
      <div className="border-radius-tools">
        <h1 className="border-title">Border Radius</h1>
        <div className="border-tool-container">
          <div className="border-setting">
            <div className="container-input">
              <label htmlFor="all-corner">
                All corners{" "}
                <span className="label-value">{inputsRange.allCorners}px</span>
              </label>
              <input
                className="inp-all-corners"
                id="all-corner"
                type="range"
                min="0"
                max="200"
                onChange={handleRanges}
                value={inputsRange.allCorners}
              />
            </div>
            <div className="container-input">
              <label htmlFor="top-left-corner">
                Left top corner{" "}
                <span className="label-value">
                  {inputsRange.topLeftCorner}px
                </span>
              </label>
              <input
                className="inp-top-left-corner"
                id="top-left-corner"
                type="range"
                min="0"
                max="200"
                onChange={handleRanges}
                value={inputsRange.topLeftCorner}
              />
            </div>

            <div className="container-input">
              <label htmlFor="top-right-corner">
                Right top corner{" "}
                <span className="label-value">
                  {inputsRange.topRightCorner}px
                </span>{" "}
              </label>
              <input
                className="inp-top-right-corner"
                id="top-right-corner"
                type="range"
                min="0"
                max="200"
                onChange={handleRanges}
                value={inputsRange.topRightCorner}
              />
            </div>

            <div className="container-input">
              <label htmlFor="bottom-left-corner">
                Left bottom corner{" "}
                <span className="label-value">
                  {inputsRange.bottomLeftCorner}px
                </span>
              </label>
              <input
                className="inp-bottom-left-corner"
                id="bottom-left-corner"
                type="range"
                min="0"
                max="200"
                onChange={handleRanges}
                value={inputsRange.bottomLeftCorner}
              />
            </div>

            <div className="container-input">
              <label htmlFor="bottom-right-corner">
                Right bottom corner{" "}
                <span className="label-value">
                  {inputsRange.bottomRightCorner}px
                </span>{" "}
              </label>
              <input
                className="inp-bottom-right-corner"
                id="bottom-right-corner"
                type="range"
                min="0"
                max="200"
                onChange={handleRanges}
                value={inputsRange.bottomRightCorner}
              />
            </div>
            <div className="container-input">
              <label htmlFor="border-with">
                Border width{" "}
                <span className="label-value"> {border.borderWidth}px</span>{" "}
              </label>
              <input
                className="inp-border-width"
                id="border-width"
                type="range"
                min="0"
                max="200"
                onChange={handleBorder}
                value={border.borderWidth}
              />
            </div>
            <div className="container-input">
              <label htmlFor="border-color">
                Border color
                <span className="label-value"> {border.borderColor} </span>
              </label>
              <input
                className="inp-border-color"
                id="border-color"
                type="color"
                onChange={handleBorder}
                value={border.borderColor}
              />
              <label htmlFor="background-color">
                Background color{" "}
                <span className="label-value">{inputsRange.background}</span>
              </label>
              <input
                className="inp-background-color"
                id="background-color"
                type="color"
                onChange={handleRanges}
                value={inputsRange.background}
              />
            </div>
            <div className="container-input-end">
              <label htmlFor="border-style">Border style</label>
              <select
                name="Border-style"
                id="border-style"
                className="inp-select-style"
                value={border.borderStyle}
                onChange={handleBorder}
              >
                <option value={"none"}>none</option>
                <option value={"solid"}>solid</option>
                <option value={"dashed"}>dashed</option>
                <option value={"dotted"}>dotted</option>
                <option value={"double"}>double</option>
                <option value={"groove"}>groove</option>
                <option value={"ridge"}>ridge</option>
                <option value={"inset"}>inset</option>
                <option value={"outset"}>outset</option>
                <option value={"hidden"}>hidden</option>
              </select>
            </div>
          </div>
          <div className="border-preview">
            <div
              className="result-look"
              style={{
                borderTopLeftRadius: `${inputsRange.topLeftCorner}px`,
                borderTopRightRadius: `${inputsRange.topRightCorner}px`,
                borderBottomRightRadius: `${inputsRange.bottomRightCorner}px`,
                borderBottomLeftRadius: `${inputsRange.bottomLeftCorner}px`,
                borderWidth: `${border.borderWidth}px `,
                borderColor: `${border.borderColor}`,
                borderStyle: `${border.borderStyle}`,
                background: `${inputsRange.background}`,
              }}
            ></div>
          </div>
        </div>
        <div className="code-to-copy">
          <h2>code css :</h2>
          <p className="copy">
            border-radius: {inputsRange.topLeftCorner}px{" "}
            {inputsRange.topRightCorner}px {inputsRange.bottomRightCorner}px{" "}
            {inputsRange.bottomLeftCorner}px ;
          </p>
          {border.borderWidth !== "0" ? <p>border:{codeBorder}</p> : null}
          <button onClick={handleCopy}>
            Copy{" "}
            <div className={`copy-toast ${toogleCopy ? "active" : null}`}>
              copié
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
