import '../comp.css';

import atomIcon from '../assets/lang-icons/atom.png';
import documentIcon from '../assets/lang-icons/documents.png';
import htmlIcon from '../assets/lang-icons/html.png';
import nodeIcon from '../assets/lang-icons/nodejs.png';
import pythonIcon from '../assets/lang-icons/python.png';
import sqlIcon from '../assets/lang-icons/sql-server.png';
import swiftIcon from '../assets/lang-icons/swift.png';
import jsIcon from '../assets/lang-icons/javascript.png';
import ticjoe from '../assets/project-imgs/coffee-shop-main.png';
import javaIcon from '../assets/lang-icons/java.png';
import CIcon from '../assets/lang-icons/c-sharp.png';
import multi from '../assets/project-imgs/multiplicationstation.png';


export const webprojects = [
  {
    title: "Coffee Shop Game",
    subtitle: "Coffee Shop Game",
    technologies: ["React", "AI", "CSS Animations"],
    description:
      "React Application that utilizes CSS Animations to visualize a tic tac toe game, taking it one step further with an AI opponent with difficulty selector. This shows my working knowledge of behavior trees and decision making code.",
    image: ticjoe,
    link: "https://tyras-coffee-shop.netlify.app/",
  },
  {
    title: "Math Intertensive",
    subtitle: "For real students to practice math skills",
    technologies: ["Typescript", "Next.js", "Supabase"],
    description:
      "A web application designed to help students practice and improve their math skills through interactive exercises and quizzes. Built with a focus on user engagement and educational effectiveness.",
    image: multi,
    link: "https://multiplicationstation.com/",
  },

];
  
export const webskills = [
  { name: "HTML/CSS", image: htmlIcon },
  { name: "Java", image: javaIcon },
  { name: "C#", image: CIcon },
  { name: "JavaScript", image: jsIcon },
  { name: "React", image: atomIcon },
  { name: "Python", image: pythonIcon },
  { name: "SQL", image: sqlIcon },
  { name: "NodeJS", image: nodeIcon },
  { name: "Swift", image: swiftIcon },
  { name: "Technical Documentation", image: documentIcon },
];
