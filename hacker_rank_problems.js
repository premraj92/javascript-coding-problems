    // HACKER RANK - 7 day Interview Preperation KIT



    // // DAY - 1



    // // PROBLEM - 1

    /*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const mainArrLength = arr.length
    
    const positiveArr = (arr.filter(item => item > 0)).length / arr.length
    const negativeArr = (arr.filter(item => item < 0)).length / arr.length
    const zerosArr = arr.filter(item => item === 0).length / arr.length
    
    console.log(positiveArr.toPrecision(6))
    console.log(negativeArr.toPrecision(6))
    console.log(zerosArr.toPrecision(6))
    

}



    // PROBLEM - 2

    /*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const sumArr = []
    for(let i=0; i < arr.length; i++) {
       const currSum = arr.filter((num, index, arr) => i !== index).reduce((acc, curr) => acc + curr, 0)
       sumArr.push(currSum)
    }
    
    const minSum = Math.min(...sumArr)
    const maxSum = Math.max(...sumArr)
    
    console.log(`${minSum} ${maxSum}`)
}


    // PROBLEM - 3
    function timeConversion(s) {
        // Write your code here
        const isAM = s.includes('AM') ? true : false
        const [hour, minute, second] = s.slice(0, -2).split(':').map(str => Number(str))    
         
        if(isAM && hour < 12) {
            return s.slice(0, -2)
        }
        
        if(isAM &&  hour === 12 && minute === 0 && second ===0) {
            return '00:00:00'
        }
        
        if(isAM && hour === 12 && (minute > 0 || second > 0)) {
            return `00:${minute < 10 ? String(minute).padStart(2, '0'): minute}:${second < 10 ? String(second).padStart(2, '0') : second}`
        }
        
        if(!isAM && hour === 12) {
            return s.slice(0, -2)
        }
        
        if(!isAM && hour < 12) {
            return `${hour + 12}:${minute < 10 ? String(minute).padStart(2, '0'): minute}:${second < 10 ? String(second).padStart(2, '0') : second}`
        }
    }
    
    console.log(timeConversion('12:00:00AM'))
    console.log(timeConversion('12:00:00PM'))
    console.log(timeConversion('12:55:7AM'))
    console.log(timeConversion('11:55:7AM'))
    console.log(timeConversion('1:22:7AM'))
    console.log(timeConversion('11:55:7PM'))
    console.log(timeConversion('9:5:7PM'))


    function fizzBuzz(n) {
        for(let i=1; i <= n; i++) {
            const val = ((i % 3 ? '': 'Fizz') + (i % 5 ? '': 'Buzz')) || i
            console.log(val)
        }
    }

    fizzBuzz(15)




// First Timed Mock Test/Assignment on Day - 1 - Finished 100%
    /*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a-b)
    const centreIndex = Math.ceil(sortedArr.length / 2)
    
    return sortedArr[centreIndex - 1]
}

console.log(findMedian([5, 3, 4, 2, 1, 2, 3, 6, 7]))
console.log(findMedian([7]))
console.log(findMedian([0, 1, 2, 4, 6, 5, 3]))




// Day 2 - Problem 4

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

// // Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // Write your code here
    const duplicates = a.sort((a,b) => a-b )
                        .filter((item, index, arr) => arr.indexOf(item) !== index)

                        console.log(duplicates)
    let uniqueNum
    for(let i=0; i<a.length ;i++) {
      const nonUnique = duplicates.find(item => item === a[i])
      if(!nonUnique) uniqueNum = a[i]  
    }
    
    return uniqueNum
}

console.log(lonelyinteger([1, 2, 3, 5, 4, 4, 3, 2, 1, 3]))




// Find the difference between the SUM of DIAGONALS in THIS MATRIX based - 2D ARRAY
const _2DArray = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ]

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum = 0
    let rightDiagonalSum = 0

    for(let i =0; i < arr.length; i++) {
        console.log(arr[i][i])
        leftDiagonalSum += arr[i][i]

        console.log(arr[(arr.length -1) - i][i])
        rightDiagonalSum += arr[(arr.length - 1) - i][i]
    }

    return Math.abs(leftDiagonalSum - rightDiagonalSum)
}

let _2DArrayTwo = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

console.log(diagonalDifference(_2DArray))
console.log(diagonalDifference(_2DArrayTwo))

// function diagonalDifference(arr) {
//     // Write your code here
//     let left = 0, right = 0, resultado = 0; 
    
//     for (let i = 0; i< arr.length; i++){
//         left += arr[i][i];
//         right += arr[(arr.length - 1) - i][i];
//     }
//     resultado = Math.max(left, right) - Math.min(left, right);
//     return resultado;
// }

// console.log(diagonalDifference(_2DArray))
// console.log(diagonalDifference(_2DArrayTwo))