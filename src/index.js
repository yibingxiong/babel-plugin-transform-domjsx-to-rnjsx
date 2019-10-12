const t = require("@babel/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


function _pluginSyntaxJsx() {
    const data = _interopRequireDefault(require("@babel/plugin-syntax-jsx"));

    _pluginSyntaxJsx = function () {
        return data;
    };

    return data;
}

const classNameAttributeKey = 'className';

module.exports = function identifierReversePlugin() {
    const visitor = {
        Identifier(path, state) {
        },
        JSXOpeningElement(path) {
            if (t.isJSXIdentifier(path.get('name'))) {
                path.get('name').node.name = "View";
            }

            path.get('attributes').forEach(attribute => {
                const attributeKey = attribute.node.name;
                const attributeValue = attribute.node.value;

                if (attributeKey) {
                    let name = attributeKey.name;
                    if (name === classNameAttributeKey) {
                        attribute.replaceWith(t.jsxAttribute(t.jsxIdentifier("style"), t.jsxExpressionContainer(t.memberExpression(t.identifier("styles"), t.identifier(attributeValue.value)))));

                    }
                }
            })
        },
        JSXClosingElement(path) {
            if (t.isJSXIdentifier(path.get('name'))) {
                path.get('name').node.name = "View";
            }
        },
    }

    return {
        name: 'test',
        visitor,
        inherits: _pluginSyntaxJsx().default,
    }
}