import unglish from "@unglish/word-generator";

const build = async (payload) => {

    const word = unglish.generateWord();

    const html = String.raw;
    return html`
        <html>
        <head>
            <style>
                body {
                    margin: 0;
                    padding: 0;
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
            </style>
        </head>
        <body>
            <fc-frame>
                <div style="
                    padding-top: 1rem;
                    font-size: 8rem;
                    margin-bottom: 2rem;
                ">
                    ${word.written.clean}
                </div>
                <div style="
                    font-size: 3rem; 
                    font-style: italic; 
                    font-family: 'Cousine'
                ">
                    IPA: ${word.pronunciation}
                </div>
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