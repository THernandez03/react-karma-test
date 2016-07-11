import config from './webpack';

const defaultConfig = {
  hot: true,
  colors: true,
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  https: config.port === 443,
};

export default defaultConfig;
