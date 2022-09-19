// Find the number of occurences/duplicates of searchWords in a Search Array in a NEW array
// Now check the number of times the words in the first searchArray occur in the second targetArray

const wordCheck = ['test', 'run', 'jump']
const wordsListOne = ['jump', 'test', 'run', 'fun', 'gun', 'jump', 'test', 'son', 'test', 'jest']

// Solution One - more basic solution
function findWordCount(wordCheck, wordsList) {
    const wordCountDetails = {}

    wordCheck.forEach(wordToCheck => {

        wordsList.forEach((wordToCheckAgainst, index) => {
            if(wordToCheck === wordToCheckAgainst) {
                wordCountDetails[wordToCheck] = wordCountDetails[wordToCheck] ? ++wordCountDetails[wordToCheck] : 1
            }
        })

    })

    return wordCountDetails
}

console.log(findWordCount(wordCheck, wordsListOne))




// // Solution two - using map && filter
// function findWordCountTwo(searchArray, targetArray) {
//     return searchArray.map(searchItem => {
//         return { [searchItem] :  targetArray.filter(currItem => currItem === searchItem).length }
//     })
// }
// console.log(findWordCountTwo(wordCheck, wordsListOne))

// same as the above function but some syntactic sugar to move the expression of map method to a single line & avoid use of curly braces & return keyword for map callback
function findWordCountTwo(searchArray, targetArray) {
    return searchArray.map(searchItem => ( { [searchItem] :  targetArray.filter(currItem => currItem === searchItem).length } ))
}

console.log(findWordCountTwo(wordCheck, wordsListOne))



// Solution 3 - using Reduce & filter
function functionWordCountThree(searchArray, targetArray) {
    return searchArray.reduce((acc, searchItem) => {
                acc[searchItem] = targetArray.filter(currItem => currItem.toLowerCase() === searchItem.toLowerCase()).length 
                return acc
            },{})
}

console.log(functionWordCountThree(wordCheck, wordsListOne))