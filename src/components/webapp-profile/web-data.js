import '../comp.css';

import atomIcon from '../assets/lang-icons/Web/atom.png';
import documentIcon from '../assets/lang-icons/Web/documents.png';
import htmlIcon from '../assets/lang-icons/Web/html.png';
import nodeIcon from '../assets/lang-icons/Web/nodejs.png';
import pythonIcon from '../assets/lang-icons/Web/python.png';
import sqlIcon from '../assets/lang-icons/Web/sql-server.png';
import swiftIcon from '../assets/lang-icons/Web/swift.png';
import jsIcon from '../assets/lang-icons/Web/javascript.png';

import javaIcon from '../assets/lang-icons/Web/java.png';
import CIcon from '../assets/lang-icons/Web/c-sharp.png';
import multi from '../assets/project-imgs/multiplication.png';
import spotify from '../assets/project-imgs/SpotifyAPI.png';

export const webprojects = [
  // {
  //   title: "",
  //   subtitle: "",
  //   technologies: ["React", "AI", "CSS Animations"],
  //   description:
  //     "",
  //   image: ticjoe,
  //   link: "",
  // },
  {
    title: "Math Intertensive",
    subtitle: "For real students to practice math skills",
    technologies: ["Typescript", "Next.js", "Supabase"],
    description:
      "A web application designed to help students practice and improve their math skills through interactive exercises and quizzes. Built with a focus on user engagement and educational effectiveness.",
    image: multi,
    link: "https://multiplicationstation.com/",
  },

    {
    title: "Current Spotify Wrapped",
    subtitle: "Used Spotify's API to create a web app that presents a user's current top artists and tracks.",
    technologies: ["API", "React Vite", "Typescript"],
    description:
      "A web application that connects to the Spotify API to retrieve and display a user's current top artists and tracks. The app provides an interactive interface for users to explore their music preferences and discover new content based on their listening habits.",
    image: spotify,
    link: "https://spotifyapi-ctdream.netlify.app/",
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
