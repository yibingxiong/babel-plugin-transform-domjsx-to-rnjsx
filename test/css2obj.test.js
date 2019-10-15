let postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const plugin = require('../src/css2obj');
var example = fs.readFileSync(path.join(__dirname, '__fixtures__', 'cssSource.css'), {encoding: 'utf8'});

it('css2objtest', async () => {

  let result = await postcss([plugin({plugin})]).process(example, { from: undefined })
  expect(result.css).toMatchSnapshot();
});