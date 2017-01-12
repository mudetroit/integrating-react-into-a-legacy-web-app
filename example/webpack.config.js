module.exports = {
    entry: "./src/lib.js",
    output: {
        path: __dirname + "/js",
        filename: "lib.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
