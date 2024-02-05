import { generateWord } from '../data/word';

const build = async (payload) => {
    const fontFile = fonts[0].file; // TODO: eventually we'll have more than one font
    const fontName = fonts[0].name;
    const html = String.raw;
    return html`
        <html>
        <head>
            <style>
                @font-face {
                    font-family: "${fontName}";
                    src:
                        local("${fontName}"),
                        url("/fonts/${fontFile}") format("woff2");
                }
                body {
                    margin: 0;
                    padding: 0;
                    font-family: "${fontName}";
                    background: black;
                }
                fc-frame {
                    display: flex;
                    flex-direction: column;
                    width: 100vw;
                    height: 100vh;
                    color: white;
                    background: black;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                    border: 2em solid #232323;
                }
            </style>
        </head>
        <body>
            ${generateWord}
        </body>
    </html>
    `
}

export const buttons = [
    { 
        label: '🔄 Random Word',
        goTo: 'start',
    },
    { 
        label: 'unglish.co.uk',
        url: 'credits',
    },
    { 
        label: '/unglish',
        url: 'credits',
    },
    { 
        label: '🎬 View credits',
        url: 'credits',
    }
]

export default {
    name: 'start',
    build,
    buttons,
};