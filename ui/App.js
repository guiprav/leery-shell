require('bulma/css/bulma.css');
require('font-awesome/css/font-awesome.css');

require('./App.css');

module.exports = window.App = {
  oninit: function() {
    window.app = this;
  },

  view: function() {
    return m('.App', [
      m('h1.title', `Hello, world!`),
    ]);
  },
};
