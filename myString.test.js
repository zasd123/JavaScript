var assert = require('assert');
var myString = require('./myString');
var mystring = new myString();

//list.count

console.log('adding values');
mystring.add({
    value: 'this is a test',
    value: 'this is also a test',
    value: 'this is a test3'
});

console.log('testing searchString');
console.log(mystring); 
//console.log(mystring.items.getvalue);
//console.log(mystring.getvalue());
//assert.equal(mystring.searchString("test"), 1);
var output = mystring.searchString('test');
console.log(output);



//can we just write this as a myString(string , int  , searchstring);