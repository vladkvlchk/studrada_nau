import React from "react";
import './ResourceButton.css';

const ResourceButton = ({ name, imgUrl, link }) => {
  return (
    <a href={link} target="_blank">
      <button className="resources__button">
        <img className="resources__btn-logo" src={imgUrl} alt="tg channel logo" />
        <h2>{name}</h2>
      </button>
    </a>
  );
};

export default ResourceButton;
