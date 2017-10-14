const { FuseBox } = require('fuse-box');
const argv = require('yargs').argv;

const fuse = FuseBox.init({
    homeDir: 'src/scripts',
    output: 'public/build/$name.js',
});

const app = fuse.bundle('app')
    .instructions(`> main.ts`);

fuse.run();