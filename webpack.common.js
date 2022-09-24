const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.tsx"],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif|webp)$/, 
                type: 'asset/resource', 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: [
                    //         '@babel/preset-env',
                    //         '@babel/preset-react',
                    //         '@babel/preset-typescript'
                    //     ]
                    // }
                }
            },  
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
            new NodePolyfillPlugin(),
        ],
    infrastructureLogging: { level: 'warn' },
    stats: 'errors-warnings',
};
