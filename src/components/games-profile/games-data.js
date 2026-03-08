// src/data.js
import '../comp.css';

import prim from '../assets/project-imgs/Prim.png';
import unityIcon from '../assets/lang-icons/unityicon.png';
import CIcon from '../assets/lang-icons/c-sharp.png';
import blender from '../assets/lang-icons/blendlogo.png';
import flappy from '../assets/project-imgs/flappybird.jpg';

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
      title: "Primrose",
      subtitle: "Work in Progress",
      technologies: ["Unity", "C#", "Blender"],
      description:
        "A cozy crafting game focused on atmosphere, exploration, and handcrafted interactions.",
      image: prim,
      link: "",
      hideLiveLink: true,
      developmentStage: "Prototype / Vertical Slice",
      timelineProjection: "Targeting a first playable demo in Q3 2026.",
      milestone: "Building the core loop and environment pipeline.",
      plannedPlatforms: ["PC", "Consoles"],
      buildNotes: [
         "Building a modular character customization system with interchangeable assets.",
       "Creating low-poly stylized assets in Blender and integrating them into Unity,",
        "Iterating on the core gameplay loop to ensure it feels engaging and satisfying.",
      ],
      // gallery: [prim],
    },
    {
      title: "Flappy Bird Clone",
      subtitle: "Work in Progress",
      technologies: ["Unity", "C#"],
      description:
        "A faithful recreation of the classic Flappy Bird game, built to learn Unity and C#.",
      image: flappy,
      link: "https://example.com/flappy-bird-clone",
      hideLiveLink: true,
      // developmentStage: "Completed",
      // timelineProjection: "Completed in Q1 2024.",
      // milestone: "Successfully recreated the core mechanics and polished the gameplay.",
      plannedPlatforms: ["Web"],  
      buildNotes: [
        "Creating for learning purposes, this project helped me understand Unity's physics system and C# scripting.",
      ],
    }

  ];

  export const gameskills = [

    { name: "Unity", image: unityIcon },
    { name: "C#", image: CIcon
     },
     { name: "Blender", image: blender}
  ];
