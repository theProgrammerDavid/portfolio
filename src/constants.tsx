declare var term: any;
declare var $: any;

import React from "react";
import {
  Achievement,
  iBlog,
  iExperience,
  iNavBarData,
  Publication,
} from "./models";
import { AboutMe, Achievements, Blgos, LandingSection, Projects, Publications, WorkExperience } from "./simplified/sections";
import {
  orangeText,
  purpleText,
  greenText,
  render,
  renderLink,
  get_image,
  lightBlueText,
} from "./terminal/formatting";

import {
  buildSocial,
  buildLanguage,
  buildFramework,
  buildFolder,
  buildCommand,
  buildOther,
  buildProject,
  buildAchievement,
  buildPublication,
  buildCertification,
  generateColor,
} from "./util";
var pwd: string = "~";

export const cdIn = (dirName: string) => {
  pwd = `${pwd}/${dirName}`;
};

export const cdOut = () => {
  let n = pwd.lastIndexOf("/");
  pwd = pwd.substring(0, n);
  getPrompt();
};

export const getPwd = () => {
  return pwd;
};

export const setPwd = (newDir: string) => {
  pwd = newDir;
  getPrompt();
};

export const socialOptions = {
  minWidth: 10,
  truncate: true,
  config: {
    url: { maxWidth: 50 },
  },
  columnSplitter: "|",
};
export const githubProjectOptions = {
  config: {
    description: {
      maxWidth: 60,
    },
  },
};

export const getPrompt = () => {
  return `${greenText(`user`)} in ${orangeText(pwd)}\n${lightBlueText(">")}`;
};

export const commandList = [
  "cd",
  "rm",
  "ls",
  "touch",
  "cat",
  "scale",
  "exit",
  "clear",
];

export const commandDesc = [
  buildCommand("cat <arg>", "Displays the contents of the current file "),
  buildCommand("cd", "you know what it does "),
  buildCommand("help", "Displays the help message"),
  buildCommand("ls", "displays contents of the current directory"),
  buildCommand("echo <arg>", "Prints arg on a newline "),
  buildCommand("cd <arg>", "enter a folder"),
  buildCommand("rm <arg>", "delete the specified file or folder"),
  buildCommand(
    "scale <arg>",
    `increases or decreases the terminal font size by 0.2. Usage: ${orangeText(
      "scale up"
    )} or ${orangeText("scale down")}`
  ),
  buildCommand(
    "touch <arg>",
    "creates a file with name <arg> and prompts you to enter the file contents"
  ),
  buildCommand("resume", "Opens resume in a new window"),
  buildCommand("..", "Traverse one directory up"),
  buildCommand("me", `Displays my profile picture`),
  buildCommand(
    "getImg <link to image>",
    "displays an image on the terminal from the link provided"
  ),
];

export const projects = [
  buildProject(
    "PostBaby",
    "Postman alternative. A cross platform C++ native app to test HTTP endpoints, available for Windows, Linux and Mac ",
    renderLink("https://github.com/theProgrammerDavid/PostBaby", "PostBaby"),
    ["c++"]
  ),
  buildProject(
    "HasherDB",
    "My own implementation of an in-memory NoSQL Database written in C++",
    renderLink("https://github.com/theProgrammerDavid/MyDB", "HasherDB"),
    ["c++", "js"]
  ),
  buildProject(
    "ThreeJs Playground",
    "A 3D playground for cool ThreeJs stuff",
    renderLink(
      "https://theprogrammerdavid.github.io/three-js-samples",
      "Playground"
    ),
    ["js", "html5", "css3"]
  ),
  buildProject(
    "Portfolio Website",
    "My own portfolio website built with Jquery and Snowpack",
    renderLink("https://github.com/theProgrammerDavid/portfolio", "Portfolio"),
    ["js", "html5", "css3"]
  ),
  buildProject(
    "CP and Cheat Sheets",
    "Collection of Competitive programming practice questions and language cheat sheet",
    renderLink("https://cheatsheet.davidvelho.tech/", "Cheat Sheets")
  ),
  buildProject(
    "Unify PDF Merger",
    "Client side PDF merger and save as compressed zip. No file uploads. All compression done in browser.",
    renderLink("https://unify.davidvelho.tech/", "Unify PDF Merger"),
    ["js", "html5", "css3"]
  ),
  buildProject(
    "Dicer Framework",
    "Easy to use cross platform distributed computing framework to automatically delegate jobs to slave computers",
    renderLink("https://github.com/theProgrammerDavid/dicer/tree/dev", "DICER"),
    ["js", "node-js"]
  ),
];

export const achievements: Array<Achievement> = [
  buildAchievement(
    "LoR Dean SCOPE VIT, TVS Pilot Project",
    renderLink(
      "https://res.cloudinary.com/dkgduqw0c/image/upload/v1674308105/portfolio/tvs_cert_ebhhu3.jpg",
      "TVS"
    )
  ),
  buildAchievement(
    "2nd place Bolt Hack",
    renderLink(
      "https://res.cloudinary.com/dkgduqw0c/image/upload/v1674308105/portfolio/bolt_hack_ljf3hu.jpg",
      "Bolt Hack"
    )
  ),
  buildAchievement(
    "Freelance - OMR Corrector",
    renderLink(
      "https://res.cloudinary.com/dkgduqw0c/image/upload/v1674308104/portfolio/mahss_omr_kkeyda.jpg",
      "Freelance-Mahss"
    )
  ),
  buildAchievement(
    "Samsung PRISM Ambient Temp Detection",
    renderLink(
      "https://res.cloudinary.com/dkgduqw0c/image/upload/v1674308105/portfolio/OD25VIT_David__pueyw4.png",
      "Samsung PRISM"
    )
  ),
  buildAchievement(
    "2nd place Cisco CTF",
    renderLink(
      "https://res.cloudinary.com/dkgduqw0c/image/upload/v1674308105/portfolio/ciscoCTF_pzmwtr.png",
      "Cisco CTF"
    )
  ),

  buildAchievement(
    "Camcann Systems Programmer Intern",
    renderLink(
      "https://res.cloudinary.com/dkgduqw0c/image/upload/v1674308105/portfolio/camcann_ocv8k6.jpg",
      "CamCann SDE Intern"
    )
  ),
];
export const socials = [
  buildSocial(
    "Github",
    "https://github.com/theProgrammerDavid",
    "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
  ),
  buildSocial(
    "Stack Overflow",
    "https://stackoverflow.com/users/14312583/goanmafia",
    "https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white"
  ),
  buildSocial(
    "Artstation",
    "https://www.artstation.com/david_velho",
    "https://img.shields.io/badge/-ArtStation-2A79C6?style=flat-square&logo=ArtStation&logoColor=white"
  ),
  buildSocial(
    "500px",
    "https://500px.com/p/david_velho?view=photos",
    "https://img.shields.io/badge/500px-0099E5?logo=500px&logoColor=fff&style=flat"
  ),
  buildSocial(
    "Linkedin",
    "https://www.linkedin.com/in/david-velho-aba95a173/",
    "https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
  ),
  buildSocial(
    "dev.to",
    "https://dev.to/theprogrammerdavid",
    "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white"
  ),
];

export const publications: Array<Publication> = [
  // buildPublication(
  {
    name: "covIoT: Integrated Patient Monitoring And Sanitization System",
    url: "https://ieeexplore.ieee.org/document/9767863",
    abstract:
      "COVID-19 is a global pandemic afflicting our society. We propose covIoT, a novel Arduino-based automatic hand sanitizer dispenser, integrated with an oximeter, a heart rate monitor, a non-contact body temperature sensor, and voice assistant feedback. This system can be deployed as an end-to-end COVID patient monitoring system and also for automated sanitization. The system was tested on 100 people to evaluate its performance. The mean absolute error and root mean square error values were found to be 0.79 and 1.03 for the oximeter, 1.22 and 0.70 for the heart rate monitor and 1.07 and 1.28 for the body temperature monitor, respectively, compared to the industry-standard devices. These low error values indicate the high accuracy of our proposed system. We believe this is the first low-cost integrated patient monitoring and sanitization system with vocal feedback, to increase accessibility and ultimately helps combat the virus.",
    doi: "10.1109/IC3IOT53935.2022.9767863",
  },
  // ),

  {
    name: "COVID vision: An integrated face mask detector and social distancing tracker",
    url: "https://www.sciencedirect.com/science/article/pii/S2666307422000110?via%3Dihub",
    abstract:
      "The effects of the global pandemic are wide spreading. Many sectors like tourism and recreation have been temporarily suspended, but sectors like construction, development and maintenance have not been halted due to their importance to society. Such projects involve people working together in close proximity, thus leaving them susceptible to infection. It is recommended that people maintain social distance and wear a face mask to reduce the spread of COVID-19. To this effect, we propose COVID Vision - a system consisting of convolutional neural networks (CNNs) for a face mask detector, a social distancing tracker and a face recognition model to help people rely less on personnel and maintain the COVID-19 norms and restrictions. COVID Vision is able to detect, with great accuracy, if a person is wearing a mask or just covering their mouth with their hands as well as people's social distancing infractions from a live video in real time. It can also maintain a database of people who have tested positive for COVID-19 or are at risk using facial recognition.",
    doi: "10.1016/j.ijcce.2022.05.001",
  },
];

export const myPic = () => {
  return get_image(
    "https://avatars1.githubusercontent.com/u/35698009?s=460&u=988e5ad85edb20cf16aaeeb8ea3e8b44088a582c&v=4"
  );
};

export const scaleLimits = {
  scaleUp: 2.4,
  scaleDown: 1.0,
};

export const folders = [
  buildFolder("drwxrwxr-x", "david", lightBlueText("projects")),
  buildFolder("drwxrwxr-x", "david", lightBlueText("certificates")),
  buildFolder("drwxrwxr-x", "david", lightBlueText("achievements")),
  buildFolder("drwxrwxr-x", "david", lightBlueText("socials")),
  buildFolder("drwxrwxr-x", "david", lightBlueText("resume")),
  buildFolder(".rw-rw-r--", "david", "languages"),
  buildFolder(".rw-rw-r--", "david", "frameworks"),
  buildFolder(".rw-rw-r--", "david", "others"),
  buildFolder(".rw-rw-r--", "david", "me.jpg"),
];

export const certifications = [
  buildCertification(
    "Introduction to High Performance and Parallel Processing Certification",
    "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/coursera_hpc.pdf"
  ),
  buildCertification(
    "Google Cloud Fundamentals",
    "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/Coursera HT9P8F555YLP.pdf"
  ),
  buildCertification(
    "Microsoft Future Ready Talent",
    "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/FRT_Certificate.pdf"
  ),
];

export const langs = [
  buildLanguage(
    "Javascript",
    "https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A",
    "Expert"
  ),
  buildLanguage(
    "C++",
    "https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white",
    "Expert"
  ),
  buildLanguage(
    "C",
    "https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white",
    "Expert"
  ),
  buildLanguage(
    "Java",
    "https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white",
    "Experienced"
  ),
  buildLanguage(
    "Python",
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    "Experienced"
  ),
];

export const frameworks = [
  buildFramework(
    "ExpressJs",
    "https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge",
    "Experienced"
  ),
  buildFramework(
    "React",
    "https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
    "Expert"
  ),
  buildFramework(
    "Bootstrap",
    "https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white",
    "Experienced"
  ),
  buildFramework(
    "Material UI",
    "https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white",
    "Experienced"
  ),
  buildFramework(
    "Redux",
    "https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white",
    "Experienced"
  ),
  buildFramework(
    "Webpack",
    "https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black",
    "Experienced"
  ),
  buildFramework(
    "OpenGL",
    "https://img.shields.io/badge/OpenGL%20-%23FFFFFF.svg?&style=for-the-badge&logo=opengl",
    "Beginner"
  ),
];

export const other = [
  buildOther(
    "CMake",
    "https://img.shields.io/badge/CMake-%23008FBA.svg?&style=for-the-badge&logo=cmake&logoColor=white",
    "Expert"
  ),
  buildOther(
    "Docker",
    "https://img.shields.io/badge/docker-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white",
    "Expert"
  ),
  buildOther(
    "Blender",
    "https://img.shields.io/badge/blender-%23F5792A.svg?&style=for-the-badge&logo=blender&logoColor=white",
    "Experienced"
  ),
  buildOther(
    "Git",
    "https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white",
    "Expert"
  ),
  buildOther(
    "Google Cloud",
    "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?&style=for-the-badge&logo=google-cloud&logoColor=white",
    "Experienced"
  ),
  buildOther(
    "Heroku",
    "https://img.shields.io/badge/heroku-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white",
    "Experienced"
  ),
  buildOther(
    "Digital Ocean",
    "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?&style=for-the-badge&logo=digitalOcean&logoColor=white",
    "Experienced"
  ),
  buildOther(
    "Nginx",
    "https://img.shields.io/badge/nginx-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white",
    "Experienced"
  ),
];

export const readmeHelp = () => {
  let instructions = `
  This is my portfolio website themed around a [WIP] terminal. Hope you enjoyed it.
  The instructions are in a file called ${greenText(
    "README"
  )}. To view it's contents, type in ${orangeText("cat README")}

  Below are some of the supported commands, accessible by entering ${greenText(
    "man"
  )}. Since it's a terminal, you can manipulate files as you please and traverse directories 
  `;
  return instructions;
};

export const navBarData: Array<iNavBarData> = [
  {
    name: "Home",
    idTag: "landingPage",
    component: <LandingSection />
  },
  {
    name: "About Me",
    idTag: "aboutMe",
    component: <AboutMe />

  },
  {
    name: "Work Experience",
    idTag: "workExperience",
    component: <WorkExperience />
  },
  {
    name: "Projects",
    idTag: "projects",
    component: <Projects />,
    // hide: true
  },
  {
    name: "Publications",
    idTag: "publications",
    component: <Publications />
  },
  {
    name: "Achievements",
    idTag: "achievements",
    component: <Achievements />
  },
  {
    name: "Blogs",
    idTag: "blogs",
    component: <Blgos />
  },
  // {
  //   name: "Contact Me",
  //   idTag: "contactMe",
  // },
];

export const experience: Array<iExperience> = [
  {
    company: "ISS Governance",
    position: "Junior Analyst",
    description:
      "Working with React, NodeJS and Spring boot in the DataDesk team as a full stack developer, responsible for maintaining multiple cutting edge microservices along with legacy applications.",
    location: "Mumbai",
    start: "Jun 2022",
  },
  {
    company: "Samsung PRISM",
    position: "Student Research Project",
    description:
      "Worked with NodeJS, Java android and SQL for On Device Ambient Temperature Estimation without the use of external specialized hardware for future generations of SAMSUNG phones ",
    location: "VIT Vellore, Remote",
    start: "Dec 2019",
    end: "Aug 2020",
  },
  {
    company: "Camcann Smart Systems",
    position: "SDE Intern",
    description:
      "Develop computer vision  systems using C++, CMake, Python, OpenVino and the Intel NCS 2",
    location: "VIT Vellore Incubator",
    start: "Dec 2019",
    end: "Apr 2020",
  },
  {
    company: "IT-Hub, Government. of Goa",
    position: "SDE Intern",
    description:
      "Worked on government. projects and education portals for use in local schools with React, NodeJS and MongoDB",
    location: "Goa",
    start: "May 2019",
    end: "Jun 2019",
  },
  {
    company: "TVS Pilot Project",
    position: "Student Developer",
    description: "Developed a Proof-of-Concept system that can detect defects in the manufacturing process of TVS motor vehicles on the assembly line, using Computer Vision and Machine Learning.",
    location: "VIT Vellore",
    start: "Jan 2019",
    end: "Mar 2019",
  }
];

export const experienceColorArray = generateColor(
  "#8181fb",
  "#ff6b6b",
  experience.length * 2
).map((color) => `#${color}`);
