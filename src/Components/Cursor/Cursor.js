import React from "react";
import "./Cursor.css";
import { useState } from "react";

export default function Cursor() {
  const [cursorStyle, setCursorStyle] = useState({
    cursor: "",
  });
  const [toogleCopy, setToogleCopy] = useState(false);
  const handleCursorStyle = (e) => {
    if (e.target.classList.contains("alias")) {
      setCursorStyle({
        cursor: "alias",
      });
    } else if (e.target.classList.contains("all-scroll")) {
      setCursorStyle({
        cursor: "all-scroll",
      });
    } else if (e.target.classList.contains("auto")) {
      setCursorStyle({
        cursor: "auto",
      });
    } else if (e.target.classList.contains("cell")) {
      setCursorStyle({
        cursor: "cell",
      });
    } else if (e.target.classList.contains("context-menu")) {
      setCursorStyle({
        cursor: "context-menu",
      });
    } else if (e.target.classList.contains("col-resize")) {
      setCursorStyle({
        cursor: "col-resize",
      });
    } else if (e.target.classList.contains("copy")) {
      setCursorStyle({
        cursor: "copy",
      });
    } else if (e.target.classList.contains("crosshair")) {
      setCursorStyle({
        cursor: "croshair",
      });
    } else if (e.target.classList.contains("default")) {
      setCursorStyle({
        cursor: "default",
      });
    } else if (e.target.classList.contains("e-resize")) {
      setCursorStyle({
        cursor: "e-resize",
      });
    } else if (e.target.classList.contains("ew-resize")) {
      setCursorStyle({
        cursor: "ew-resize",
      });
    } else if (e.target.classList.contains("grab")) {
      setCursorStyle({
        cursor: "grab",
      });
    } else if (e.target.classList.contains("grabbing")) {
      setCursorStyle({
        cursor: "grabbing",
      });
    } else if (e.target.classList.contains("help")) {
      setCursorStyle({
        cursor: "help",
      });
    } else if (e.target.classList.contains("move")) {
      setCursorStyle({
        cursor: "move",
      });
    } else if (e.target.classList.contains("n-resize")) {
      setCursorStyle({
        cursor: "n-resize",
      });
    } else if (e.target.classList.contains("nesw-resize")) {
      setCursorStyle({
        cursor: "nesw-resize",
      });
    } else if (e.target.classList.contains("ns-resize")) {
      setCursorStyle({
        cursor: "ns-resize",
      });
    } else if (e.target.classList.contains("ne-resize")) {
      setCursorStyle({
        cursor: "ne-resize",
      });
    } else if (e.target.classList.contains("nw-resize")) {
      setCursorStyle({
        cursor: "nw-resize",
      });
    } else if (e.target.classList.contains("nwse-resize")) {
      setCursorStyle({
        cursor: "nwse-resize",
      });
    } else if (e.target.classList.contains("no-drop")) {
      setCursorStyle({
        cursor: "no-drop",
      });
    } else if (e.target.classList.contains("none")) {
      setCursorStyle({
        cursor: "none",
      });
    } else if (e.target.classList.contains("not-allowed")) {
      setCursorStyle({
        cursor: "not-allowed",
      });
    } else if (e.target.classList.contains("pointer")) {
      setCursorStyle({
        cursor: "pointer",
      });
    } else if (e.target.classList.contains("progress")) {
      setCursorStyle({
        cursor: "progress",
      });
    } else if (e.target.classList.contains("row-resize")) {
      setCursorStyle({
        cursor: "row-resize",
      });
    } else if (e.target.classList.contains("s-resize")) {
      setCursorStyle({
        cursor: "s-resize",
      });
    } else if (e.target.classList.contains("se-resize")) {
      setCursorStyle({
        cursor: "se-resize",
      });
    } else if (e.target.classList.contains("sw-resize")) {
      setCursorStyle({
        cursor: "sw-resize",
      });
    } else if (e.target.classList.contains("text")) {
      setCursorStyle({
        cursor: "text",
      });
    } else if (e.target.classList.contains("vertical-text")) {
      setCursorStyle({
        cursor: "vertical-text",
      });
    } else if (e.target.classList.contains("w-resize")) {
      setCursorStyle({
        cursor: "w-resize",
      });
    } else if (e.target.classList.contains("wait")) {
      setCursorStyle({
        cursor: "wait",
      });
    } else if (e.target.classList.contains("zoom-in")) {
      setCursorStyle({
        cursor: "zoom-in",
      });
    } else if (e.target.classList.contains("zoom-out")) {
      setCursorStyle({
        cursor: "zoom-out",
      });
    } else if (e.target.classList.contains("initila")) {
      setCursorStyle({
        cursor: "initila",
      });
    }
  };
  const handleCopy = () => {
    setToogleCopy(true);
    setTimeout(() => {
      setToogleCopy(false);
    }, 1000);
    const codeToCopy = "cursor: " + cursorStyle.cursor + ";";
    if (cursorStyle.cursor !== "") {
      navigator.clipboard.writeText(codeToCopy);
    } else {
      return null;
    }
  };

  return (
    <div
      style={{
        cursor: `${cursorStyle.cursor}`,
      }}
    >
      <h1 className="cursor-title">Cursor tool</h1>
      <div className="cursor-container">
        <div className="cursor-setting">
          <ul className="cursor-style-list">
            <li onClick={handleCursorStyle} className="cursor-choice alias">
              Alias
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice all-scroll"
            >
              All-scroll
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice auto">
              Auto
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice cell">
              Cell
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice context-menu"
            >
              Context-menu
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice col-resize"
            >
              Col-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice copy">
              Copy
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice crosshair">
              Crosshair
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice default">
              Default
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice e-resize">
              E-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice ew-resize">
              Ew-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice grab">
              Grab
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice grabbing">
              Grabbing
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice help">
              Help
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice move">
              Move
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice n-resize">
              N-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice ne-resize">
              Ne-resize
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice nesw-resize
              "
            >
              Nesw-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice ns-resize">
              Ns-resize
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice nwse-resize"
            >
              Nwse-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice no-drop">
              No-drop
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice none">
              None
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice not-allowed"
            >
              Not-allowed
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice pointer">
              Pointer
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice progress">
              Progress
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice row-resize"
            >
              Row-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice s-resize">
              S-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice se-resize">
              Se-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice sw-resize">
              Sw-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice text">
              Text
            </li>
            <li
              onClick={handleCursorStyle}
              className="cursor-choice vertical-text"
            >
              Vercical-text
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice w-resize">
              W-resize
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice wait">
              Wait
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice zoom-in">
              Zoom-in
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice zoom-out">
              Zoom-out
            </li>
            <li onClick={handleCursorStyle} className="cursor-choice initial">
              Initial
            </li>
          </ul>
        </div>
      </div>
      <div className="code-to-copy">
        <h2>code css :</h2>
        <p className="copy">
          {cursorStyle.cursor !== ""
            ? "cursor: " + cursorStyle.cursor + ";"
            : null}
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
