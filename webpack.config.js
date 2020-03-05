const path = require('path');


module.exports = {
    mode: 'production',  // development   production
    devtool: 'inline-cheap-source-map', // inline-cheap-source-map
    entry: './src/index.ts',
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

