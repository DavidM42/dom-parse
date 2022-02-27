'use strict';

var jsdom = require('jsdom');

var parseDom = function parseDom(markup) {
  return new jsdom.JSDOM(markup).window.document;
};

module.exports = parseDom;
//# sourceMappingURL=server.cjs.js.map
