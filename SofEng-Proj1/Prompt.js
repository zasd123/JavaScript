var round = require('./Round_Up');
var convert = require('./Convert');

var homeworks;
var tests;
var missed_day;
var prompt = require('prompt');

prompt.start();
prompt.get(['Hw1', 'Hw2','Hw3', 'Test1','Test2','Attend'], function (err, result) {
homeworks = ((parseInt(result.Hw1)+ parseInt(result.Hw2)+ parseInt(result.Hw3))/3);
tests = (((parseInt(result.Test1)+parseInt(result.Test2))/(2)));
missed_day = (parseInt(result.Attend));

//console.log('Average test = '+ tests);
//console.log ('Average hw = '+ homeworks);
//console.log('Missed days = '+ missed_day);
console.log(round(convert(tests,homeworks),missed_day));

});
