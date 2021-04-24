import columnify from 'columnify';
import {
  redText, greenText,
  orangeText, purpleText,
  turquoiseText, render, get_image,
  renderLink
} from './formatting'
import './mobile';

import { Node, File, newFolder } from './Node';

import {
  socials, commands, myPic, achievements, scaleLimits, projects, folders, langs, frameworks,
  terminalOptions,
  socialOptions, getPwd, setPwd, getPrompt
} from './constants';

const root = new Node();
var currentNode = new Node();

async function loadFonts() {
  figlet.defaults({ fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/' });
  figlet.preloadFonts(["Standard", "Slant", "Doom"], ready);
}
loadFonts();

var fontSize = 1.5;
var term;

const displayHelp = () => {
  return columnify(commands)
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

    case 'me.jpg':
      return myPic();

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

  document.getElementById("loadingScreen").style.display = "none";

  term = $('body').terminal({
    mkdir: (name) => { root.children.push(newFolder(name)); console.log(root) },
    cat: (arg) => _cat(arg),
    getImg: (url) => get_image(url),
    man: () => displayHelp(),
    cd: (dir) => { setPwd(dir); term.set_prompt(getPrompt()) },
    ls: (arg) => _ls(arg),
    echo: (...text) => text.join(' '),
    scale: (arg) => scale(arg),
    'family-tech-support': () => displayHelp(),
    // me: () => { return myPic(); },


  }, terminalOptions);
}

export default term;