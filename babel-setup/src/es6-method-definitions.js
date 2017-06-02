// var emitter = {
//     events: [],
//     on: function(type, fn) {
//         if (this.events[type] === undefined) {
//             this.events[type] = []
//         }
//         this.events[type].push(fn)
//     },
//     emit: function(type, event) {
//         if (this.events[type] === undefined) {
//             return
//         }
//         this.events[type].forEach(function(fn) {
//             fn(event)
//         })
//     }
// }

var emitter = {
    events: [],
    on(type, fn) {
        if (this.events[type] === undefined) {
            this.events[type] = []
        }
        this.events[type].push(fn)
    },
    emit(type, event) {
        if (this.events[type] === undefined) {
            return
        }
        this.events[type].forEach(function(fn) {
            fn(event)
        })
    }
}