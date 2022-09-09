// 11. Finding Missing number or Numbers in from a Numbers Sequence in Arrays
console.log(`------------------------ 11. Finding Missing number or Numbers in from a Numbers Sequence in Arrays ----------------`)

const numSeqArray = [1, 3, 5, 4, 7, 8, 12, 22, 11, 14, 1, 4]

// psuedo code
// first you should sort the array because only if its in sequence can we find what is missing
// second once its sorted we should loop over it to find missing numbers in sequence
// third push the missing numbers in a new array

// we should set a range - range is calculated with the SMALLEST_POSTIVE_INTEGER to the LARGEST_POSITIVE_INTEGER
// Input should not have negative Numbers in the sequence, if its there it should be ignored


// Our Solution handles empty array, Unsorted array, Array with Duplicates, Both Postive & negative values 
function findMissingNumbers (numbersArr) {

    if(numbersArr.length === 0) return 'Input array is empty'

    // we sort & remove the duplicates from the Original array
    const uniquArr =numbersArr
                        .sort((a, b) => a-b)
                        .filter((number, index, array) => (array.indexOf(number) === index))
    console.log(uniquArr)

    const missingNumArr = []
    
    for(let i=Math.min(...uniquArr); i < Math.max(...uniquArr); i++) {
        if(uniquArr.indexOf(i) === -1) missingNumArr.push(i)
    }

    return missingNumArr
}

console.log(findMissingNumbers(numSeqArray))
console.log(findMissingNumbers([1, 2, 4, -1, 7, 11, 17, -56]))

// // const tt = numSeqArray.every(item => typeof item ===  'number')
// // const vv = [1, 2, 4, -1, 7, 11, 17, -56].every(item => item > 0)
// // const ww = [1, 2, 4, -1, 7, 11, 17, -56].some(item => item > 0)

// const sum = numSeqArray.reduce((prev, curr) => prev + curr, 0)

// console.dir(findMissingNumbers)