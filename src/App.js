import "./App.css";
import BorderRadius from "./Components/BorderRadius/BorderRadius";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import TextShadow from "./Components/TextShadow/TextShadow";
import Filter from "./Components/Filter/Filter";
import Cursor from "./Components/Cursor/Cursor";
import Gradient from "./Components/Gradient/Gradient";
import BoxShadow from "./Components/BoxShadow/BoxShadow";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/css-tools-generator" element={<Home />} />
        <Route path="/border-radius" element={<BorderRadius />} />
        <Route path="/text-shadow" element={<TextShadow />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/cursor" element={<Cursor />} />
        <Route path="/gradient" element={<Gradient />} />
        <Route path="/box-shadow" element={<BoxShadow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
