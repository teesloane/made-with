#!/usr/bin/env node

// Phrase 1 data:

const phraseSet1 = [
  'a bottle of Jack',
  'two thumbs up',
  'a pile of garbage',
  'love',
  'great pain and anguish',
  'small chips of wood',
  'an ostrich feather',
  'the saline liquids of the eye',

];

const phraseSet2 = [
  'a winter cold',
  'a giant sunflower',
  'a cold shower'
];

var phrase1 = phraseSet1[Math.floor(Math.random() * phraseSet1.length)];
var phrase2 = phraseSet2[Math.floor(Math.random() * phraseSet2.length)];

// phrase 2 data:

console.log(`\n\tMade with ${ phrase1 } and ${ phrase2 }.\n`);
