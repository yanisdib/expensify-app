module.exports = {
    // 1
    entry: './src/Expensify.js',
    // 2
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 3
    devServer: {
        contentBase: './dist'
    }
}; 