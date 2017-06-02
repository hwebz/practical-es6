'use strict';

var timer = {
    seconds: 0,
    start: function start() {
        var _this = this;

        setInterval(function () {
            _this.seconds++;
        }, 1000);
    }
};

timer.start();
setTimeout(function () {
    console.log(timer.seconds);
}, 3500);

function puzzle() {
    return function () {
        console.log(arguments);
    };
}
puzzle('a', 'b', 'c')(1, 2, 3); // 1, 2, 3

function puzzle() {
    var _arguments = arguments;

    return function () {
        console.log(_arguments);
    };
}
puzzle('a', 'b', 'c')(1, 2, 3); // a, b, c

var double = function double(value) {
    return value * 2;
};

// Returning object literals
var objectFactory = function objectFactory() {
    return { modular: 'es6' }[(1, 2, 3)].map(function (value) {
        number: value;
    }) // undefined, undefined, undefined
    //[1, 2, 3].map(value => { number: value, verified: true }) // SyntaxError
    [(1, 2, 3)].map(function (value) {
        return { number: value, verified: true };
    });
};

var throwError = function throwError(message) {
    throw new Error(message);
};

throwError('this is a warning') // Uncaught error: this is a warning

[(1, 2, 3, 4)].map(function (value) {
    return value * 2;
}).filter(function (value) {
    return value > 2;
}).forEach(function (value) {
    return console.log(value);
});