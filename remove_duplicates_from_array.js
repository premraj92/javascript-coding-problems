// 4. Removing duplicate elements in array 
console.log(`------------------------ 4. Removing duplicate elements in array ----------------`)

const inpArrOne = [1, 2, 3, 2, 5, 1, 6, 'yes', true, 'no', 'try', 'yes', false, true, 7]
let resultArr = []
console.log(`Array with duplicates `, inpArrOne)

// // Solution 1 - Without using any array helper methods
// for(let i=0; i < inpArrOne.length ;i++) {
//     resultArr.indexOf(inpArrOne[i]) === - 1 ?  resultArr.push(inpArrOne[i]): resultArr
// }

// console.log(`Array with only the unique elements `, resultArr)


// // Solution 2 - using Array.filter() & indexOf()
// resultArr = inpArrOne.filter((item, index, arr) => {
//     // indexOf method returns the index of first ocuurence of a value in the array & -1 if its not available, so if we compare the position of the currentValue returned by indexOf method && the actual index of the item & if it does not match we know an instance of the current item already exists
//     return inpArrOne.indexOf(item) === index
// })

// console.log(`Array with only the unique elements `, resultArr)


// Solution 3 - by converting the Array to Set
    // A Set is a collection of unique values. To remove duplicates from an array: First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
    // Than we are again converting the Set into an Array using spread operator 
    const uniqueArr = [...new Set(inpArrOne)]
    console.log(`Duplicates removed from above array `, uniqueArr)