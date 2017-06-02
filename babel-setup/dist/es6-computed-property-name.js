'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var expertise = 'journalism';
var person = _defineProperty({
    name: 'Sharon',
    age: 27
}, expertise, {
    years: 5,
    interests: ['international', 'politics', 'internet']
});
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
};
var groceries = _defineProperty({}, grocery.id, grocery);

// function getEnvelope(type, description) {
//     var envelope = {
//         data: {}
//     }
//     envelope[type] = description
//     return envelope
// }

function getEnvelope(type, description) {
    return _defineProperty({
        data: {}
    }, type, description);
}