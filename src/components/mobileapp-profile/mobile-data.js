// src/data.js
import '../comp.css';


import htmlIcon from '../assets/lang-icons/html.png';

import cssIcon from '../assets/lang-icons/social.png';

import todo from '../assets/project-imgs/to-do-imh.png'




export const mobileprojects = [
    // {
    //   title: "React Reserve",
    //   subtitle: "MERN Stack",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //   image: "./project-1.gif",
    //   link: "",
    // },
    // {
    //   title: "React Tracks",
    //   subtitle: "React and Python",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //   image: "./project-2.gif",
    //   link: "",
    // },

    {
      title: "List Track",
      subtitle: "List Track",
      technologies: ["JavaScript", "DOM Manipulation", "Local JSON Storage"],
      description:
        "Utilizing local JSON storage to save lists for easy reload. I built this project to focus on Javascript DOM manipulation.",
      image: todo,
      link: "https://main--list-tracker-tyra.netlify.app/",
    },
  ];

  export const mobileskills = [
    { name: "HTML/CSS", image: htmlIcon },
    { name: "JavaScript", image: cssIcon },
  ];
