const path = require('path');


module.exports = {
    mode: 'production',  // development   production
    devtool: 'inline-source-map', // inline-cheap-source-map
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
                loader: 'resolve-url-loader',
                options: {
                  root: path.resolve(__dirname)
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    indentWidth: 4,
                    includePaths: [path.resolve(__dirname)],
                  },
                },
              },
            ]
          },{
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
        }
      ]
  },
  node: {
    __dirname: false
  },
  plugins: [
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};

