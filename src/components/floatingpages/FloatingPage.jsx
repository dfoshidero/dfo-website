import React from "react";
import "./FloatingPage.scss";

export default function FloatingPage(props) {

  const contentMap = {
    about: (
      <div className="title">
        <p>About</p>
      </div>
    ),
    experience: (
      <div className="title">
        <p>Experience</p>
      </div>
    ),
    // Add other menu items here...
  };

  console.log(props);

  return (
    <div className="page-container">
      <div className={props.itemClass}>

          {contentMap[props.selectedItem]}

      </div>
    </div>
  );
}
