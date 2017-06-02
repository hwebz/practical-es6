var character = {
    name: 'Bruce',
    pseudonym: 'Batman',
    metadata: {
        age: 34,
        gender: 'male'
    },
    batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
}

var { pseudonym } = character, two = 2
var { name: firstname } = character
console.log(firstname)

var { metadata: { gender }} = character
var { metadata: { gender: characterGender }} = character
console.log(characterGender)

var { boots = { size: 10 }} = character
console.log(boosts)

var { metadata: { enemy = 'Satan' }} = character
console.log(enemy)

var { boots: footwear = { size: 10 }} = character
console.log(footwear)

var { ['boo' + 'ts']: characterBoots } = character
console.log(characterBoots)

var coordinates = [12, -7]
var [x, y] = coordinates
console.log(x)

var names = ['James', 'L.', 'Howlett']
var [ firstName, , lastName ] = names
console.log(lastName)

var names = ['James', 'L.']
var [ firstName = 'John', , lastName = 'Doe'] = names
console.log(lastName)