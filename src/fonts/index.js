import { loadFont } from '../../modules/utils';

export default [
    {
        name: 'Vollkorn',
        data: await loadFont('EBGaramond-Regular.ttf'),
        previewPath: '/fonts/Redaction-Regular.woff2',
        weight: 400,
        style: 'normal',
    },
    {
        name: 'Vollkorn-Italic',
        data: await loadFont('EBGaramond-Italic.ttf'),
        previewPath: '/fonts/Redaction-Regular.woff2',
        weight: 400,
        style: 'italic',
    }
];