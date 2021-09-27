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

const root = new Node("");
const setupDir = () => {
  let mypic = new File("me.jpg", () => {
    term.echo(myPic());
  });
  let l = new File("languages", () => {
    l.data.forEach((d) => {
      term.echo(get_image(d));
    });
  });
  let f = new File("frameworks", () => {
    f.data.forEach((d) => {
      term.echo(get_image(d));
    });
  });
  let o = new File("others", () => {
    o.data.forEach((d) => {
      term.echo(get_image(d));
    });
  });
  other.forEach((_o) => {
    o.append(_o.url);
  });
  frameworks.forEach((_f) => {
    f.append(_f.url);
  });
  langs.forEach((_l) => {
    l.append(_l.url);
  });
  root.addFile(l);
  root.addFile(f);
  root.addFile(o);
  root.addFile(mypic);

  let n = new Node("projects");
  n.addFile(
    new File("all.txt", () => {
      term.echo(columnify(projects, githubProjectOptions));
    })
  );

  let n2 = new Node("socials");
  let n3 = new Node("achievements");

  n2.addFile(
    new File("socials.txt", () => {
      term.echo(columnify(socials, socialOptions));
    })
  );
  n3.addFile(
    new File("certs.txt", () => {
      term.echo(columnify(achievements));
    })
  );
  root.addChild(n);
  root.addChild(n2);
  root.addChild(n3);
  root.addFile(
    new File("resume.docx", () => {
      window.open(
        "https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#"
      );
    })
  );

  root.addFile(
    new File(
      "README",
      () => {
        term.echo(readmeHelp());
        term.echo(columnify(commands));
      },
      true,
      () => {
        return greenText("README");
      }
    )
  );
};
setupDir();
var currentNode = root;

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
        return currentNode.getChildrenNames();
      case "cat":
        return currentNode.getFileNames();
      case "rm":
        return [
          ...currentNode.getChildrenNames(),
          ...currentNode.getFileNames(),
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
  if (arg == undefined) currentNode.showContents();
  else if (currentNode.hasChild(arg)) {
    currentNode.getFolder(arg)?.showContents();
  }
  //traverse the tree based on the path
};
const _cat = (arg: string) => {
  if (arg == undefined) return redText(`Cannot view contents of ${arg}`);
  else if (arg === "*") {
    currentNode.catContents();
  }
  if (currentNode.hasFile(arg)) {
    currentNode.getFile(arg)?.cat();
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
      let _x = currentNode.hasChild(dirs[i]);
      if (_x) {
        cdIn(dirs[i]);
        currentNode = currentNode.getFolder(dirs[i])!;
        term.set_prompt(getPrompt());
      }
    }
  } else {
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
  }
};

const _rm = async (arg: string) => {
  let ans = await term.read("are you sure: ");
  if (ans === "y" || ans === "Y") {
    if (currentNode.hasChild(arg)) {
      currentNode.children = currentNode.children.filter((child) => {
        return child.folderName !== arg;
      });
    } else if (currentNode.hasFile(arg)) {
      currentNode.files = currentNode.files.filter((file) => {
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
  currentNode.addFile(f);
};

function ready() {
  const loadingScreen = document.getElementById("loadingScreen")!;
  loadingScreen.style.display = "none";

  term = $("body").terminal(
    {
      mkdir: (name: string) => {
        currentNode.addChild(newFolder(name));
        if (import.meta.env.MODE) console.log(root);
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
