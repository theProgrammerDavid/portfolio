declare global {
  interface ImportMeta {
    hot: {
      accept: Function;
      dispose: Function;
    };
    env: {
      MODE: string;
    };
  }
}

import columnify from "columnify";
declare var figlet: any;
import {
  redText,
  greenText,
  orangeText,
  purpleText,
  turquoiseText,
  render,
  get_image,
  renderLink,
} from "./formatting";
import "./mobile";
declare var $: any;
import { Node, File, newFolder, findParent } from "./Node";

import {
  socials,
  commands,
  myPic,
  achievements,
  scaleLimits,
  projects,
  folders,
  langs,
  frameworks,
  terminalOptions,
  other,
  socialOptions,
  getPwd,
  cdIn,
  cdOut,
  setPwd,
  getPrompt,
} from "./constants";

const root = new Node("");
var currentNode = root;

async function loadFonts() {
  figlet.defaults({ fontPath: "https://unpkg.com/figlet@1.4.0/fonts/" });
  figlet.preloadFonts(["Standard", "Slant", "Doom"], ready);
}
loadFonts();

var fontSize = 1.5;
var term: any;

const displayHelp = () => {
  return columnify(commands);
};

const scale = (arg: string) => {
  switch (arg) {
    case "up":
      if (fontSize >= scaleLimits.scaleUp) {
        return orangeText(
          "You are probably sitting far from your screen, pull your seat closer."
        );
      }
      fontSize += 0.2;
      document.documentElement.style.cssText = `--size: ${fontSize}`;
      break;
    case "down":
      if (import.meta.env.MODE) console.log(fontSize, scaleLimits.scaleDown);
      if (fontSize <= scaleLimits.scaleDown) {
        return orangeText(
          "You won't be able to see anything if you scale down further, watcha tryin to do?"
        );
      }
      fontSize -= 0.2;
      document.documentElement.style.cssText = `--size: ${fontSize}`;
      break;
    default:
      return redText(`Invalid Usage! scale <'up' or 'down'>`);
  }
};

const _cat = (arg: string) => {
  switch (arg) {
    case "me.jpg":
      return myPic();

    case "frameworks":
      frameworks.forEach((f) => {
        term.echo(get_image(f));
      });
      break;
      currentNode;
    case "others":
      other.forEach((o) => {
        term.echo(get_image(o));
      });
      break;

    case "languages":
      langs.forEach((lang) => {
        term.echo(get_image(lang));
      });
      break;
    default:
      return redText(`Cannot view contents of file ${arg}`);
  }
};

const _ls = (arg: string) => {
  switch (arg) {
    case "projects":
      return columnify(projects);

    case "achievements":
      return columnify(achievements);

    case "resume":
      window.open(
        `https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#`
      );
      break;
    case "socials":
      return columnify(socials, socialOptions);

    case undefined:
      return columnify(folders, {
        showHeaders: false,
        columnSplitter: "\t",
      });

    default:
      return redText(`Cannot view contents of '${arg}'`);
  }
};

const _cdOut = () => {
  if (currentNode == root) return redText(`cannot go back further`);
  cdOut();
  let _x = findParent(root, currentNode)!;
  currentNode = _x;
  term.set_prompt(getPrompt());
  if (import.meta.env.MODE) console.log(_x);
};

const _cd = (dir: string) => {
  if (import.meta.env.MODE) console.log(dir);
  if (dir === "..") _cdOut();

  let _x = currentNode.hasChild(dir);
  if (import.meta.env.MODE) {
    console.log(_x);
    console.log(currentNode);
  }

  if (_x) {
    cdIn(dir);
    currentNode = currentNode.getFolder(dir)!;
    if (import.meta.env.MODE) console.log(currentNode);
    term.set_prompt(getPrompt());
  } else return redText(`cannot find folder '${dir}'`);
};

function ready() {
  const loadingScreen = document.getElementById("loadingScreen")!;
  loadingScreen.style.display = "none";

  term = $("body").terminal(
    {
      mkdir: (name: string) => {
        currentNode.children.push(newFolder(name));
        if (import.meta.env.MODE) console.log(root);
      },
      cat: (arg: string) => _cat(arg),
      getImg: (url: string) => get_image(url),
      man: () => displayHelp(),
      cd: (dir: string) => _cd(dir),
      ls: (arg: string) => _ls(arg),
      echo: (...text: string[]) => text.join(" "),
      scale: (arg: string) => scale(arg),
      "family-tech-support": () => displayHelp(),
      me: () => {
        return myPic();
      },
      "..": () => _cdOut(),
    },
    terminalOptions
  );
}

export default term;
