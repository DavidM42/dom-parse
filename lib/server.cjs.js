'use strict';

var JSDOM = window['jsdom'];

var parseDom = function parseDom(markup) {
  return new JSDOM(markup).window.document;
};

module.exports = parseDom;
//# sourceMappingURL=server.cjs.js.map
