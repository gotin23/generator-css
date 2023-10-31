import React from "react";
import "./Contact.css";
import logoContact from "./icons8-carte-contact-100.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact :</h1>

      <p className="info-contact">Email: Linkdu06@hotmail.com</p>

      <img src={logoContact} alt="logo de contact"></img>
    </div>
  );
}
