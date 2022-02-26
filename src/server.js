import { JSDOM } from 'jsdom';

const parseDom = (markup) => new JSDOM(markup).window.document;

export default parseDom;
