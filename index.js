module.exports = {
    extends: [
        './es6'
    ].map(require.resolve),

    parserOptions: {
        ecmaVersion: 2019
    }
}
