import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module && config.module.rules) {
    const newRules = config.module?.rules?.map((rule: any) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /.svg$/i };
      }
      return rule;
    });
    config.module.rules = newRules;
  }

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};
