const postcss = require('postcss');
const camelCase = require('camelcase');

module.exports = postcss.plugin('postcss-test-plugin', function () {
    return function (root) {
        const rulesObj = {};
        root.walkRules(function (rule) {
            let selector = rule.selector;
            let key = selector.substr(1);
            rulesObj[key] = {};
            let nodes = rule.nodes || [];
            for (let decl of nodes) {
                rulesObj[key][camelCase(decl.prop)] =  decl.value;
            }
        });

        console.log(rulesObj);
    };
});