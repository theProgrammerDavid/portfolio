// import term from "./index";
declare var term: any;
import columnify from "columnify";
import { lightBlueText } from "./formatting";
import Queue from "./Queue";

export class File {
  data: string[] = [];
  name = "";
  hasCustomName: boolean = false;

  showName!: () => string;
  cat!: () => void;

  constructor(
    name: string,
    _cat: () => void = () => {},
    customName: boolean = false,
    _name: () => string = () => ""
  ) {
    this.name = name || "";
    this.cat = _cat;

    this.hasCustomName = customName;
    if (customName) this.showName = _name;
  }
  append(d: string) {
    this.data.push(d);
  }
}

export class Node {
  folderName = "";
  children: Node[];
  files: File[];
  constructor(name: string) {
    this.folderName = name || "";
    this.children = [];
    this.files = [];
  }

  getChildrenNames() {
    let names: string[] = [];
    this.children.forEach((child) => {
      names.push(child.folderName);
    });
    return names;
  }

  getFileNames() {
    let names: string[] = [];
    this.files.forEach((file) => {
      names.push(file.name);
    });
    return names;
  }

  addFile(file: File) {
    this.files.push(file);
  }
  addChild(node: Node) {
    this.children.push(node);
  }
  catContents() {
    for (let i = 0; i < this.files.length; i++) {
      this.files[i].cat();
    }
  }
  hasFile(name: string) {
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].name === name) {
        return true;
      }
    }

    return false;
  }
  hasChild(name: string) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].folderName === name) {
        return true;
      }
    }

    return false;
  }
  showContents() {
    if (import.meta.env.MODE) {
      console.log(this.files);
      console.log(this.children);
    }
    let _files = [];
    for (let i = 0; i < this.children.length; i++) {
      _files.push({
        permissions: "drwxrwxr-x",
        owner: "david",
        name: `${lightBlueText(this.children[i].folderName)} `,
      });
    }
    for (let i = 0; i < this.files.length; i++) {
      _files.push({
        permissions: ".rw-rw-r--",
        owner: "david",
        name: this.files[i].hasCustomName
          ? this.files[i].showName()
          : this.files[i].name,
      });
    }
    term.echo(
      columnify(_files, {
        columnSplitter: " ",
        showHeaders: false,
        minWidth: 15,
      })
    );
  }
  getFile(name: string) {
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].name === name) {
        return this.files[i];
      }
    }
  }
  getFolder(name: string) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].folderName === name) {
        return this.children[i];
      }
    }
  }
}

export enum ACTIONS {
  VIEW_FOLDER = 0,
  ADD_FILE,
  ADD_FOLDER,
  MODIFY_FILE,
  MODIFY_FOLDER,
}

export const addChild = (root: Node, child: Node) => {
  if (root != null && child != null) {
    root.addChild(child);
  }
};

export const newFolder = (folderName: string) => {
  //   let f = new File();
  let n = new Node(folderName);
  //   n.children.push(f);
  return n;
};

// export const findFolder = (root: Node, folder: Node, action: ACTIONS) => {
//   if (root == undefined) return;
//   var q = new Queue();
//   q.push(root);

//   while (!q.isEmpty()) {
//     let n = q.size();

//     while (n > 0) {
//       let p = q.dequeue();
//       if (!p) return;
//       if (p.folderName === folder.folderName) {
//         switch (action) {
//           case ACTIONS.VIEW_FOLDER:
//             break;
//           case ACTIONS.ADD_FILE:
//             break;
//           case ACTIONS.ADD_FOLDER:
//             break;
//           case ACTIONS.MODIFY_FOLDER:
//             break;
//           case ACTIONS.MODIFY_FILE:
//             break;
//         }
//       }
//       for (let i = 0; i < p.children.length; i++) {
//         q.push(p.children[i]);
//       }
//     }
//     n--;
//   }
// };

export const findParent = (root: Node, folder: Node) => {
  if (root == undefined) return undefined;
  if (root.hasChild(folder.folderName)) return root;

  var q = new Queue<Node>();
  q.push(root);

  while (!q.isEmpty()) {
    let n = q.size();

    while (n > 0) {
      let p = q.dequeue();
      if (!p) return undefined;
      if (p.hasChild(folder.folderName)) return p;
      //   if (p.folderName === folder.folderName) {
      //   }

      for (let i = 0; i < p.children.length; i++) {
        q.push(p.children[i]);
      }
    }
    n--;
  }
  return undefined;
};
