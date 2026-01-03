// src/data.js
import '../comp.css';


import documentIcon from '../assets/lang-icons/documents.png';

import ticjoe from '../assets/project-imgs/coffee-shop-main.png'




export const gameprojects = [
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
      title: "Coffee Shop Game",
      subtitle: "Coffee Shop Game",
      technologies: ["React", "AI", "CSS Animations"],
      description:
        "React Application that utilizes CSS Animations to visualize a tic tac toe game, taking it one step further with an AI opponent with difficulty selector. This shows my working knowledge of behavior trees and decision making code.",
      image: ticjoe,
      link: "https://tyras-coffee-shop.netlify.app/",
    },

  ];

  export const gameskills = [

    { name: "Technical Documentation", image: documentIcon }
  ];
