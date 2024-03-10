import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "LinkedIn",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Resume", handler: () => {}, id: 2 },
    { text: "Portfolio Projects", handler: () => {}, id: 3 },
    { text: "Passion Projects", handler: () => {}, id: 4 },
    // { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
