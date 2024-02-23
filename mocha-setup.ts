import {JSDOM} from 'jsdom'

const jsdom = new JSDOM('<div id="main"><div>', { url: 'http://localhost:3000' });

// @ts-expect-error: because of using global
global.window = jsdom.window;
global.document = jsdom.window.document;
global.Node = jsdom.window.Node;
global.MouseEvent = jsdom.window.MouseEvent;




