const path = require('path');


module.exports = {
    mode: 'development',  // development   production
    devtool: 'inline-source-map',
    entry: __dirname+ '/client/src/index.ts',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: "/public/dist"
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
          },{
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
              },
            ]
          }
      ]
  },
  plugins: [
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};