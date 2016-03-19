#!/usr/bin/env node

var chalk = require('chalk')

var chalkStyles = require('./chalkStyles.json')
var phrases = require('./phrases.json');

var util = {
  getRandomIndex: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },

  getRandomItem: function (arr) {
    return arr[this.getRandomIndex(arr)];
  }
}

var phrase = {
  choose: function (ignorePhrase) {
    var phrasesCopy = phrases.slice();

    if (ignorePhrase) {
      phrasesCopy.splice(ignorePhrase.indexOf(ignorePhrase), 1)
    }

    return phrasesCopy[util.getRandomIndex(phrasesCopy)];
  },

  build: function (first, second) {
    return 'Made with ' + first + ' and ' + second + '.';
  },

  format: function (phrase) {
    var style = chalk[util.getRandomItem(chalkStyles)]

    return style('\n\n\t' + phrase + '\n');
  }
}

var phraseOne = phrase.choose();
var phraseTwo = phrase.choose(phraseOne);
var finalPhrase = phrase.build(phraseOne, phraseTwo);
var formattedPhrase = phrase.format(finalPhrase);

console.log(formattedPhrase);
