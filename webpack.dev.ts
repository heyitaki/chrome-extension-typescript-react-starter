import common from './webpack.common';
import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import { IPluginOptions } from 'webpack-ext-reloader';
const ExtensionReloader = require('webpack-ext-reloader');

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new ExtensionReloader({
      reloadPage: true,
      entries: {
        background: 'background',
        contentScript: 'content',
        extensionPage: 'popup',
      },
    } as IPluginOptions),
  ],
});

export default config;
