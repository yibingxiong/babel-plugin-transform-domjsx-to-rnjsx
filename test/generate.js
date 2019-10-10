
const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');
const Plugin = require('../src/index');


const result = babel.transform(fs.readFileSync(path.join(__dirname, '__fixtures__', 'changed.js')), {
	plugins: [
        Plugin
    ]
}); 


fs.writeFileSync(path.join(__dirname, 'out.js'), result.code, {encoding: 'utf8'});


