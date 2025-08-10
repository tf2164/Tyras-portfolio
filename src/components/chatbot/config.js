import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions/LearningOptions.jsx";
import LinkList from "./LinkList/LinkList.jsx";

const config = {
  botName: "Clover",
  initialMessages: [
    createChatBotMessage("Hi, thanks for stopping by? What do you want to learn about my creator?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      borderRadius: "10px",
      padding: "10px",
      color: "#fff",
    },
    chatButton: {
      backgroundColor: "#376B7E",
      borderRadius: "10px",
      padding: "10px",
      color: "#fff",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "LinkedIn",
            url:
              "https://www.linkedin.com/in/tyrafair/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
