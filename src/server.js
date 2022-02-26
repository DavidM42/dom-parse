import { JSDOM } from 'jsdom';

const parseDom = (markup) => new JSDOM(html).window.document;

export default parseDom;
