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
        Identifier(path, state) {
        },
        JSXOpeningElement(path) {
            if(t.isJSXIdentifier(path.get('name'))) {
                path.get('name').node.name = "View";
            }
        },
        JSXClosingElement(path) {
            if(t.isJSXIdentifier(path.get('name'))) {
                path.get('name').node.name = "View";
            }
        }
    }

    return {
        name: 'test',
        visitor,
        inherits: _pluginSyntaxJsx().default,
    }
}