import columnify from 'columnify';
import {
  redText, greenText,
  orangeText, purpleText,
  turquoiseText, render,
  renderLink
} from './formatting'
import './mobile';
import {
  githubProjectOptions, terminalOptions,
  socialOptions
} from './options';

import {
  socials, fontSize, commands, myPic, achievements
} from './constants';

async function loadFonts() {
  figlet.defaults({ fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/' });
  figlet.preloadFonts(["Standard", "Slant", "Doom"], ready);
}
loadFonts();

var term;


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
  return `I'm ${renderLink("https://avatars1.githubusercontent.com/u/35698009?s=460&u=988e5ad85edb20cf16aaeeb8ea3e8b44088a582c&v=4", "David")}, a full stack developer, DevOps engineer, app developer and system admin and systems programmer
    I am proficient with languages like C,C++, Js,Python Ts and frameworks like Flutter.
    `
}
const displayHelp = () => {
  return `${render('David Velho', 'Doom')}
    ${aboutMe()}
    You can press [${orangeText(`TAB`)}] for auto complete, ${orangeText('Ctrl+r')} for reverse search and ${orangeText('clear')} to clear the screen 
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
    'show-achievements': () => { return columnify(achievements) },
    'show-achievement': (...ach) => {
      if (!(ach.length === 1))
        return redText('Invalid format. Please supply an argument');
      return 'achieveement';
    },
    'show-resume': () => {
      window.open(`https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#`);
    },
    me: () => { return myPic(); },
    'show-socials': () => {
      return columnify(socials, socialOptions);
    }

  }, terminalOptions);
}

export default term;