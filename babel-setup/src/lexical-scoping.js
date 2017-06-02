var timer = {
    seconds: 0,
    start() {
        setInterval(() => {
            this.seconds++
        }, 1000)
    }
}

timer.start()
setTimeout(function() {
    console.log(timer.seconds)
}, 3500)

function puzzle() {
    return function() {
        console.log(arguments);
    }
}
puzzle('a', 'b', 'c')(1, 2, 3) // 1, 2, 3

function puzzle() {
    return () => { console.log(arguments) }
}
puzzle('a', 'b', 'c')(1, 2, 3) // a, b, c

var double = value => value * 2

// Returning object literals
var objectFactory = () => ({ modular: 'es6' })
[1, 2, 3].map(value => { number: value }) // undefined, undefined, undefined
//[1, 2, 3].map(value => { number: value, verified: true }) // SyntaxError
[1, 2, 3].map(value => ({ number: value, verified: true }))

var throwError = message => {
    throw new Error(message)
}

throwError('this is a warning') // Uncaught error: this is a warning

[1, 2, 3, 4].map(value => value * 2)
            .filter(value => value > 2)
            .forEach(value => console.log(value))