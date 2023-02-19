import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  // For tsx it's ok , but for js we need Babel for jsx
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [tsLoader, cssLoaders];
}
