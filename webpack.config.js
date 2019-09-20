export default {
    module: {
        loaders: [{
            test: /\.svg$/,
            exclude: /node_modules/,
            use: {
                loader: 'svg-react-loader',
                options: {
                    tag: 'symbol',
                    attrs: {
                        title: 'example',
                    },
                    name: 'MyIcon',
                },
            },
            output: {
                publicPath: process.env.NODE_ENV === 'production' ?
                    './' : '/',
            }
        }]
    }
}