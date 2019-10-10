const babel = require('@babel/core');
const plugin = require('../src/index');
const fs = require('fs');
const path = require('path');

var example = fs.readFileSync(path.join(__dirname, '__fixtures__', 'changed.js'), {encoding: 'utf8'});

it('works', () => {
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});