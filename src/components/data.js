// src/data.js
import './comp.css';

import atomIcon from '../components/assets/lang-icons/atom.png';
import documentIcon from '../components/assets/lang-icons/documents.png';
import htmlIcon from '../components/assets/lang-icons/html.png';
import nodeIcon from '../components/assets/lang-icons/nodejs.png';
import pythonIcon from '../components/assets/lang-icons/python.png';
import cssIcon from '../components/assets/lang-icons/social.png';
import sqlIcon from '../components/assets/lang-icons/sql-server.png';
import swiftIcon from '../components/assets/lang-icons/swift.png';
import jsIcon from '../components/assets/lang-icons/javascript.png';
import todo from './assets/project-imgs/to-do-imh.png'



export const projects = [
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
    // {
    //   title: "DevChat",
    //   subtitle: "React and Firebase",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //   image: "./project-3.gif",
    //   link: "",
    // },
    {
      title: "List Track",
      subtitle: "Javascript DOM",
      description:
        "Utilizing local JSON storage to save lists for easy reload. I built this project to focus on Javascript DOM manipulation",
      image: todo ,
      link: "https://main--list-tracker-tyra.netlify.app/",
    },
  ];

  export const skills = [
    { name: "HTML/CSS", image:htmlIcon, cssIcon },
    { name: "JavaScript", image: jsIcon },
    { name: "React", image: atomIcon },
    { name: "Python", image: pythonIcon},
    { name: "Swift", image: nodeIcon },
    { name: "SQL", image: sqlIcon },
    { name: "NodeJS", image:  nodeIcon },
    { name: "Swift", image: swiftIcon  },
    { name: "Technical Documentation", image: documentIcon }
  ];

  
