import {
    redText, greenText,
    orangeText, purpleText,
    turquoiseText, render,
    renderLink
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

];
export const achievements = [
    { 'No.': 1, document_url: '', title: '' },
];
const socials = [
    { 'No': 1, website: 'Github', url: 'https://github.com/theProgrammerDavid' },
    { 'No': 2, website: 'StackOverflow', url: 'https://stackoverflow.com/users/14312583/goanmafia' },

]
