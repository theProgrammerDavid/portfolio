import {
    redText, greenText,
    orangeText, purpleText,
    turquoiseText, render,
    renderLink, get_image
} from './formatting'

export var fontSize = 1.5;
export const commands = [
    { 'show-projects': 'populates a list of projects from Github' },
    { 'show-resume': 'shows resume in a new tab' },
    { 'show-social': 'follow me on social media' },
    { 'show-achievements': 'List of achievements' },
    { 'alert': `opens a browser based alert . Usage: ${orangeText('alert')} ${purpleText('some text with or without spaces')}` },
    { 'font-size-up': 'increases terminal font size by 0.2' },
    { 'font-size-down': 'decreases terminal font size by 0.2' },
    { 'me': `Displays my profile picture` },

];
export const achievements = [
    { 'No.': 1, title: 'LoR Dean SCOPE VIT, TVS Pilot Project', document_url: renderLink('https://static.davidvelho.tech/tvs_cert.jpeg', 'TVS') },
    { 'No.': 2, title: '2nd place Bolt Hack', document_url: renderLink('https://static.davidvelho.tech/bolt_hack.jpeg', 'Bolt Hack') },
    { 'No.': 3, title: 'Freelance - OMR Corrector', document_url: renderLink('https://static.davidvelho.tech/mahss_omr.jpeg', 'Freelance-Mahss') },
    { 'No.': 4, title: '2nd place Cisco CTF', document_url: renderLink('https://static.davidvelho.tech/CiscoCTF.png', 'Cisco CTF') },

];
export const socials = [
    { 'No': 1, website: 'Github', url: 'https://github.com/theProgrammerDavid' },
    { 'No': 2, website: 'StackOverflow', url: 'https://stackoverflow.com/users/14312583/goanmafia' },

]
export const myPic = () => { return get_image('https://avatars1.githubusercontent.com/u/35698009?s=460&u=988e5ad85edb20cf16aaeeb8ea3e8b44088a582c&v=4') }