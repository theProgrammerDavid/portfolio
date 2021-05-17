import Queue from "./Queue";

export class File {
  fileData = "";
  fileName = "";
  constructor(name: string, data: string) {
    this.fileData = data || "";
    this.fileName = name || "";
  }
  print(){
      
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
  hasChild(name: string) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].folderName === name) {
        return true;
      }
    }

    return false;
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
    root.children.push(child);
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
