var JSDOM = window['jsdom'];

var parseDom = function parseDom(markup) {
  return new JSDOM(markup).window.document;
};

export { parseDom as default };
//# sourceMappingURL=server.esm.js.map
