const Coub = require('coub-dl');

const downloadCoub = async (url: string, downloadPath: string) => {
    const coub = await Coub.fetch(url);
    coub.attachAudio();
    coub.write(downloadPath);
};

downloadCoub('https://coub.com/view/1n6av3', '/Users/arysaev/repositories/coubtube/video/1n6av3.mp4');