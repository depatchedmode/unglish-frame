import fonts from "../fonts";
import unglish from "@unglish/word-generator";

const build = async (payload) => {
    const fontFile = fonts[0].file; // TODO: eventually we'll have more than one font
    const fontName = fonts[0].name;

    const word = unglish.generateWord();
    console.log(word);

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
                    background: #1A304A;
                }
                fc-frame {
                    display: flex;
                    flex-direction: column;
                    width: 100vw;
                    height: 100vh;
                    color: #FFF080;
                    background: #1A304A;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                }
                .written {
                    padding-top: 2rem;
                    font-size: 8rem;
                    margin-bottom: 2rem;
                }
                .pronounced {
                    font-size: 4rem;
                }
            </style>
        </head>
        <body>
            <fc-frame>
                <div class="written">${word.written.clean}</div>
                <div class="pronounced">IPA: ${word.pronunciation}</div>
            </fc-frame>
        </body>
    </html>
    `
}

export const buttons = [
    { 
        label: '🎲',
        goTo: 'word',
    },
    { 
        label: 'Mint',
        url: 'https://highlight.xyz/user/@depatchedmode.eth/created',
    },
    { 
        label: '💬',
        url: 'https://warpcast.com/~/channel/unglish',
    },
    { 
        label: 'ℹ️',
        url: 'https://unglish.co.uk',
    },
]

export default {
    name: 'word',
    build,
    buttons,
};