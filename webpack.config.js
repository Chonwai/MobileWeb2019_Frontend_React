export default {
    module: {
        loaders: [{
            test: /\.svg$/,
            loader: 'svg-inline-loader',
            use: [
                "babel-loader",
                {
                    loader: "react-svg-loader",
                    options: {
                        svgo: {
                            plugins: [
                                { removeTitle: false }
                            ],
                            floatPrecision: 2
                        }
                    }
                }
            ],
            output: {
                publicPath: process.env.NODE_ENV === 'production' ?
                    './' : '/',
            }
        }],
    }
}