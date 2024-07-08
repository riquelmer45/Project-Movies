import React from "react";
import "./Modal.css";

function Modal({ movie, status, toggleModal }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
