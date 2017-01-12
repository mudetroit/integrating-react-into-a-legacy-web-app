module.exports = {
    entry: "./src/lib.js",
    output: {
        path: __dirname + "/js",
        filename: "lib.js",
        library: "Components",
        libraryType: "var",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },            
            { test: require.resolve('react'), loader: 'expose-loader?React'},
            { test: require.resolve('react-dom'), loader: 'expose-loader?ReactDOM'},
        ],
    },
};
