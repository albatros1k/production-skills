import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(option: BuildOptions): DevServerConfiguration {
  return {
    open: true,
    port: option.port,
    historyApiFallback: true,
    hot: true,
  };
}
