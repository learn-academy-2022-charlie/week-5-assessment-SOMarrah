// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.



describe("l33t", () => {
    it("takes in a string and returns a coded message.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
      expect(l33t(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(l33t(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(l33t(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   Got RED
//   FAIL  ./code-challenges.test.js
//   l33t
//     ✕ takes in a string and returns a coded message. (1 ms)

//   ● l33t › takes in a string and returns a coded message.

//     ReferenceError: l33t is not defined

//       26 |         const secretCodeWord3 = "Eccentric"
//       27 |         // Expected output: "3cc3ntr1c"
//     > 28 |       expect(l33t(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//          |       ^
//       29 |       expect(l33t(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       30 |       expect(l33t(secretCodeWord3)).toEqual("3cc3ntr1c")
//       31 |     })

//       at Object.expect (code-challenges.test.js:28:7)

// Test Suites: 1 failed, 1 total


// b) Create the function that makes the test pass.
//  create a function called l33t.
  //takes in a string of words for a parameter
  //expected output is the same string of words with specific letters replaced. ('a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0)
    //input-> "Lackadaisical"
    //output->"L4ck4d41s1c4l"
//Have to search the string and compare each letter to the specific letters.
//tools that iterate: for loops, .map(array), .forEach(array), .filter(array)-don't want a subset.
  //use a conditional to make a decision
    //if current letter is one of the specific letters replace current letter with specific letter
    //else leave the current letter
 //-maybe break the string into an array, compare each letter to the specific letters, push those values into a new array, then return that new array combined into a string?
//tools and research: .split() splits a string into an array of substrings - returns the new array. Does not change the original string. .toString() turns an array into a string with commas. .join() turns an array into a string - does not change the original array. regex - a pattern to match character combinations in strings.
  //maybe can replace the string directly with regex like in ruby?
    //.replace() returns a new string with some/all matches to a pattern. 

//Thinking this through fully before typing any code helped here. Researching regex was super useful. To refactor maybe I can try combining all of the regex into one? will sperators work like in Ruby? How will I identify to replace 'a' with '4' and 'e' with '3' inside on a continuous regex?
const l33t = (string) => {
    return string.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0')
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("arrayMatch", () => {
    it("takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(arrayMatch(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(arrayMatch(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
//Got RED
//   FAIL  ./code-challenges.test.js
//   l33t
//     ✓ takes in a string and returns a coded message. (1 ms)
//   arrayMatch
//     ✕ takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.

//   ● arrayMatch › takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.

//     ReferenceError: arrayMatch is not defined

//       88 |         const letterE = "e"
//       89 |         // Expected output: ["Cherry", "Blueberry", "Peach"]
//     > 90 |       expect(arrayMatch(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
//          |       ^
//       91 |       expect(arrayMatch(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//       92 |     })
//       93 |   })

//       at Object.expect (code-challenges.test.js:90:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// b) Create the function that makes the test pass.
//Create a function called arrayMatch
  //it takes in two parameters: an array and a letter
  //it outputs a subset of the original array containing all the words that match the letter.
//search the entire array for each word that contains a specific letter
  //some sort of decision maybe an if statement to compare the second parameter to the array
  //if true push that index into a new array
//tools: for loop iterates over the array, .map(), .filter(), .forEach can also iterate over an array. if statement/ternary to make a decision 
//tools and research: .includes checks a string against a specific string and returns true/false. It is like it iterates over the string and combines a boolean in one. .forEach could look over each value in the array and compare it to include? or .filter could return a subset of the array with the filtered values taken out?

// const arrayMatch = (array, string) => {
//    return array.filter(value => value.toLowerCase().includes(string))
// } //since it is almost one line could I type it inline?

const arrayMatch = (array, string) => array.filter(value => value.toLowerCase().includes(string))
//the return is implicit in ES6 functions. The arrow points to the code block which is the return. I usually have difficulty with filter, but not today!

// Got GREEN 
// PASS  ./code-challenges.test.js
//   l33t
//     ✓ takes in a string and returns a coded message. (1 ms)
//   arrayMatch
//     ✓ takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.139 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.73s.
// ➜  week-5-assessment-SOMarrah git:(week-5-stephen-omarrah) ✗ yarn jest
// yarn run v1.22.18
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-SOMarrah/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   l33t
//     ✓ takes in a string and returns a coded message. (1 ms)
//   arrayMatch
//     ✓ takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })

// Got RED 
// FAIL  ./code-challenges.test.js
//   l33t
//     ✓ takes in a string and returns a coded message. (2 ms)
//   arrayMatch
//     ✓ takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.
//   fullHouse
//     ✕ takes in an array of 5 numbers and determines whether or not the array is a full house.

//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house.

//     TypeError: value.toLowerCase is not a function

//       130 | // } //since it is almost one line could I type it inline?
//       131 |
//     > 132 | const arrayMatch = (array, string) => array.filter(value => value.toLowerCase().includes(string))
//           |                                                                   ^
//       133 | //the return is implicit in ES6 functions. The arrow points to the code block which is the return. I usually have difficulty with filter, but not today!
//       134 |
//       135 | // Got GREEN 

//       at toLowerCase (code-challenges.test.js:132:67)
//           at Array.filter (<anonymous>)
//       at filter (code-challenges.test.js:132:45)
//       at Object.arrayMatch (code-challenges.test.js:174:14)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.
//create a function called fullHouse
  //takes in an array of 5 numbers
  //expected output to be true/false 
    //true if the array is a full house
    //false if the array is not a full house
//some limitations I am thinking of: what if the numbers are scrambled? [1,2,1,2,1]
//the function has to make a decision-> boolean
    //compare the values in each index to each other
    //if 3 values are equal to each other and 2 values are equal to each other
        //return true
    //else return false
// .sort the array so like values are next to each other, then i can just use a ternary to check and see index 0 vs 1, and 0 vs 2. then check index 3 vs 4
  //return true if all are true
    //else false
//tools and research:

// const fullHouse = (array) => {
//     const newArr = array.sort((b , a) => b - a)
//     if( newArr[0] === newArr[1] && newArr[0] === newArr[2] && newArr[3] === newArr[4]){
//         return true
//     }
//     else if(newArr[0] === newArr[1] && newArr[2] === newArr[3] && newArr[2] === newArr[4]){
//         return true
//     }else{
//         return false
//     }
// }

// Got GREEN
// PASS  ./code-challenges.test.js
// l33t
//   ✓ takes in a string and returns a coded message. (2 ms)
// arrayMatch
//   ✓ takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// refactor attempt with ternary inline

//this is crazy! completely unreadable but it is done in one line lol! deffinately more readable to store the sorted array in a variable and use that variable
const fullHouse = (array) => (array.sort((b , a) => b - a)[0] === array.sort((b , a) => b - a)[1] && array.sort((b , a) => b - a)[0] === array.sort((b , a) => b - a)[2] && array.sort((b , a) => b - a)[3] === array.sort((b , a) => b - a)[4] || array.sort((b , a) => b - a)[0] === array.sort((b , a) => b - a)[1] && array.sort((b , a) => b - a)[2] === array.sort((b , a) => b - a)[3] && array.sort((b , a) => b - a)[2] === array.sort((b , a) => b - a)[4] ? true : false)

// still GREEN 
// PASS  ./code-challenges.test.js
//   l33t
//     ✓ takes in a string and returns a coded message. (1 ms)
//   arrayMatch
//     ✓ takes in a takes in an array of words and a single letter and returns all the words that contain that particular letter. and returns a coded message.
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a full house. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

