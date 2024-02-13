// verydisco-reverso.mjs

import { readFile } from 'fs';

// Get the file name from the command line argument
const fileName = process.argv[2];

// Function to reverse a very disco word
function reverseVeryDiscoWord(word) {
  // Calculate the middle index to split the word
  const middleIndex = Math.floor(word.length / 2);

  // Split the word into two parts
  const firstHalf = word.slice(0, middleIndex);
  const secondHalf = word.slice(middleIndex);

  // Concatenate the parts in reverse order
  const reversedWord = secondHalf + firstHalf;

  return reversedWord;
}

// Function to reverse the content from very disco mode
function reverseVeryDiscoContent(content) {
  // Split the content into an array of words
  const words = content.split(' ');

  // Reverse each word
  const reversedWords = words.map(reverseVeryDiscoWord);

  // Join the reversed words back into the content
  const reversedContent = reversedWords.join(' ');

  return reversedContent;
}

// Read the content of the file
readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    try {
      // Reverse the very disco content
      const reversedContent = reverseVeryDiscoContent(data);

      // Print the result in the console
      console.log(reversedContent);
    } catch (error) {
      console.error('Error deciphering content:', error);
    }
  }
});
