const fs = require('fs');
const path = require('path');

const babel = require('babylon');
const code = fs.readFileSync(path.join(__dirname, '../test/__fixtures__/cssSource.css'), {encoding: 'utf8'});

console.log(code);

let ast = babel.parse(code);


console.log(ast)