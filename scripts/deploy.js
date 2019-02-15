// mettre le bon fichier config.ts
// ng build --prod
// npm run server

const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    console.error('needs 1 argument: env');
    process.exit(1);
}

const env = process.argv[2];
const src = path.resolve(__dirname, `../config.${env}.ts`);
const dest = path.resolve(__dirname, '../config.ts');
console.log('src', src);


fs.copyFileSync(src, dest);

