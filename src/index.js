import columnify from 'columnify';
import {
  redText, greenText,
  orangeText, purpleText,
  turquoiseText, render,
  renderLink
} from './formatting'

import {
  githubProjectOptions, terminalOptions,
  socialOptions
} from './options';
// figlet.defaults({ fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/' });
// figlet.preloadFonts(["Standard", "Slant"], ready);

async function loadFonts() {
  figlet.defaults({ fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/' });
  figlet.preloadFonts(["Standard", "Slant", "Doom"], ready);
}
loadFonts();

var term;
var fontSize = 1.5;
const commands = [
  { 'show-projects': 'populates a list of projects from Github' },
  { 'show-resume': 'shows resume in a new tab' },
  { 'show-social': 'follow me on social media' },
  { 'alert': `opens a browser based alert . Usage: ${orangeText('alert')} ${purpleText('some text with or without spaces')}` },
  { 'font-size-up': 'increases terminal font size by 0.2' },
  { 'font-size-down': 'decreases terminal font size by 0.2' },

];

const socials = [
  { 'No': 1, website: 'Github', url: 'https://github.com/theProgrammerDavid'},
  { 'No': 2, website: 'StackOverflow', url: 'https://stackoverflow.com/users/14312583/goanmafia'},

]

var githubProjects = [];




const getGithubProjects = async () => {

  fetch('https://api.github.com/users/theProgrammerDavid/repos').then(
    (resp) => resp.json()
  ).then(
    (data) => {
      data.map((repo, index) => {
        githubProjects.push({
          'Sr.No': index + 1,
          name: repo.name,
          fork: repo.fork ? `Yes` : `No`,
          description: repo.description,
          lang: repo.language || 'other',
        });
      })
    }
  ).catch((error) => {
    return error.message + '';
  })

}
getGithubProjects();

const helpCommands = () => {
  return `
    ${commands.map((command, index) => {
    return `\n\t${index + 1}.\t${Object.keys(command)}\t:\t${command[Object.keys(command)]}`
  })}`;
}
const aboutMe = () => {
  return `I'm David, a full stack developer, DevOps engineer, app developer and system admin and systems programmer
    I am proficient with languages like C,C++, Js,Python Ts and frameworks like Flutter.
    ${renderLink('google.co.in', 'google')}
    `
}
const displayHelp = () => {
  return `${render('David Velho', 'Doom')}
    ${aboutMe()}
    You can press [${orangeText(`TAB`)}] for auto complete, Ctrl+r for reverse search
    ${helpCommands()}`;
}

function ready() {
  term = $('body').terminal({

    help: () => displayHelp(),
    'show-projects': () => columnify(githubProjects, githubProjectOptions),
    echo: (...text) => text.join(' '),
    alert: (...text) => alert(text.join(' ')),
    'font-size-up': () => {
      fontSize += 0.2;
      document.documentElement.style.cssText = `--size: ${fontSize}`;
    },
    'font-size-down': () => {
      fontSize -= 0.2;
      document.documentElement.style.cssText = `--size: ${fontSize}`;
    },
    'show-resume': () => {
      window.open(`https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#`);
    },
    'show-socials': () => {
      return columnify(socials, socialOptions);
    }

  }, terminalOptions);
}

export default term;