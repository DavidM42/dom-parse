let parser = null;

const getParser = () => {
  if (parser === null) {
    parser = new window.DOMParser();
  }
  return parser;
};

const parseDom = (markup) =>
  getParser().parseFromString(markup, "text/html");

export default parseDom;
