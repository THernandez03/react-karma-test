import fs from 'fs';
import path from 'path';
import child from 'child_process';
import webpack from 'webpack';
import WebpackServer from 'webpack-dev-server';
import config from './private/config/webpack';
import configServer from './private/config/webpack-server';
import * as envs from './private/config/envs';

if(envs.__DEV__ || envs.__PROD__){
  const filename = path.join(__dirname, 'config.js');
  const args = (envs.__DEV__) ? ['--config'] : ['-p', '--config'];
  const fork = function(args){
    const file = './node_modules/webpack/bin/webpack.js';
    const cmd = child.fork(file, args);
    cmd.on('exit', () => {
      fs.unlink(filename, (err) => {
        if(err){ throw err; }
      });
    });
  }
  let data = JSON.stringify(config, (key, val) => (
    (val instanceof RegExp) ? `_R${val}X_` : val
  ));
  if(!!~data.indexOf('"_R') && !!~data.indexOf('X_"')){
    data = data.replace(/\"\_R/g, '').replace(/X\_\"/g, '');
  }
  data = `module.exports = ${data.replace(/\\\\/g, '\\')};`;
  fs.writeFile(filename, data, (err) => {
    if(err){ throw err; }
    fork([...args, filename]);
  });
}else{
  const server = new WebpackServer(webpack(config), configServer);
  const host = config.host;
  const port = config.port;
  server.listen(port, host, (err) => {
    if(err){ throw err; }
    console.log(`Webpack is listening at ${host}:${port}`);
  });
}
