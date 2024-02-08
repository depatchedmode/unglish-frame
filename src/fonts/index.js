import { loadFont } from '../../modules/utils';

export default [
    {
        name: 'Vollkorn',
        fileName: 'EBGaramond-Regular.ttf',
        data: await loadFont('EBGaramond-Regular.ttf'),
        format: 'ttf',
        weight: 400,
        style: 'normal',
    },
    {
        name: 'Vollkorn',
        fileName: 'EBGaramond-Italic.ttf',
        data: await loadFont('EBGaramond-Italic.ttf'),
        format: 'ttf',
        weight: 400,
        style: 'italic',
    },
];