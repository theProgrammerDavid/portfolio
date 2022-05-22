import { Node, File } from "./Node";
import { get_image, lightBlueText } from './formatting';
import columnify from 'columnify';
import { greenText } from './formatting';
import {
    myPic, other, frameworks, langs,
    projects, githubProjectOptions,
    socialOptions, socials, achievements, readmeHelp,
    commandDesc as commands, publications
} from './constants'
declare var term: any;

class FileSystem {
    private root: Node;
    private currentNode: Node;

    private setupDir = () => {
        let mypic = new File("me.jpg", () => {
            term.echo(myPic());
        });
        let languagesFile = new File("languages", () => {
            languagesFile.data.forEach((d) => {
                term.echo(get_image(d));
            });
        });
        let frameworksFile = new File("frameworks", () => {
            frameworksFile.data.forEach((d) => {
                term.echo(get_image(d));
            });
        });
        let othersFile = new File("others", () => {
            othersFile.data.forEach((d) => {
                term.echo(get_image(d));
            });
        });

        other.forEach((_o) => {
            othersFile.append(_o.url);
        });
        frameworks.forEach((_f) => {
            frameworksFile.append(_f.url);
        });
        langs.forEach((_l) => {
            languagesFile.append(_l.url);
        });
        this.root.addFile(languagesFile);
        this.root.addFile(frameworksFile);
        this.root.addFile(othersFile);
        this.root.addFile(mypic);

        let n = new Node("projects");
        n.addFile(
            new File("all.txt", () => {
                term.echo(columnify(projects, githubProjectOptions));
            })
        );

        let n2 = new Node("socials");
        let n3 = new Node("achievements");
        let publicationsNode = new Node("publications");

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
        this.root.addChild(n);
        this.root.addChild(n2);
        this.root.addChild(n3);
        this.root.addFile(
            new File("resume.docx", () => {
                window.open(
                    "https://docs.google.com/document/d/109u-jq5jsT690D1vpmRB2bcAVhZXfGemT9KBEIQT0mY/edit#"
                );
            })
        );

        publications.forEach((publication) => { 
            let tempFile = new File(publication.name, ()=>window.open(publication.url), true, ()=>lightBlueText(publication.name))
            publicationsNode.addFile(tempFile)
        })

        this.root.addChild(publicationsNode)

        this.root.addFile(
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
    }
    constructor() {
        this.root = new Node("");
        this.setupDir();
        this.currentNode = this.root;
    }

    getRootNode(): Node {
        return this.root;
    }

    getCurrentNode(): Node {
        return this.currentNode;
    }

    set setCurrentNode(node: Node) {
        this.currentNode = node;
    }
}


export default new FileSystem();