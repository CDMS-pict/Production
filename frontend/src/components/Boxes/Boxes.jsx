import React from "react";
import "./boxes.css";

function Boxes({ title, url }) {
  return (
    <div className="content_box">
      <a href={url}>
        <p>{title}</p>
      </a>
    </div>
  );
}

export default Boxes;
