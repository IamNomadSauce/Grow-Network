var webpack = require('webpack');

module.exports = {
  entry: [
    // 'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: [
    // jquery: 'jQuery'
  ],
  plugins: [
    // new webpack.ProvidePlugin({
      // '$': 'jquery',
      // 'jQuery': 'jquery'
    // })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      NavBarDeluxe: 'app/components/NavBarDeluxe.jsx',
      Weather: 'app/components/Weather.jsx',
      TodoApp: 'app/components/TodoApp.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      CannabisReports: 'app/api/CannabisReports.jsx',
      CannabisMessage: 'app/components/CannabisMessage.jsx',
      CannabisForm: 'app/components/CannabisForm.jsx',
      Cannabis: 'app/components/Cannabis.jsx',
      Navigation: 'app/components/Navigation.jsx',
      Strain: 'app/components/Strain.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
