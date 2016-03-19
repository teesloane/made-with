#!/usr/bin/env node

var chalk = require('chalk')

var chalkStyles = require('./chalkStyles.json')
var phrases = require('./phrases.json');

var util = {
  getRandomIndex: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },

  getRandomItem: function (arr, ignoreItem) {
    var arrCopy = phrases.slice();

    if (ignoreItem) arr.splice(ignoreItem.indexOf(ignoreItem), 1)

    return arr[this.getRandomIndex(arr)];
  }
}

var phrase = {
  choose: function (ignorePhrase) {
    return util.getRandomItem(phrases, ignorePhrase);
  },

  build: function (first, second) {
    return 'Made with ' + first + ' and ' + second + '.';
  },

  format: function (phrase) {
    var style = chalk[util.getRandomItem(chalkStyles)]

    return style('\n\t' + phrase + '\n');
  }
}

var phraseOne = phrase.choose();
var phraseTwo = phrase.choose(phraseOne);
var finalPhrase = phrase.build(phraseOne, phraseTwo);
var formattedPhrase = phrase.format(finalPhrase);

console.log(formattedPhrase);
