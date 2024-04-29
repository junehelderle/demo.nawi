import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// To handle __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  target: 'web',
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        // generates webp images when imports use ?as=webp
        generator: [
          {
            // You can apply generator using `?as=webp`, you can use any name and provide more options
            preset: "webp", // generator will convert images to webp
            implementation: ImageMinimizerPlugin.imageminGenerate, // method used to generate the output
            options: {
              // Only one plugin here, multiple plugins will not work
              plugins: ["imagemin-webp"], // used to generate webp. only for generation, not optimization or minifcation of image
            },
          },
        ],
        // minimizes and optimizes the images
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["mozjpeg"],
              ["pngquant"]
            ],
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      { // Option A. do NOT compress images to WebP
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Option B. this block WILL compress images to webp. disable for big images if they don't look good enough!
      // doesn't seem to be directly compressing them to webp but it is optimizing them somewhat 1.0mb down to 900kb etc. 
      // {
      //   test: /\.(png|jpe?g|webp|git|svg|)$/i,
      //   use: [
      //     {
      //       loader: 'img-optimize-loader',
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "json",
      generateStatsFile: true
    }),
    // new CompressionPlugin({  why add this? Makes no difference to bundle.js size here or on the client? 
    //   filename: "[path][base].gz",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,  // This option is necessary for SPA routing
    open: true,
    hot: true
  }
};

export default config;
