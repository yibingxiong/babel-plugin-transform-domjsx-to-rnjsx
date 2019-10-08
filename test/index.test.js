const pluginTester = require('babel-plugin-tester')
const Plugin = require('../src/index');



pluginTester({
    plugin: Plugin,
    tests: {
      /* your test objects */
      'changes this code': {
        // input to the plugin
        code: 'var hello = "hi";',
        // expected output
        output: 'var olleh = "hi";',
      },
    },
  })