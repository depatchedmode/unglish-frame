export default {
    name: 'stolen',
    image: `/images/stolen.png`,
    buttons: [
        {
            label: '📖 Show me',
            url: `${process.env.STOLEN_REDIRECT_URL}`
        }
    ]
};