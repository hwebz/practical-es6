var book = {
    title: 'Modular ES6',
    author: 'Nicolas',
    publisher: 'O\'Reilly'
}

var listeners = []
function listen() {}
// Property value shorthand
var events = { listeners, listen }

var store = {}
var storage = { getItem, setItem, clear }
function getItem(key) {
    return key in store ? store[key] : null
}
function setItem(key, value) {
    store[key] = value
}
function clear() {
    store = {}
}

