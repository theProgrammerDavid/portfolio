declare var term: any;
declare var $: any;

import {
  orangeText,
  purpleText,
  greenText,
  render,
  renderLink,
  get_image,
  lightBlueText,
} from "./formatting";

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
    renderLink("https://github.com/theProgrammerDavid/PostBaby", "PostBaby")
  ),
  buildProject(
    "HasherDB",
    "My own implementation of an in-memory NoSQL Database written in C++",
    renderLink("https://github.com/theProgrammerDavid/MyDB", "HasherDB")
  ),
  buildProject(
    "ThreeJs Playground",
    "A 3D playground for cool ThreeJs stuff",
    renderLink(
      "https://theprogrammerdavid.github.io/three-js-samples",
      "Playground"
    )
  ),
  buildProject(
    "Portfolio Website",
    "My own portfolio website built with Jquery and Snowpack",
    renderLink("https://github.com/theProgrammerDavid/portfolio", "Portfolio")
  ),
  buildProject(
    "CP and Cheat Sheets",
    "Collection of Competitive programming practice questions and language cheat sheet",
    renderLink("https://cheatsheet.davidvelho.tech/", "Cheat Sheets")
  ),
  buildProject(
    "Unify PDF Merger",
    "Client side PDF merger and save as compressed zip. No file uploads. All compression done in browser.",
    renderLink("https://unify.davidvelho.tech/", "Unify PDF Merger")
  ),
  buildProject(
    "Dicer Computing Framework",
    "Easy to use cross platform distributed computing framework to automatically delegate jobs to slave computers",
    renderLink("https://github.com/theProgrammerDavid/dicer/tree/dev", "DICER")
  ),
];

export const achievements = [
  buildAchievement(
    "LoR Dean SCOPE VIT, TVS Pilot Project",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/tvs_cert.jpeg",
      "TVS"
    )
  ),
  buildAchievement(
    "2nd place Bolt Hack",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/bolt_hack.jpeg",
      "Bolt Hack"
    )
  ),
  buildAchievement(
    "Freelance - OMR Corrector",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/mahss_omr.jpeg",
      "Freelance-Mahss"
    )
  ),
  buildAchievement(
    "2nd place Cisco CTF",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/ciscoCTF.png",
      "Cisco CTF"
    )
  ),
  buildAchievement(
    "Samsung PRISM Ambient Temp Detection",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/OD25VIT_David_.pdf",
      "Samsung PRISM"
    )
  ),
  buildAchievement(
    "Camcann Systems Programmer Intern",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/camcann.jpg",
      "CamCann SDE Intern"
    )
  ),
  buildAchievement(
    "Introduction to High Performance and Parallel Processing Certification",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/coursera_hpc.pdf",
      "Certification PDF"
    )
  ),
  buildAchievement(
    "Google Cloud Fundamentals",
    renderLink(
      "https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/Coursera HT9P8F555YLP.pdf",
      "Google Cloud Fundamentals"
    )
  ),
];
export const socials = [
  buildSocial("Github", "https://github.com/theProgrammerDavid"),
  buildSocial(
    "Stack Overflow",
    "https://stackoverflow.com/users/14312583/goanmafia"
  ),
  buildSocial("Artstation", "https://www.artstation.com/david_velho"),
  buildSocial("Artstation", "https://www.artstation.com/david_velho"),
  buildSocial("500px", "https://500px.com/p/david_velho?view=photos"),
  buildSocial("Linkedin", "https://www.linkedin.com/in/david-velho-aba95a173/"),
  buildSocial("dev.to", "https://dev.to/theprogrammerdavid"),
];

export const publications = [
  buildPublication(
    "covIoT: Integrated Patient Monitoring And Sanitization System",
    "https://ieeexplore.ieee.org/document/9767863"
  ),
  buildPublication(
    "COVID vision: An integrated face mask detector and social distancing tracker",
    "https://www.sciencedirect.com/science/article/pii/S2666307422000110?via%3Dihub"
  ),
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

export const langs = [
  buildLanguage(
    "Javascript",
    "https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
  ),
  buildLanguage(
    "C++",
    "https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
  ),
  buildLanguage(
    "C",
    "https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white"
  ),
  buildLanguage(
    "Java",
    "https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white"
  ),
  buildLanguage(
    "Python",
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
  ),
];

export const frameworks = [
  buildFramework(
    "ExpressJs",
    "https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"
  ),
  buildFramework(
    "React",
    "https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
  ),
  buildFramework(
    "Bootstrap",
    "https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"
  ),
  buildFramework(
    "Material UI",
    "https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"
  ),
  buildFramework(
    "Redux",
    "https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"
  ),
  buildFramework(
    "Webpack",
    "https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black"
  ),
  buildFramework(
    "OpenGL",
    "https://img.shields.io/badge/OpenGL%20-%23FFFFFF.svg?&style=for-the-badge&logo=opengl"
  ),
];

export const other = [
  buildOther(
    "CMake",
    "https://img.shields.io/badge/CMake-%23008FBA.svg?&style=for-the-badge&logo=cmake&logoColor=white"
  ),
  buildOther(
    "Docker",
    "https://img.shields.io/badge/docker-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"
  ),
  buildOther(
    "Blender",
    "https://img.shields.io/badge/blender-%23F5792A.svg?&style=for-the-badge&logo=blender&logoColor=white"
  ),
  buildOther(
    "Git",
    "https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"
  ),
  buildOther(
    "Google Cloud",
    "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?&style=for-the-badge&logo=google-cloud&logoColor=white"
  ),
  buildOther(
    "Heroku",
    "https://img.shields.io/badge/heroku-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"
  ),
  buildOther(
    "Digital Ocean",
    "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?&style=for-the-badge&logo=digitalOcean&logoColor=white"
  ),
  buildOther(
    "Nginx",
    "https://img.shields.io/badge/nginx-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"
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
