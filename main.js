function main() {
	console.log(processString(process.argv[2]));
}

if (require.main === module) {
	main();
}

function processString(inputString) {
	let result = '';
	let arrayOfWords = inputString.split(/(\w+)/);
	arrayOfWords = fixArrayOfWords(arrayOfWords);
	for (var i = 0; i < arrayOfWords.length; i++) {
		if(!isNotLetter(arrayOfWords[i])) {
			result += processWord(arrayOfWords[i]);
		}else {
			result += arrayOfWords[i];
		}
	}
	return result;
}

function processWord(word) {
	if(word.length == 1) {
		return word;
	}
	let wordArray = word.split('');
	let firstChar = wordArray[0];
	let lastChar = wordArray[wordArray.length-1];
	wordArray = fixArrayOfWords(wordArray);
	wordArray = wordArray.filter((val, index, arr) => arr.indexOf(val) === index);
	return firstChar+wordArray.length+lastChar;
}

function fixArrayOfWords(inputArray) {
	inputArray.shift();
	inputArray.pop();
	return inputArray;
}

function isNotLetter(char) {
	return !(/[a-zA-Z]/).test(char);
}