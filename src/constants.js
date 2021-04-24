import {
    orangeText, purpleText, greenText, render,
    renderLink, get_image, lightBlueText
} from './formatting'

var pwd = '~';

export const getPwd = () => {
    return pwd;
}

export const setPwd = (newDir) => {
    pwd = newDir;
    getPrompt();
}

export const socialOptions = {
    minWidth: 10,
    truncate: true,
    config: {
        url: { maxWidth: 50 }
    },
    columnSplitter: '|', dataTransform: (data) => {
        return data;
    }
};
export const githubProjectOptions = {
    minWidth: 10,
    truncate: true,
    config: {
        description: { maxWidth: 50 },
        lang: { minWidth: 10 },

    },
    columnSplitter: '|',
}

export const getPrompt = () => {
    return `${greenText(`user`)} in ${orangeText(pwd)}\n${lightBlueText('>')}`;
}

export const terminalOptions = {
    greetings: function () {
        return render('David Velho', 'Doom') +
            `\n${greenText(`Hey, I'm David`)}. Type in ${greenText(`man`)} / ${greenText('family-tech-support')} to get started.\n`;
    },
    prompt: getPrompt() ,
    checkArity: false,
    history: true,
    exit: true,
    clear: true,
    warp: false,
    completion: true,
    echoCommand: true,
    keymap: {
    }
};


export const commands = [
    { name: 'cat <arg>', desc: 'Displays the contents of the current file ' },
    { name: 'help', desc: 'Displays the help message' },
    { name: 'ls', desc: 'displays contents of the current directory' },
    { name: 'echo <arg>', desc: 'Prints arg on a newline ' },
    { name: 'scale <arg>', desc: `increases or decreases the terminal font size by 0.2. Usage: ${orangeText('scale up')} or ${orangeText('scale down')}` },
    { name: 'me', desc: `Displays my profile picture` },
    { name: 'getImg <link to image>', desc: 'displays an image on the terminal from the link provided' }

];
export const projects = [
    { 'No.': 1, title: 'xP', description: 'A cross platform C++ native app to test HTTP endpoints, available for Windows, Linux and Mac ', document_url: renderLink('https://github.com/theProgrammerDavid/xP', 'xP') },
    { 'No.': 2, title: 'HasherDB', description: 'My own implementation of an in-memory NoSQL Database written in C++', document_url: renderLink('https://github.com/theProgrammerDavid/MyDB', 'HasherDB') },
    { 'No.': 3, title: 'ThreeJs Playground', description: 'A 3D playground for cool ThreeJs stuff', document_url: renderLink('https://theprogrammerdavid.github.io/three-js-samples', 'Playground') },
    { 'No.': 4, title: 'Portfolio Website', description: 'My own portfolio website built with Jquery and Snowpack', document_url: renderLink('https://github.com/theProgrammerDavid/portfolio', 'Portfolio') },
    { 'No.': 5, title: 'CP and Cheat Sheets', description: 'Collection of Competitive programming practice questions and language cheat sheet', document_url: renderLink('https://theprogrammerdavid.github.io/CC/', 'Cheat Sheets') },

];
export const achievements = [
    { 'No.': 1, title: 'LoR Dean SCOPE VIT, TVS Pilot Project', document_url: renderLink('https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/tvs_cert.jpeg', 'TVS') },
    { 'No.': 2, title: '2nd place Bolt Hack', document_url: renderLink('https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/bolt_hack.jpeg', 'Bolt Hack') },
    { 'No.': 3, title: 'Freelance - OMR Corrector', document_url: renderLink('https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/mahss_omr.jpeg', 'Freelance-Mahss') },
    { 'No.': 4, title: '2nd place Cisco CTF', document_url: renderLink('https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/ciscoCTF.png', 'Cisco CTF') },
    { 'No.': 5, title: 'Samsung PRISM Ambient Temp Detection', document_url: renderLink('https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/OD25VIT_David_.pdf', 'Samsung PRISM') },
    { 'No.': 6, title: 'Camcann Systems Programmer Intern', document_url: renderLink('https://raw.githubusercontent.com/theProgrammerDavid/portfolio/master/static/camcann.jpg', 'CamCann SDE Intern') }

];
export const socials = [
    { 'No': 1, website: 'Github', url: 'https://github.com/theProgrammerDavid' },
    { 'No': 2, website: 'StackOverflow', url: 'https://stackoverflow.com/users/14312583/goanmafia' },
    { 'No': 3, website: 'Artstation', url: 'https://www.artstation.com/david_velho' },
    { 'No': 4, website: '500px', url: 'https://500px.com/p/david_velho?view=photos' },
    { 'No': 5, website: 'Linkedin', url: 'https://www.linkedin.com/in/david-velho-aba95a173/' }
]
export const myPic = () => { return get_image('https://avatars1.githubusercontent.com/u/35698009?s=460&u=988e5ad85edb20cf16aaeeb8ea3e8b44088a582c&v=4') }

export const scaleLimits = {
    scaleUp: 2.4,
    scaleDown: 1.0,
}

export const folders = [
    { permission: 'drwxrwxr-x', owner: 'david', name: lightBlueText('projects'), },
    { permission: 'drwxrwxr-x', owner: 'david', name: lightBlueText('certificates'), },
    { permission: 'drwxrwxr-x', owner: 'david', name: lightBlueText('achievements'), },
    { permission: 'drwxrwxr-x', owner: 'david', name: lightBlueText('socials'), },
    { permission: 'drwxrwxr-x', owner: 'david', name: lightBlueText('resume') },
    { permission: '.rw-rw-r--', owner: 'david', name: 'languages' },
    { permission: '.rw-rw-r--', owner: 'david', name: 'frameworks' },
    { permission: '.rw-rw-r--', owner: 'david', name: 'me.jpg' },


]

export const langs = [
    'https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A',
    'https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white',
    'https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white',
    'https://img.shields.io/badge/c%20-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white',
    'https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white',

]

export const frameworks = [
    'https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge',
    'https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB',
    'https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white',
    'https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white',
    'https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white',
    'https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black',
    'https://img.shields.io/badge/OpenGL%20-%23FFFFFF.svg?&style=for-the-badge&logo=opengl',

]