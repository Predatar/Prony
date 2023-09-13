const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode == 'development';
const target = devMode ? 'web' : 'browserslist';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: '[contenthash].css'
  })
];

if (!devMode) {
  plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

let optimization = undefined;

if (!devMode) {
  optimization = {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true, minify: TerserPlugin.swcMinify })]
  };
}

module.exports = {
  mode,
  target,
  devServer: {
    port: 3030,
    open: true,
    hot: true,
    compress: true,
    client: {
      progress: true
    }
  },
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    clean: true,
    filename: devMode ? '[name].js' : '[fullhash].js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  plugins,
  module: {
    rules: [
      // --- JavaScript
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // --- HTMl
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      // --- S/A/C/SS
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          }
        ]
      },
      // --- S/A/SS
      {
        test: /\.(s[ac])ss$/i,
        use: ['sass-loader']
      },
      {
        test: /\.(woff2?|eot|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)?$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: devMode ? 'asset' : 'asset/resource'
      }
    ]
  },
  optimization
};
