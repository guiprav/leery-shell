window.remote = require('' + 'electron').remote;

window.cwd = remote.process.cwd();
window.m = require('mithril');

let readYamlSync = require('./readYamlSync');

window.apps = readYamlSync(`${cwd}/apps.yaml`);

require('./ui/App');

document.addEventListener('DOMContentLoaded', () => {
  m.mount(document.body, App);
});
