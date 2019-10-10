const pluginTester = require('babel-plugin-tester')
const path = require('path');

function Plugin() {
  const visitor = {
      Identifier(path, state) {
          let name = path.node.name;
          path.node.name = name.split('').reverse().join('');
      },
  }
  return {
      name: 'test',
      visitor,
  }
}

pluginTester({
    plugin: Plugin,
    tests: {
      'changes this code': {
        fixture: path.join(__dirname, '__fixtures__/changed.js'),
         outputFixture: path.join(__dirname, '__fixtures__/changed-output.js'),
      },
    },
  })