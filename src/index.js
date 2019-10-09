const t = require("@babel/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


function _pluginSyntaxJsx() {
  const data = _interopRequireDefault(require("@babel/plugin-syntax-jsx"));

  _pluginSyntaxJsx = function () {
    return data;
  };

  return data;
}


module.exports = function identifierReversePlugin() {


    const visitor = {
        Identifier(path, state) {},
        JSXIdentifier(path) {
            if (t.isJSXIdentifier(path.node)) {
                path.node.name = 'View';
            }
        }
    }

    return {
        name: 'test',
        visitor,
        inherits: _pluginSyntaxJsx().default,
    }
}