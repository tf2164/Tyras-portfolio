
import '../comp.css';

import and from '../assets/lang-icons/mobile/androidstudio.png';
import exp from '../assets/lang-icons/mobile/expo.png';
import swifty from '../assets/lang-icons/mobile/swift.png';
import react from '../assets/lang-icons/Web/atom.png';
import nully from '../assets/project-imgs/null.jpg';


export var mobileprojects = [
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
      title: "Vacation Tracker",
      subtitle: "List Track",
      technologies: ["JavaScript", "DOM Manipulation", "Local JSON Storage"],
      description:
        "A mobile-focused web application designed to help users track and manage their vacation days. The app allows users to create a personalized vacation list, update it with new entries, and visually track their remaining vacation days with an engaging interface.",
      image: nully,
      link: "null",
      mobileFocus: "Offline-first list interactions with fast touch-friendly updates and fun visual tracking of vacations.",
      appStoreTarget: "locally deployed now, native wrapper planned",
      releaseTimeline: "Beta polish by Q4 2026",
      mobilePlatforms: ["Responsive Web", "Android (planned)", "iOS (planned)"],
      buildNotes: [
        "Implemented a dynamic vacation list with JavaScript and DOM manipulation, allowing users to add, edit, and delete entries seamlessly.",
        "Utilized local JSON storage to save user data persistently, ensuring that vacation information is retained across sessions without the need for a backend.",
        "Designed a visually engaging interface with CSS animations to track remaining vacation days, providing users with an intuitive and enjoyable experience.",
      ]
    },

    {
      title: "TBA",
      subtitle: "Gig Worker Discovery Platform",
      technologies: ["React Native", "Expo", "JavaScript"],
      description:
        "A DoorDash-inspired mobile app built to help independent contractors establish an online presence and connect with local clients. Designed for gig workers who rely on word-of-mouth but lack digital visibility.",
      image: nully,
      link: null,
      mobileFocus: "Profile-first experience optimized for quick contractor discovery and easy client contact flows.",
      appStoreTarget: "In development — App Store and Google Play targeted",
      releaseTimeline: "Alpha by Q3 2026",
      mobilePlatforms: ["iOS", "Android"],
      buildNotes: [
        "Modeling service listing and contractor profile flows after proven food delivery UX patterns.",
        "Focus on low-friction onboarding so contractors with no web experience can set up a profile quickly.",
        "Planning review and rating system to help contractors build credibility over time."
      ]
    },



  ];

  export var mobileskills = [
    { name: "Swift", image: swifty },
    { name: "Android Studio", image: and },
    { name: "Expo Go", image: exp },
    { name: "React Native", image: react },
  ];
