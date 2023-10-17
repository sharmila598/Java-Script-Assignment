function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence: " + reversedSentence);


const numbers = [5, 2, 9, 1, 5, 6, 3];

// Sorting in descending order
const sortedArray = numbers.sort((a, b) => b - a);

console.log("Sorted array in descending order: " + sortedArray);
