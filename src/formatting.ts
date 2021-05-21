import term from './index'
declare var figlet: any;

export const greenText = (text:string) => {
    return `[[;rgba(0,255,0,0.99);]${text}]`
}
export const redText = (text:string) => {
    return `[[;rgba(255,00,0.99);]${text}]`
}
export const orangeText = (text:string) => {
    return `[[;rgba(255,165,0,0.99);]${text}]`
}
export const purpleText = (text:string) => {
    return `[[;rgba(128,0,128,0.99);]${text}]`
}
export const turquoiseText = (text:string) => {
    return `[[;rgba(64,224,208,0.99);]${text}]`
}
export const lightBlueText = (text:string)=>{
    return `[[;rgba(31,134,237,0.99);]${text}]`

}

export function render(text:string, font:any) {
    return figlet.textSync(text, {
        font: font || 'Standard',
        width: !term ? 80 : term.cols(),
        whitespaceBreak: true
    });
}
export function renderLink(link:string, text:string) {
    return `[[!;;;;${link}]${text}]`;
}

export function get_image(url:string) {
    return `[[@;;;;${url}]]`;

}