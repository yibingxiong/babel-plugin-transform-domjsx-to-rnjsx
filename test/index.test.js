const pluginTester = require('babel-plugin-tester')
const Plugin = require('../src/index');
const path = require('path');
const Plugin2 = require('@babel/plugin-transform-react-jsx');
pluginTester({
    plugin: Plugin,
    fixtures: path.resolve(__dirname),
    tests: {
      /* your test objects */
      'changes this code': {
        // input to the plugin
        fixture: path.join(__dirname, '__fixtures__/changed.js'),
        // because outputFixture is provided, the assertion will be that the
        // plugin will change the contents of `changed.js` to the contents of
        // `changed-output.js`
         outputFixture: path.join(__dirname, '__fixtures__/changed-output.js'),
      },
    },
  })