import {
    orangeText, purpleText,
    renderLink, get_image
} from './formatting'

export const commands = [
    { 'show-projects': 'populates a list of projects from Github' },
    { 'show-resume': 'shows resume in a new tab' },
    { 'show-socials': 'follow me on social media' },
    { 'show-certs': 'List of certificates/achievements' },
    { 'alert': `opens a browser based alert . Usage: ${orangeText('alert')} ${purpleText('some text with or without spaces')}` },
    { 'scale <arg>': `increases or decreases the terminal font size by 0.2. Usage: ${orangeText('scale up')} or ${orangeText('scale down')}` },
    { 'me': `Displays my profile picture` },

];
export const projects = [
    { 'No.': 1, title: 'xP', description: 'A cross platform C++ native app to test HTTP endpoints, available for Windows, Linux and Mac ', document_url: renderLink('https://github.com/theProgrammerDavid/xP', 'xP') },
    { 'No.': 2, title: 'HasherDB', description: 'My own implementation of an in-memory NoSQL Database written in C++', document_url: renderLink('https://github.com/theProgrammerDavid/MyDB', 'HasherDB') },
    { 'No.': 3, title: 'ThreeJs Playground', description: 'A 3D playground for cool ThreeJs stuff', document_url: renderLink(' https://theprogrammerdavid.github.io/three-js-samples/dist/index.html', 'Playground') },
    { 'No.': 4, title: 'Portfolio Website', description: 'My own portfolio website built with Jquery and Snowpack', document_url: renderLink(' https://github.com/theProgrammerDavid/portfolio', 'Portfolio') },



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