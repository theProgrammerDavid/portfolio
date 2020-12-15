import term from './index'
export const greenText = (text) => {
    return `[[;rgba(0,255,0,0.99);]${text}]`
}
export const redText = (text) => {
    return `[[;rgba(255,00,0.99);]${text}]`
}
export const orangeText = (text) => {
    return `[[;rgba(255,165,0,0.99);]${text}]`
}
export const purpleText = (text) => {
    return `[[;rgba(128,0,128,0.99);]${text}]`
}
export const turquoiseText = (text) => {
    return `[[;rgba(64,224,208,0.99);]${text}]`
}

export function render(text, font) {
    return figlet.textSync(text, {
        font: font || 'Standard',
        width: !term ? 80 : term.cols(),
        whitespaceBreak: true
    });
}
export function renderLink(link, text) {
    return `[[!;;;;${link}]${text}]`;
}

export function get_image(url) {
    return new Promise(function (resolve, reject) {
        const img = $(`<img src=${url} />`);
        img.on('load', () => resolve(img));
        img.on('error', reject);
    });
}