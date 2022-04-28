const fs = require('fs');
const path = require('path')
console.log(fs.readFileSync(path.join(`${__dirname}/log.txt`), {encoding: 'utf-8'}));
console.log(fs.readFileSync(path.join(`${__dirname}/../assets/index.html`), {encoding: 'utf-8'}));
// path join permet de créer un chemin adapté à l'os