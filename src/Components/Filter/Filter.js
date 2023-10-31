import React from "react";
import "./Filter.css";
import image from "./tristan-boucher-rZgoIaGcveE-unsplash.jpg";
import { useState } from "react";

export default function Filter() {
  const [filterInputs, setFilterInputs] = useState({
    blur: "0",
    brightness: "100",
    contrast: "100",
    grayscale: "0",
    hueRotate: "0",
    invert: "0",
    saturate: "100",
    sepia: "0",
    opacity: "100",
  });
  const [toogleCopy, setToogleCopy] = useState(false);
  const handleFilters = (e) => {
    console.log(filterInputs.blur);
    if (e.target.classList.contains("inp-blur")) {
      setFilterInputs({
        ...filterInputs,
        blur: e.target.value,
      });
    } else if (e.target.classList.contains("inp-brightness")) {
      setFilterInputs({
        ...filterInputs,
        brightness: e.target.value,
      });
    } else if (e.target.classList.contains("inp-contrast")) {
      setFilterInputs({
        ...filterInputs,
        contrast: e.target.value,
      });
    } else if (e.target.classList.contains("inp-grayscale")) {
      setFilterInputs({
        ...filterInputs,
        grayscale: e.target.value,
      });
    } else if (e.target.classList.contains("inp-hue-rotate")) {
      setFilterInputs({
        ...filterInputs,
        hueRotate: e.target.value,
      });
    } else if (e.target.classList.contains("inp-invert")) {
      setFilterInputs({
        ...filterInputs,
        invert: e.target.value,
      });
    } else if (e.target.classList.contains("inp-saturate")) {
      setFilterInputs({
        ...filterInputs,
        saturate: e.target.value,
      });
    } else if (e.target.classList.contains("inp-sepia")) {
      setFilterInputs({
        ...filterInputs,
        sepia: e.target.value,
      });
    } else if (e.target.classList.contains("inp-opacity")) {
      setFilterInputs({
        ...filterInputs,
        opacity: e.target.value,
      });
    }
  };

  const blur =
    filterInputs.blur !== "0" ? "blur(" + filterInputs.blur + "px) " : "";
  const brightness =
    filterInputs.brightness !== "100"
      ? "brightness(" + filterInputs.brightness + "%) "
      : "";
  const contrast =
    filterInputs.contrast !== "100"
      ? "contrast(" + filterInputs.contrast + "%) "
      : "";
  const grayscale =
    filterInputs.grayscale !== "0"
      ? "grayscale(" + filterInputs.grayscale + "%) "
      : "";
  const hueRotate =
    filterInputs.hueRotate !== "0"
      ? "hue-rotate(" + filterInputs.hueRotate + "deg) "
      : "";
  const invert =
    filterInputs.invert !== "0" ? "invert(" + filterInputs.invert + "%) " : "";
  const saturate =
    filterInputs.saturate !== "100"
      ? "saturate(" + filterInputs.saturate + "%) "
      : "";
  const sepia =
    filterInputs.sepia !== "0" ? "sepia(" + filterInputs.sepia + "%) " : "";
  const opacity =
    filterInputs.opacity !== "100"
      ? "opacity(" + filterInputs.opacity + "%) "
      : "";

  const handleCopy = () => {
    setToogleCopy(true);
    setTimeout(() => {
      setToogleCopy(false);
    }, 1000);
    navigator.clipboard.writeText(
      "filter: " +
        blur +
        brightness +
        contrast +
        grayscale +
        hueRotate +
        invert +
        saturate +
        sepia +
        opacity +
        ";"
    );
  };

  return (
    <div>
      <h1 className="filter-tool-title">Filter tool</h1>
      <div className="filter-container">
        <div className="filter-setting">
          <div className="container-input">
            <label htmlFor="blur">
              Blur <span className="label-value"> {filterInputs.blur}px</span>
            </label>
            <input
              className="inp-blur"
              id="blur"
              type="range"
              min="0"
              max="10"
              onChange={handleFilters}
              value={filterInputs.blur}
            />
          </div>
          <div className="container-input">
            <label htmlFor="brightness">
              Brightness{" "}
              <span className="label-value">{filterInputs.brightness}%</span>
            </label>
            <input
              className="inp-brightness"
              id="brightness"
              type="range"
              min="0"
              max="200"
              onChange={handleFilters}
              value={filterInputs.brightness}
            />
          </div>
          <div className="container-input">
            <label htmlFor="contrast">
              Contrast{" "}
              <span className="label-value">{filterInputs.contrast}%</span>{" "}
            </label>
            <input
              className="inp-contrast"
              id="contrast"
              type="range"
              min="0"
              max="1000"
              onChange={handleFilters}
              value={filterInputs.contrast}
            />
          </div>
          <div className="container-input">
            <label htmlFor="grayscale">
              Grayscale{" "}
              <span className="label-value">{filterInputs.grayscale}%</span>
            </label>
            <input
              className="inp-grayscale"
              id="grayscale"
              type="range"
              min="0"
              max="100"
              onChange={handleFilters}
              value={filterInputs.grayscale}
            />
          </div>
          <div className="container-input">
            <label htmlFor="hue-rotate">
              Hue rotate{" "}
              <span className="label-value">{filterInputs.hueRotate}°</span>
            </label>
            <input
              className="inp-hue-rotate"
              id="hue-rotate"
              type="range"
              min="0"
              max="360"
              onChange={handleFilters}
              value={filterInputs.hueRotate}
            />
          </div>
          <div className="container-input">
            <label htmlFor="invert">
              Invert <span className="label-value">{filterInputs.invert}%</span>{" "}
            </label>
            <input
              className="inp-invert"
              id="invert"
              type="range"
              min="0"
              max="100"
              onChange={handleFilters}
              value={filterInputs.invert}
            />
          </div>
          <div className="container-input">
            <label htmlFor="saturate">
              Saturate{" "}
              <span className="label-value">{filterInputs.saturate}%</span>{" "}
            </label>
            <input
              className="inp-saturate"
              id="saturate"
              type="range"
              min="0"
              max="1000"
              onChange={handleFilters}
              value={filterInputs.saturate}
            />
          </div>
          <div className="container-input">
            <label htmlFor="saturate">
              Sepia <span className="label-value">{filterInputs.sepia}%</span>{" "}
            </label>
            <input
              className="inp-sepia"
              id="sepia"
              type="range"
              min="0"
              max="100"
              onChange={handleFilters}
              value={filterInputs.sepia}
            />
          </div>
          <div className="container-input">
            <label htmlFor="opacity">
              Opacity{" "}
              <span className="label-value">{filterInputs.opacity}%</span>{" "}
            </label>
            <input
              className="inp-opacity"
              id="opacity"
              type="range"
              min="0"
              max="100"
              onChange={handleFilters}
              value={filterInputs.opacity}
            />
          </div>
        </div>
        <div className="filter-preview">
          <img
            src={image}
            alt="paysage de tristan boucher"
            style={{
              filter:
                blur +
                brightness +
                contrast +
                grayscale +
                hueRotate +
                invert +
                saturate +
                sepia +
                opacity,
            }}
          />
        </div>
      </div>
      <div className="code-to-copy">
        <h2>code css :</h2>
        <p className="copy">
          filter: {blur} {brightness} {contrast} {grayscale} {hueRotate}
          {invert} {saturate} {sepia} {opacity};
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
