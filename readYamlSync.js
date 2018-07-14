let yaml = require('yaml-js');
let fs = remote.require('fs');

module.exports = path => yaml.load(fs.readFileSync(
  path, { encoding: 'utf8' },
));
