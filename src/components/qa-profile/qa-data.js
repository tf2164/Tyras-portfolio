import '../comp.css';

import ji from '../assets/lang-icons/QA/jiii.png';
import posty from '../assets/lang-icons/QA/postmannpng.png';
import selener from '../assets/lang-icons/QA/seleniumimg.png';
import ex from '../assets/lang-icons/QA/excel.png';
import docs from '../assets/lang-icons/Web/documents.png';
import qa1 from '../assets/lang-icons/Web/testcases.png';

const QAProjects = [
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
      title: "QA Github project 1 ",
      subtitle: "Work in Progress",
      technologies: ["Manual Testing", "Excel"],
      description:
        "Manual testing project focused on testing a web application for functionality, usability, and compatibility across different browsers and devices. The project involved creating detailed test cases, executing tests, and documenting results to identify and report bugs effectively.",
      image: qa1,
      link: "https://github.com/tf2164/QA-Testing-Portfolio",
      hideLiveLink: false,
      timelineProjection: "Targeting a QA position before Q3 2026",
      milestone: "Building the foundations of my QA skillset with a focus on manual testing and test case development.",
      buildNotes: [
          "Creating comprehensive test cases to cover all aspects of the web application, including functionality, usability, and compatibility.",
      ],
      // gallery: [prim],
    },


  ];

  export const QASkills = [

    { name: "Excel", image: ex },
    { name: "Selenium", image: selener},
    { name: "JIRA", image: ji},
    { name: "Postman", image: posty},
    { name: "Documentation", image: docs}
  ];

export default QAProjects;
