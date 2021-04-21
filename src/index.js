import columnify from 'columnify';
import {
  redText, greenText,
  orangeText, purpleText,
  turquoiseText, render, get_image,
  renderLink
} from './formatting'
import './mobile';
import {
  githubProjectOptions, terminalOptions,
  socialOptions
} from './options';

import {
  socials, commands, myPic, achievements, scaleLimits, projects, folders, langs, frameworks
} from './constants';

async function loadFonts() {
  figlet.defaults({ fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/' });
  figlet.preloadFonts(["Standard", "Slant", "Doom"], ready);
}
loadFonts();

var fontSize = 1.5;
var term;

const helpCommands = () => {
  return `
    ${commands.map((command, index) => {
    return `\n\t${index + 1}.\t${Object.keys(command)}\t:\t${command[Object.keys(command)]}`
  })}`;
}

const displayHelp = () => {
  return `${render('David Velho', 'Doom')}
    
    You can press ${orangeText('Ctrl+r')} for reverse search and ${orangeText('clear')} to clear the screen 
    ${helpCommands()}`;
}

const scale = (arg) => {
  switch (arg) {
    case 'up':
      if (fontSize >= scaleLimits.scaleUp) {
        return orangeText("You are probably sitting far from your screen, pull your seat closer.");
      }
      fontSize += 0.2;
      document.documentElement.style.cssText = `--size: ${fontSize}`;
      break;
    case 'down':
      console.log(fontSize, scaleLimits.scaleDown);
      if (fontSize <= scaleLimits.scaleDown) {
        return orangeText("You won't be able to see anything if you scale down further, watcha tryin to do?");
      }
      fontSize -= 0.2;
      document.documentElement.style.cssText = `--size: ${fontSize}`;
      break;
    default:
      return redText(`Invalid Usage! scale <'up' or 'down'>`)

  }
}

const _cat = (arg) => {
  switch (arg) {
    case 'frameworks':
      frameworks.forEach(f => {
        term.echo(get_image(f));
      });
      break;

    case 'languages':
      langs.forEach(lang => {
        term.echo(get_image(lang));
      });
      break;
    default:
      return redText(`Cannot view contents of file ${arg}`)
  }
}

const _ls = (arg) => {
  switch (arg) {
    case 'projects':
      return columnify(projects);

    case 'achievements':
      return columnify(achievements);

    case 'resume':
      window.open(`https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#`)
      break;
    case 'socials':
      return columnify(socials, socialOptions)

    case undefined:
      return columnify(folders, {
        showHeaders: false,
        columnSplitter: '\t'
      });

    default:
      return redText(`Cannot view contents of '${arg}'`)
  }

}

function ready() {
  term = $('body').terminal({
    cat: (arg) => _cat(arg),
    getImg: (url) => get_image(url),
    help: () => displayHelp(),
    ls: (arg) => _ls(arg),
    echo: (...text) => text.join(' '),
    scale: (arg) => scale(arg),
    'family-tech-support': () => displayHelp(),
    me: () => { return myPic(); },


  }, terminalOptions);
}

export default term;