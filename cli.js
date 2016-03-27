#!/usr/bin/env node

var meow = require('meow');
var madeWith = require('./')();

var cli = meow({
  help: [
    'Example',
    '\tMade with human ingenuity and magic.'
  ].join('\n')
});

console.log(madeWith);
