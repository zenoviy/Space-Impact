const WriteAssetsWebpackPlugin = require('write-assets-webpack-plugin');
const path = require('path');


const configuration = {
    //mode: 'production',  // development   production
    devtool: 'inline-source-map', // inline-cheap-source-map
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: "/public/dist"
    },
    devServer: {
      contentBase: path.join(__dirname, 'public/dist'),
      compress: true,
      port: 9000
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
              }
            ]
          },{
            test: /\.json$/,
            loader: 'json-loader'
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
    new WriteAssetsWebpackPlugin({ force: true, extension: ['js'] })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  externals: [
    (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ],
  target: 'node'
}


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    configuration.devtool = 'inline-source-map';

  }

  if (argv.mode === 'production') {

  }

  return configuration;
};

