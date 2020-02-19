const path = require('path');

module.exports = {
    mode: 'production',
    entry: __dirname+ '/client/src/index.ts',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    module:{
        rules:[
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
          }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};