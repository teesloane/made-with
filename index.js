#!/usr/bin/env node

var chalk = require('chalk')

var chalkStyles = require('./chalkStyles.json')
var phrases = require('./phrases.json');

var util = {
  getRandomIndex: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },

  getRandomItem: function (arr, ignoreItem) {
    var arrCopy = arr.slice();

    if (ignoreItem) arrCopy.splice(arrCopy.indexOf(ignoreItem), 1)

    return arrCopy[this.getRandomIndex(arrCopy)];
  }
}

var phrase = {
  choose: function (ignorePhrase) {
    return util.getRandomItem(phrases, ignorePhrase);
  },

  build: function (first, second) {
    var firstStyle = util.getRandomItem(chalkStyles);
    var secondStyle = util.getRandomItem(chalkStyles, firstStyle);

    return 'Made with ' + chalk[firstStyle](first) + ' and ' + chalk[secondStyle](second) + '.';
  },

  format: function (phrase) {
    return '\n\t' + phrase + '\n';
  }
}

var phraseOne = phrase.choose();
var phraseTwo = phrase.choose(phraseOne);
var finalPhrase = phrase.build(phraseOne, phraseTwo);
var formattedPhrase = phrase.format(finalPhrase);

console.log(formattedPhrase);
