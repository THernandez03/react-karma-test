const envs = process.env || {};

const prod = 'production';
const dev = 'development';
const local = 'local';

let env = envs.NODE_ENV || local;

export const __PROD__ = env === prod;
export const __DEV__ = env === dev;

if(!__PROD__ && !__DEV__){
  env = local;
}

export const __LOCAL__ = env === local;
export const __ENV__ = env;
