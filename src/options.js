import {
    redText, greenText,
    orangeText, purpleText,
    turquoiseText
  } from './formatting'
export const githubProjectOptions = {
    minWidth: 10,
    truncate: true,
    config: {
        description: { maxWidth: 50 }
    },
    columnSplitter: '|', dataTransform: (data) => {
        switch (data) {
            case 'other':
                return orangeText(data);
            case 'C':
            case 'C++':
                return purpleText(data);
            case 'Dart':
                return turquoiseText(data);
            case 'HTML':
                return greenText(data);
            default:
                return data;
        }
    }
}