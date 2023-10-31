import React from "react";
import "./Gradient.css";
import { useState } from "react";

export default function Gradient() {
  const [gradientInputs, setGradientInput] = useState({
    degree: "90",
    orientation: "linear-gradient",
    startColor: "#ff0000",
    startColorPercentage: "0",
    endColor: "#998110",
    endColorPercentage: "80",
    thirdColor: "#745564",
    thirdColorPercentage: "40",
  });

  const [toogleCopy, setToogleCopy] = useState(false);

  const [toggleColor, setToggleColor] = useState(false);
  const handleGradient = (e) => {
    if (e.target.classList.contains("inp-degree")) {
      setGradientInput({
        ...gradientInputs,
        degree: e.target.value,
      });
    } else if (e.target.classList.contains("inp-orientation")) {
      setGradientInput({
        ...gradientInputs,
        orientation: e.target.value,
      });
    } else if (e.target.classList.contains("inp-start-color")) {
      setGradientInput({
        ...gradientInputs,
        startColor: e.target.value,
      });
    } else if (e.target.classList.contains("inp-end-color")) {
      setGradientInput({
        ...gradientInputs,
        endColor: e.target.value,
      });
    } else if (e.target.classList.contains("inp-startColorPercentage")) {
      setGradientInput({
        ...gradientInputs,
        startColorPercentage: e.target.value,
      });
    } else if (e.target.classList.contains("inp-endColorPercentage")) {
      setGradientInput({
        ...gradientInputs,
        endColorPercentage: e.target.value,
      });
    } else if (e.target.classList.contains("inp-thirdColorPercentage")) {
      setGradientInput({
        ...gradientInputs,
        thirdColorPercentage: e.target.value,
      });
    } else if (e.target.classList.contains("inp-third-color")) {
      setGradientInput({
        ...gradientInputs,
        thirdColor: e.target.value,
      });
    }
  };

  const handleAddColor = () => {
    setToggleColor(!toggleColor);
  };
  const thirdColorCode = toggleColor
    ? gradientInputs.thirdColor +
      " " +
      gradientInputs.thirdColorPercentage +
      "%,"
    : "";

  const handleCopy = (e) => {
    setToogleCopy(true);
    setTimeout(() => {
      setToogleCopy(false);
    }, 1000);

    navigator.clipboard.writeText(
      "background: " +
        gradientInputs.orientation +
        "(" +
        gradientInputs.degree +
        "deg," +
        gradientInputs.startColor +
        " " +
        gradientInputs.startColorPercentage +
        "%," +
        thirdColorCode +
        gradientInputs.endColor +
        " " +
        gradientInputs.endColorPercentage +
        "%);"
    );
  };
  return (
    <div>
      <h1 className="gradient-tool-title">Gradient Tool</h1>
      <div className="container-tool-gradient">
        <div
          className="gradient-preview"
          style={{
            background: `${gradientInputs.orientation}(${gradientInputs.degree}deg,${gradientInputs.startColor} ${gradientInputs.startColorPercentage}%,${thirdColorCode} ${gradientInputs.endColor} ${gradientInputs.endColorPercentage}%)`,
          }}
        ></div>
        <div className="gradient-setting">
          <div className="container-input">
            <label htmlFor="orientation">Type</label>
            <select
              className="inp-orientation"
              name="Orientation"
              id="orientation"
              onChange={handleGradient}
              value={gradientInputs.orientation}
            >
              <option value="linear-gradient">linear gradient</option>
              <option value="repeating-linear-gradient">repeat linear</option>
            </select>
          </div>
          <div className="container-input">
            <label htmlFor="degree">
              Degrée{" "}
              <span className="label-value">{gradientInputs.degree}°</span>{" "}
            </label>
            <input
              className="inp-degree"
              id="degree"
              type="range"
              min="0"
              max="360"
              onChange={handleGradient}
              value={gradientInputs.degree}
            />
          </div>
          <div className="container-input">
            <label htmlFor="start-color">
              Start Color{" "}
              <span className="label-value">{gradientInputs.startColor}</span>
            </label>
            <input
              className="inp-start-color"
              id="start-color"
              type="color"
              onChange={handleGradient}
              value={gradientInputs.startColor}
            />
            <label htmlFor="start-percentage">
              Percentage{" "}
              <span className="label-value">
                {gradientInputs.startColorPercentage}%
              </span>
            </label>
            <input
              id="start-precentage"
              className="inp-startColorPercentage"
              type="range"
              min="0"
              max="100"
              onChange={handleGradient}
              value={gradientInputs.startColorPercentage}
            />
          </div>
          <div className="container-input">
            <label htmlFor="end-color">
              End color{" "}
              <span className="label-value">{gradientInputs.endColor}</span>
            </label>
            <input
              className="inp-end-color"
              id="start-color"
              type="color"
              onChange={handleGradient}
              value={gradientInputs.endColor}
              placeholder="%"
            />
            <label htmlFor="end-percentage">
              Percentage{" "}
              <span className="label-value">
                {gradientInputs.endColorPercentage}%
              </span>
            </label>
            <input
              id="end-precentage"
              className="inp-endColorPercentage"
              type="range"
              min="0"
              max="100"
              onChange={handleGradient}
              value={gradientInputs.endColorPercentage}
            />
          </div>

          {toggleColor ? (
            <div className={"container-input"}>
              <label htmlFor="third-color">
                Third color{" "}
                <span className="label-value">{gradientInputs.thirdColor}</span>
              </label>
              <input
                className="inp-third-color"
                id="third-color"
                type="color"
                onChange={handleGradient}
                value={gradientInputs.thirdColor}
                placeholder="%"
              />
              <label htmlFor="third-percentage">
                Percentage{" "}
                <span className="label-value">
                  {gradientInputs.thirdColorPercentage}%
                </span>
              </label>
              <input
                id="third-precentage"
                className="inp-thirdColorPercentage"
                type="range"
                min="0"
                max="100"
                onChange={handleGradient}
                value={gradientInputs.thirdColorPercentage}
              />
            </div>
          ) : null}

          <button className="btn-add-color" onClick={handleAddColor}>
            {toggleColor ? "Remove third color" : "Add third color"}
          </button>
        </div>
      </div>
      <div className="code-to-copy">
        <h2>code css :</h2>
        <p>
          background:{" "}
          {`${gradientInputs.orientation}(${gradientInputs.degree}
          deg,${gradientInputs.startColor} ${gradientInputs.startColorPercentage}%,${thirdColorCode} ${gradientInputs.endColor} ${gradientInputs.endColorPercentage}%)`}
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
