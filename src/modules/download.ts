const Coub = require('coub-dl');
import {URL} from 'url'
import * as config from './config.json'

const getFileName = (urlStr: string): string => {
    const url = new URL(urlStr);
    const path = url.pathname.split('/');
    return path[path.length - 1];
};

const downloadCoub = async (url: string) => {
    const coub = await Coub.fetch(url);
    coub.attachAudio();
    coub.loop(1);
    coub.addOption('-shortest');
    // @ts-ignore
    coub.write(`${config.downloadPath}/${getFileName(url)}.mp4`);
};

export { downloadCoub };