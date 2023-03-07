import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const imgLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif|woff)$/i,
    type: 'asset/resource',
  };

  const svgLoader: webpack.RuleSetRule = buildSvgLoader();

  // For tsx it's ok , but for js we need Babel for jsx
  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoaders = buildCssLoaders(isDev);

  return [svgLoader, imgLoader, tsLoader, cssLoaders];
}
