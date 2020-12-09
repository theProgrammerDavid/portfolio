figlet.defaults({ fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/' });
figlet.preloadFonts(["Standard", "Slant"], ready);

var term;
const commands = [
    { 'show-projects': 'populates a list of projects from Github' },
    { 'show-resume': 'shows resume in a new tab' },
    { 'show-social': 'follow me on social media' },
];
const greenText = (text) => {
    return `[[;rgba(0,255,0,0.99);]${text}]`
}

function render(text, font) {
    return figlet.textSync(text, {
        font: font || 'Standard',
        width: !term ? 80 : term.cols(),
        whitespaceBreak: true
    });
}
const helpCommands = () => {
    return `
    ${commands.map((command, index) => {
        return `\n\t${Object.keys(command)}\t:\t${command[Object.keys(command)]}`
    })}`;
}
const aboutMe = () => {
    return `I'm David, a full stack developer, DevOps engineer, app developer and system admin and systems programmer
    I am proficient with languages like C,C++, Js, Ts, Flutter.
    `
}
const displayHelp = () => {
    return `${render('David Velho')}
    ${aboutMe()}
    ${helpCommands()}`;
}

function ready() {
    term = $('body').terminal(function (cmd) {
        this.echo(() => {
            switch (cmd) {
                case 'echo':
                    return render('lol');

                case 'help':
                    return displayHelp();
            }
        })
    }, {
        greetings: function () {
            return render('David Velho', 'Slant') +
                `\n[[;rgba(0,255,0,0.99);]Hey, I'm David]. Type in [[;rgba(0,255,0,0.99);]help] to get started.\n`;
        },
        prompt: `[[;rgba(0,255,0,0.99);]#user > ]`,
        name: 'name'
    });
}
