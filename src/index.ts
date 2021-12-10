declare var term: any;
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
declare var $: any;
declare var figlet: any;

import { Node, File, newFolder, findParent } from "./Node";
import columnify from "columnify";
import "./mobile";
import fileSystem from './fileSystem';

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

import {
  socials,
  commandList,
  commandDesc as commands,
  myPic,
  achievements,
  scaleLimits,
  projects,
  folders,
  langs,
  frameworks,
  other,
  socialOptions,
  getPwd,
  cdIn,
  cdOut,
  setPwd,
  getPrompt,
  githubProjectOptions,
  readmeHelp,
} from "./constants";

const terminalOptions = {
  greetings: function () {
    return (
      render("David Velho", "Doom") +
      `\n${greenText(`Hey, I'm David`)}. Type in ${greenText(
        `cat README`
      )}  to get started.\n`
    );
  },
  prompt: getPrompt(),
  checkArity: false,
  history: true,
  exit: true,
  clear: true,
  warp: false,
  // completion: true,
  echoCommand: true,
  completion: async () => {
    var command = term.get_command(); // what you entered
    var name: string = command.match(/^([^\s]*)/)[0]; //command

    switch (name) {
      case "cd":
      case "ls":
        return fileSystem.getCurrentNode().getChildrenNames();
      case "cat":
        return fileSystem.getCurrentNode().getFileNames();
      case "rm":
        return [
          ...fileSystem.getCurrentNode().getChildrenNames(),
          ...fileSystem.getCurrentNode().getFileNames(),
        ];
      case "scale":
        return ["up", "down"];
    }
    return commandList;
  },
  keymap: {},
  autocompleteMenu: true,
  wordAutocomplete: true,
};

async function loadFonts() {
  figlet.defaults({ fontPath: "https://unpkg.com/figlet@1.4.0/fonts/" });
  figlet.preloadFonts(["Standard", "Slant", "Doom"], ready);
}
loadFonts();

var fontSize = 1.5;

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

const _ls = (arg: string) => {
  if (arg == undefined) fileSystem.getCurrentNode().showContents();
  else if (fileSystem.getCurrentNode().hasChild(arg)) {
    fileSystem.getCurrentNode().getFolder(arg)?.showContents();
  }
  //traverse the tree based on the path
};
const _cat = (arg: string) => {
  if (arg == undefined) return redText(`Cannot view contents of ${arg}`);
  else if (arg === "*") {
    fileSystem.getCurrentNode().catContents();
  }
  if (fileSystem.getCurrentNode().hasFile(arg)) {
    fileSystem.getCurrentNode().getFile(arg)?.cat();
  }
};
const _cdOut = () => {
  if (fileSystem.getCurrentNode() == fileSystem.getRootNode()) return redText(`cannot go back further`);
  cdOut();
  let _x = findParent(fileSystem.getRootNode(), fileSystem.getCurrentNode())!;
  fileSystem.setCurrentNode = _x;
  term.set_prompt(getPrompt());
  if (import.meta.env.MODE) console.log(_x);
};

const _cd = (dir: string) => {
  if (dir == undefined) return redText(`cannot find folder '${dir}'`);
  if (dir === "..") return _cdOut();

  if (dir.startsWith("./")) {
    dir = dir.substring(2);
  }
  if (dir.endsWith("/")) {
    dir = dir.substring(0, dir.length - 1);
    console.log(dir);
  }

  let count = dir.match(new RegExp("/", "g"))?.length;

  if (count != undefined && count >= 1) {
    // return redText('Multi level traversal is a WIP. For now, single directory traversal is supported')
    let dirs = dir.split("/");
    for (let i in dirs) {
      console.log(dirs[i]);
      let _x = fileSystem.getCurrentNode().hasChild(dirs[i]);
      if (_x) {
        cdIn(dirs[i]);
        fileSystem.setCurrentNode = fileSystem.getCurrentNode().getFolder(dirs[i])!;
        term.set_prompt(getPrompt());
      }
    }
  } else {
    let _x = fileSystem.getCurrentNode().hasChild(dir);
    if (import.meta.env.MODE) {
      console.log(_x);
      console.log(fileSystem.getCurrentNode());
    }

    if (_x) {
      cdIn(dir);
      fileSystem.setCurrentNode = fileSystem.getCurrentNode().getFolder(dir)!;
      if (import.meta.env.MODE) console.log(fileSystem.getCurrentNode());
      term.set_prompt(getPrompt());
    } else return redText(`cannot find folder '${dir}'`);
  }
};

const _rm = async (arg: string) => {
  let ans = await term.read("are you sure: ");
  if (ans === "y" || ans === "Y") {
    if (fileSystem.getCurrentNode().hasChild(arg)) {
      fileSystem.getCurrentNode().children = fileSystem.getCurrentNode().children.filter((child) => {
        return child.folderName !== arg;
      });
    } else if (fileSystem.getCurrentNode().hasFile(arg)) {
      fileSystem.getCurrentNode().files = fileSystem.getCurrentNode().files.filter((file) => {
        return file.name !== arg;
      });
    }
  }
};

const _touch = async (fileName: string) => {
  let content = term.read("Enter file content: ");

  let f = new File(fileName, () => {
    term.echo(f.data);
  });
  f.data.push(content);
  fileSystem.getCurrentNode().addFile(f);
};

function ready() {
  const loadingScreen = document.getElementById("loadingScreen")!;
  loadingScreen.style.display = "none";

  term = $("body").terminal(
    {
      mkdir: (name: string) => {
        fileSystem.getCurrentNode().addChild(newFolder(name));
        if (import.meta.env.MODE) console.log(fileSystem.getRootNode());
      },
      cat: (arg: string) => _cat(arg),
      getImg: (url: string) => get_image(url),
      man: () => displayHelp(),
      cd: (dir: string) => _cd(dir),
      ls: (arg: string) => _ls(arg),
      echo: (...text: string[]) => text.join(" "),
      rm: _rm,
      touch: _touch,
      scale: (arg: string) => scale(arg),
      "family-tech-support": () => displayHelp(),
      resume: () => {
        window.open(
          "https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#"
        );
      },
      me: () => {
        return myPic();
      },
      "..": () => _cdOut(),
    },
    terminalOptions
  );
}

export default term;
