#!/usr/bin/env node

var phrases = require('./phrases.json');

var phrase = {
  choose: function (ignorePhrase) {
    var phrasesCopy = phrases.slice();

    if (ignorePhrase) {
      phrasesCopy.splice(ignorePhrase.indexOf(ignorePhrase), 1)
    }

    return phrasesCopy[Math.floor(Math.random() * phrasesCopy.length)];
  },

  build: function (first, second) {
    return 'Made with ' + first + ' and ' + second + '.';
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
