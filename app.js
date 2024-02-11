import * as arrayUtils from "./arrayUtils.js";
import * as stringUtils from "./stringUtils.js";
import * as objectUtils from "./objectUtils.js";

//ArrayUtils arrayPartition Function

//Error check 1
const errorFunc = (num) => num % 2 === 0; 
const errorArrays = arrayUtils.arrayPartition(errorFunc); 
console.log(errorArrays);

//Error check 2
const errorArray1 = 1;
const errorFunc1 = (num) => num % 2 === 0; 
const errorArrays1 = arrayUtils.arrayPartition(errorArray1, errorFunc1); 
console.log(errorArrays1);

//Test Case 1: Throws an Error.
const errorArray2 = []; 
const errorFunc2 = (num) => num % 2 === 0; 
const errorArrays2 = arrayUtils.arrayPartition(errorArray2, errorFunc2); 
console.log(errorArrays2);

//Error check 4
const errorArray3 = [1]; 
const errorFunc3 = (num) => num % 2 === 0; 
const errorArrays3 = arrayUtils.arrayPartition(errorArray3, errorFunc3); 
console.log(errorArrays3);

//Error check 5
const errorArray4 = [1, 2]; 
const errorFunc4 = 1; 
const errorArrays4 = arrayUtils.arrayPartition(errorArray4, errorFunc4); 
console.log(errorArrays4);

//Test Case 1
const arrayToPartition1 = [1, 2, 3, 4, 5]; 
const partitionFunc1 = (num) => num % 2 === 0; 
const partitionedArrays1 = arrayUtils.arrayPartition(arrayToPartition1, partitionFunc1); 
console.log(partitionedArrays1);

//Test Case 2
const arrayToPartition2 = [10, 15, 20, 25, 30]; 
const partitionFunc2 = (num) => num > 18; 
const partitionedArrays2 = arrayUtils.arrayPartition(arrayToPartition2, partitionFunc2); 
console.log(partitionedArrays2);

//Test Case 3
const arrayToPartition3 = ["apple", "banana", "cherry", "date"]; 
const partitionFunc3 = (fruit) => fruit.length >= 6; 
const partitionedArrays3 = arrayUtils.arrayPartition(arrayToPartition3, partitionFunc3); 
console.log(partitionedArrays3);

//Test Case 4
const arrayToPartition4 = [0, -5, 10, -3, 7]; 
const partitionFunc4 = (num) => num >= 0; 
const partitionedArrays4 = arrayUtils.arrayPartition(arrayToPartition4, partitionFunc4); 
console.log(partitionedArrays4);

// //ArrayUtils arrayShift function

// //Error check 1
// console.log(arrayUtils.arrayShift(1));

// //Error check 2
// console.log(arrayUtils.arrayShift(1, 5));

// //Error check 3
// console.log(arrayUtils.arrayShift([1], 1));

// //Error check 4
// console.log(arrayUtils.arrayShift([1, 2]));

// //Error check 5
// console.log(arrayUtils.arrayShift([1, 2], "hi"));

// //Error check 6
// console.log(arrayUtils.arrayShift([1, 2], 1.2));

// //Test Case 1
// console.log(arrayUtils.arrayShift([3, 4, 5, 6, 7], 3));

// //Test Case 2
// console.log(arrayUtils.arrayShift(["Hello", true, 5, "Patrick", "Goodbye"], 4));

// //Test Case 3
// console.log(arrayUtils.arrayShift([1, 2, 3, 4], -2));

// //Test Case 4
// console.log(arrayUtils.arrayShift([7, 8, 9, 10], 0));

// //Test Case 5
// console.log(arrayUtils.arrayShift([7, 11, 15], 3.5));

// //ArrayUtils matrixOne function

// //Error Check 1
// console.log(arrayUtils.matrixOne());

// //Error Check 2
// console.log(arrayUtils.matrixOne("Not an array."));

// //Error Check 3
// console.log(arrayUtils.matrixOne(["Not an array."]));

// //Error Check 4
// console.log(arrayUtils.matrixOne([[]]))

// //Error Check 5
// console.log(arrayUtils.matrixOne([["Not a number."]]));

// //Error Check 6
// console.log(arrayUtils.matrixOne([[1, 2], [1]]));

// //Test Case 1
// console.log(arrayUtils.matrixOne([[2,2,2],[2,0,2],[2,2,2]]));

// //Test Case 2
// console.log(arrayUtils.matrixOne([[0,1,2,0],[3,5,4,2],[1,7,3,5]]));

// //Test Case 3
// console.log(arrayUtils.matrixOne([[0,1,2,0],[3, 5, 4]]));

// //stringUtils swapChars function

// //Error Check 1
// console.log(stringUtils.swapChars());

// //Error Check 2
// console.log(stringUtils.swapChars("First string."));

// //Error Check 3
// console.log(stringUtils.swapChars(1, "Second string."));

// //Error Check 4
// console.log(stringUtils.swapChars("First string.", 2));

// //Error Check 5
// console.log(stringUtils.swapChars(1, 2));

// //Error Check 6
// console.log(stringUtils.swapChars("Fir", "Sec"));

// //Error Check 7
// console.log(stringUtils.swapChars("Fir", "Second String."));

// //Error Check 8
// console.log(stringUtils.swapChars("First string.", "Sec"));

// //Test Case 1
// console.log(stringUtils.swapChars("Patrick", "Hill"));

// //Test Case 2
// console.log(stringUtils.swapChars("hello", "world"));

// //Test Case 3
// console.log(stringUtils.swapChars("Patrick", ""));

// //Test Case 4
// console.log(stringUtils.swapChars());

// //Test Case 5
// console.log(stringUtils.swapChars("John"));

// //Test Case 6
// console.log(stringUtils.swapChars("h", "Hello"));

// //Test Case 7
// console.log(stringUtils.swapChars("h", "e"));

// //stringUtils longestCommonSubstring function

// //Error Test 1
// console.log(stringUtils.longestCommonSubstring());

// //Error Test 2
// console.log(stringUtils.longestCommonSubstring("First string."));

// //Error Test 3
// console.log(stringUtils.longestCommonSubstring(1, 2));

// //Error Test 4
// console.log(stringUtils.longestCommonSubstring(1, "Second String."));

// //Error Test 5
// console.log(stringUtils.longestCommonSubstring("First string.", 2));

// //Error Test 6
// console.log(stringUtils.longestCommonSubstring("Firs", "Seco"));

// //Error Test 7
// console.log(stringUtils.longestCommonSubstring("Firs", "Second string."));

// //Error Test 8
// console.log(stringUtils.longestCommonSubstring("First string.", "Seco"));

// //Error Test 9
// console.log(stringUtils.longestCommonSubstring("",""));

// //Error Test 10
// console.log(stringUtils.longestCommonSubstring("", "Second string."));

// //Error Test 11
// console.log(stringUtils.longestCommonSubstring("First String.", ""));

// //Error Test 12
// console.log(stringUtils.longestCommonSubstring(" ", " "));

// //Error Test 13
// console.log(stringUtils.longestCommonSubstring(" ", "Second string."));

// //Error Test 14
// console.log(stringUtils.longestCommonSubstring("First string.", " "));

// //Test Case 1
// console.log(stringUtils.longestCommonSubstring("abcdxyz", "xyzabcd"));

// //Test Case 2
// console.log(stringUtils.longestCommonSubstring("programming", "programmer"));

// //Test Case 3
// console.log(stringUtils.longestCommonSubstring("abcdef", "123456"));

// //Test Case 4
// console.log(stringUtils.longestCommonSubstring("abcdef", "acdfgh"));

// //stringUtils palindromeOrIsogram

// //Error Check 1
// console.log(stringUtils.palindromeOrIsogram());

// //Error Check 2
// console.log(stringUtils.palindromeOrIsogram("Not an array."));

// //Error Check 3
// console.log(stringUtils.palindromeOrIsogram(["First string.", 1]));

// //Error Check 4
// console.log(stringUtils.palindromeOrIsogram([" ", "Second string."]))

// //Error Check 5
// console.log(stringUtils.palindromeOrIsogram(["First string."]));

// //Test Case 1
// console.log(stringUtils.palindromeOrIsogram(["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"]));

// //Test Case 2
// console.log(stringUtils.palindromeOrIsogram(["level", "Racecar", "Palindrome", "Isogram"]));

// //Test Case 3
// console.log(stringUtils.palindromeOrIsogram(["hello", "world", "Java", "Python"]));

// //Test Case 4
// console.log(stringUtils.palindromeOrIsogram(["abba", "abcd", "Is it OK?", "No lemon, no melon"]));

// //objectUtils objectStats

// //Error Check 1
// console.log(objectUtils.objectStats());

// //Error Check 2
// console.log(objectUtils.objectStats(1));

// //Error Check 3
// console.log(objectUtils.objectStats([1, {}]));

// //Error Check 4
// console.log(objectUtils.objectStats([{}]));

// //Error Check 5
// console.log(objectUtils.objectStats([{"key":"value"}]));

// //Error Check 6
// console.log(objectUtils.objectStats([{"key": 1.3456}]));

// //Test Case 1
// console.log(objectUtils.objectStats([{"a": 12, "b": 8, "c": 15, "d": 12, "e": 10, "f": 15}, {"x": 5, "y": 10, "z": 15}, {"p": -2, "q": 0, "r": 5, "s": 3.5}]))

// //Test Case 2
// console.log(objectUtils.objectStats([{"p": 10, "q": 15, "r": 20}, {"x": -5, "y": 8, "z": 10}, { "a": 5, "b": 5, "c": 5}]))

// //Test Case 3
// console.log(objectUtils.objectStats([{"alpha": 3.5, "beta": 7.2, "gamma": 4.8}, {"x": 0, "y": 0, "z": 0}, {"p": -2, "q": -8, "r": -5}]));

// //objectUtils nestedObjectsDiff

// //Error Test 1
// console.log(objectUtils.nestedObjectsDiff({}));

// //Error Test 2
// console.log(objectUtils.nestedObjectsDiff({}, 1));

// //Error Test 3
// console.log(objectUtils.nestedObjectsDiff({},{}));

// //Test Case 1
// console.log(objectUtils.nestedObjectsDiff({ "key1": "value1", "key2": { "nestedKey": "nestedValues", "arrayKey": [1, 2, 3]}}, 
// { "key1": "value1", "key2": { "nestedKey": "differentValue", "arrayKey" : [1, 2, 4]}, "key3": "newKey"}));

// //Test Case 2
// console.log(objectUtils.nestedObjectsDiff({ "a": 1, "b": { "c": 2, "d": [3, 4]}, "e": "hello"}, { "a": 1, "b": { "c": 2, "d": [3, 5]}, "f": "world"}));

// //Test Case 3
// console.log(objectUtils.nestedObjectsDiff({"x": {"y": {"z": 1}}}, {"x": {"y": {"z": 1}}}));

// //objectUtils mergeAndSumValues

// //Error Test 1
// console.log(objectUtils.mergeAndSumValues());

// //Error Test 2
// console.log(objectUtils.mergeAndSumValues(1, 2));

// //Error Test 3
// console.log(objectUtils.mergeAndSumValues({}));

// //Error Test 4
// console.log(objectUtils.mergeAndSumValues({"a":"nope", "b": 2}));

// //Error Test 5
// console.log(objectUtils.mergeAndSumValues({"a":"1", "b": 2}));

// //Test Case 1
// console.log(objectUtils.mergeAndSumValues({ "a": 3, "b": 7, "c": "5"}, {"b": 2, "c": "8", "d": "4"}, {"a": 5, "c": 3, "e": 6}))

// //Test Case 2
// console.log(objectUtils.mergeAndSumValues({"a": 1, "b": 2, "c": 3}, {"b": 3, "c": 4, "d": 5}, { "a": 2, "c": 1, "e": 6 }));

// //Test Case 3
// console.log(objectUtils.mergeAndSumValues({"x": 10, "y": 5, "z": 3}, { "x": 5, "y": 2, "z": 7}, {"x": 3, "y": 8, "z": 1 }));

// //Test Case 4
// console.log(objectUtils.mergeAndSumValues({"one": 15, "two": 20}, { "one": 5, "two": 10 }, {"two": 5, "three": 8 }));

// //Test Case 5
// console.log(objectUtils.mergeAndSumValues({ "a": 1, "b": "2", "c": 3 }, { "b": 3, "c": 4, "d": 5 }, {"a": 2, "c": "hello", "e": 6 }));