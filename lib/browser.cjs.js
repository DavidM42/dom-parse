'use strict';

var parser = null;

var getParser = function getParser() {
  if (parser === null) {
    parser = new window.DOMParser();
  }

  return parser;
};

var parseDom = function parseDom(markup) {
  return getParser().parseFromString(markup, "text/html");
};

module.exports = parseDom;
//# sourceMappingURL=browser.cjs.js.map