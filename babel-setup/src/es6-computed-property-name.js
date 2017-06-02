var expertise = 'journalism'
var person = {
    name: 'Sharon',
    age: 27,
    [expertise]: {
        years: 5,
        interests: ['international', 'politics', 'internet']
    }
}
// person[expertise] = {
//     years: 5,
//     interests: ['international', 'politics', 'internet']
// }

var grocery = {
    id: 'bananas',
    name: 'Bananas',
    units: 6,
    price: 10,
    currency: 'USD'
}
var groceries = {
    [grocery.id]: grocery
}

// function getEnvelope(type, description) {
//     var envelope = {
//         data: {}
//     }
//     envelope[type] = description
//     return envelope
// }

function getEnvelope(type, description) {
    return {
        data: {},
        [type]: description
    }
}