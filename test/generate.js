
const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');
const Plugin = require('../src/index');
const dir = path.resolve(__dirname);
const sourceDir = path.join(dir, 'source');
const outputDir = path.join(dir, 'output');

   
const result = babel.transform(fs.readFileSync(path.join(sourceDir, 'changed.js')), {
	plugins: [
        Plugin
    ]
}); 


fs.writeFileSync(path.join(outputDir, 'out.js'), result.code, {encoding: 'utf8'});


