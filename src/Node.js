import Queue from './Queue';

export class File {
    constructor(name, data) {
        this.fileData = data || '';
        this.fileName = name || '';
    }
}

export class Node {
    constructor(name) {
        this.folderName = name || '';
        this.children = [];
        this.files = [];
    }
}

export const ACTIONS = {
    'VIEW_FOLDER': 0,
    'ADD_FILE': 1,
    'ADD_FOLDER': 2,
    'MODIFY_FILE': 3,
    'MODIFY_FOLDER': 4
}

export const addChild = (root, child) => {
    if (root != null && child != null) {
        root.children.push(child);
    }
}

export const newFile = (data, name) => {
    return new File(data, name);
}

export const newFolder = (folderName) => {
    let f = new File();
    let n = new Node(folderName);
    n.children.push(f);
    return n;
}

export const findFolder = (root, folder, action) => {
    if (root == undefined) return;
    var q = new queue();
    q.push(root);

    while (!q.isEmpty()) {
        let n = q.size();

        while (n > 0) {
            let p = q.dequeue();

            if (p.folderName === folder.folderName) {
                switch (action) {
                    case ACTIONS.VIEW_FOLDER:
                        break;
                    case ACTIONS.ADD_FILE:
                        break;
                    case ACTIONS.ADD_FOLDER:
                        break;
                    case ACTIONS.MODIFY_FOLDER:
                        break;
                    case ACTIONS.MODIFY_FILE:
                        break;
                }
            }
            for (let i = 0; i < p.children.length; i++) {
                q.push(p.children[i]);
            }
        }
        n--;
    }

}