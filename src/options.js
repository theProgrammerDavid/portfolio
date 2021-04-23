import {
    greenText,render
} from './formatting'
export const socialOptions = {
    minWidth: 10,
    truncate: true,
    config: {
        url: { maxWidth: 50 }
    },
    columnSplitter: '|', dataTransform: (data) => {
        return data;
    }
};
export const githubProjectOptions = {
    minWidth: 10,
    truncate: true,
    config: {
        description: { maxWidth: 50 },
        lang: { minWidth: 10 },

    },
    columnSplitter: '|',
}

export const terminalOptions = {
    greetings: function () {
        return render('David Velho', 'Doom') +
            `\n${greenText(`Hey, I'm David`)}. Type in ${greenText(`man`)} / ${greenText('family-tech-support')} to get started.\n`;
    },
    prompt: `${greenText('# user >')}`,
    checkArity: false,
    history: true,
    exit: true,
    clear: true,
    warp: false,
    completion: true,
    echoCommand: true,
    keymap: {
    }
};
