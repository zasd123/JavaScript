var assert = require('assert');

var list = require('./list');
var list = new List();

//list.count

console.log('adding values');
list.add({
    value: 'this is a fucking test',
    value: 'some value',
    value: 'some value',
    value: 'some value',
    value: 'some value',
    value: 'some value',
    value: 'some value'
});




assert.equal(list.searchString(), 'this is a fucking test');
console.log('testing searchString');