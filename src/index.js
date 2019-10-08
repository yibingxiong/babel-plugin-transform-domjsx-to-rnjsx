module.exports = function identifierReversePlugin() {
    return {
      name: 'identifier reverse',
      visitor: {
        Identifier(idPath) {
          idPath.node.name = idPath.node.name
            .split('')
            .reverse()
            .join('')
        },
      },
    }
  }