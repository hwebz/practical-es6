'use strict';

var book = {
    title: 'Modular ES6',
    author: 'Nicolas',
    publisher: 'O\'Reilly'
};

var listeners = [];
function listen() {}
// Property value shorthand
var events = { listeners: listeners, listen: listen };

var store = {};
var storage = { getItem: getItem, setItem: setItem, clear: clear };
function getItem(key) {
    return key in store ? store[key] : null;
}
function setItem(key, value) {
    store[key] = value;
}
function clear() {
    store = {};
}