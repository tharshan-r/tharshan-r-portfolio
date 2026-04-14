const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function loadClientEnv() {
  const envFilePath = path.resolve(__dirname, '.env');
  const parsed = {};

  if (fs.existsSync(envFilePath)) {
    const envFile = fs.readFileSync(envFilePath, 'utf8');

    for (const line of envFile.split(/\r?\n/)) {
      const trimmedLine = line.trim();

      if (!trimmedLine || trimmedLine.startsWith('#')) {
        continue;
      }

      const separatorIndex = trimmedLine.indexOf('=');

      if (separatorIndex === -1) {
        continue;
      }

      const key = trimmedLine.slice(0, separatorIndex).trim();
      const rawValue = trimmedLine.slice(separatorIndex + 1).trim();
      const normalizedValue = rawValue.replace(/^['"]|['"]$/g, '');

      parsed[key] = normalizedValue;
    }
  }

  const mergedEnv = { ...parsed };

  for (const [key, value] of Object.entries(process.env)) {
    if (value !== undefined) {
      mergedEnv[key] = value;
    }
  }

  return Object.fromEntries(
    Object.entries(mergedEnv)
      .filter(([key]) => key.startsWith('VITE_'))
      .map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)]),
  );
}

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const clientEnv = loadClientEnv();

  return {
    entry: './src/main.tsx',
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[contenthash].chunk.js',
      assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
      clean: true,
      publicPath: '/',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
        publicPath: '/',
      },
      host: '0.0.0.0',
      port: 8080,
      compress: true,
      hot: true,
      open: false,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                  },
                },
              },
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode ?? 'development'),
        ...clientEnv,
      }),
    ].filter(Boolean),
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
