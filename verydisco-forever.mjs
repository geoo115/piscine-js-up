// verydisco-forever.mjs

import { writeFile } from 'fs';

// Get the argument passed from the command line
const input = process.argv[2];

// Function to make a word very disco
function makeWordVeryDisco(word) {
  // Calculate the middle index to split the word
  const middleIndex = Math.ceil(word.length / 2);

  // Split the word into two parts
  const firstHalf = word.slice(0, middleIndex);
  const secondHalf = word.slice(middleIndex);

  // Concatenate the parts in reverse order
  const discoWord = secondHalf + firstHalf;

  return discoWord;
}

// Function to make each word of a sentence very disco
function makeSentenceVeryDisco(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  // Iterate over each word and make it very disco
  const discoWords = words.map(makeWordVeryDisco);

  // Join the disco words back into a sentence
  const discoSentence = discoWords.join(' ');

  return discoSentence;
}

// Check if the input is a sentence or a single word
let result;
if (input.includes(' ')) {
  // Input is a sentence, make each word very disco
  result = makeSentenceVeryDisco(input);
} else {
  // Input is a single word, make it very disco
  result = makeWordVeryDisco(input);
}

// Write the result to the verydisco-forever.txt file
writeFile('verydisco-forever.txt', result, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Result written to verydisco-forever.txt');
  }
});
