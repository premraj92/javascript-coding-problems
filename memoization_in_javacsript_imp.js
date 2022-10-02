// Let's talk about Memoization 
// Memoization is nothing but caching of some repeatedly executed piece of code which may produce the same result/output maybe with the same Input


// Some common areas where memoization can be used
    // 1. some big functions with huge calculations & requiring significant time & space complexity
    // 2. some async calls that may fetch similar data (i.e. huge json data)
    // 3. or In Dynamic programming where with RECURSIVE function implementations you can go through highly complex & nested objects/tree structures where you will need large no recursive function calls are required

// In all of the scenarios mentioned above you may often use same inputs to get the same output SO YOU CAN STORE/CACHE the results & on the next try you can check if the currInput already exists in your cached data . . . If yes than return/use that data


// But I have a FEW DOUBTS
    // 1. Does where we store the data matter like in a variable OR in a browser Provided slightly more permanent objects like local/session Storage matters ??
    // 2. how does just storing the input & output-data as key & value pair in a localStorage different from memoization && is that pattern is also called Memoization or Is there any Significant differences between the two ??
    // Where do we stop thinking about Memoization as an approps solution & start considering things like Web workers & Service workers as appropriate options
    
    






// // // Example one - function with complex computations
// // // Now the below function is made Purposefully inefficient to simulate the need for memoization in complex functions
// function squareTheNumber(n) {
//     let output = 0

//     for(let i=0; i < n ; i++) {
//         for(let j=0; j < n; j++) {
//             output += 1
//         }
//     }

//     return output
// }

// // // each of the calls below eventhough its the same function call with same input takes half/one second ore more for each call
// console.time('squareTheNumberWithOutMemoization')
// console.log(squareTheNumber(5))
// console.log(squareTheNumber(50000))
// console.log(squareTheNumber(50000))
// console.log(squareTheNumber(50000))
// console.log(squareTheNumber(50000))
// console.timeEnd('squareTheNumberWithOutMemoization')


// With Memoization
const squaredOutputs = []
function squareTheNumberWithMemo(n) {
    if(squaredOutputs[n] != null) return squaredOutputs[n]
    
    let output = 0

    for(let i=0; i < n ; i++) {
        for(let j=0; j < n; j++) {
            output += 1
        }
    }

    squaredOutputs[n] = output
    return output
}

console.time('squareTheNumberWithMemoization')
console.log(squareTheNumberWithMemo(5))
console.log(squareTheNumberWithMemo(50000))
console.log(squareTheNumberWithMemo(50000))
console.log(squareTheNumberWithMemo(50000))
console.log(squareTheNumberWithMemo(50000))
console.timeEnd('squareTheNumberWithMemoization')










// // // Example - 2 - in dynamic Programming

// // Fibbonacci with Recusrion but without memoization
// function findFibbonacciAtIndex(index) {
//     // 1. base case
//     if(index <= 1) return 1

//     // 2. recursive function call
//     return findFibbonacciAtIndex(index - 1) + findFibbonacciAtIndex(index - 2)
// }

// console.time('FibbonaciRecusriveWithoutMemoization')
// console.log(findFibbonacciAtIndex(8))
// console.log(findFibbonacciAtIndex(40))
// console.timeEnd('FibbonaciRecusriveWithoutMemoization')





// Fibbonacci with Recusrion & Memoization
function findFibbonacciAtIndexWMemo(index, prevResults = []) {
    if(prevResults[index] != null) return prevResults[index]
    // 1. base case
    if(index <= 1) return 1
    
    // 2. recursive function call
    const result = findFibbonacciAtIndexWMemo(index - 1, prevResults) + findFibbonacciAtIndexWMemo(index - 2, prevResults)

    // here in the RECURSIVE call the next three lines of code will not be executed till the all the recusrive function calls from index(for example 40) to 2 are added to the CALLSTACK
    // because the function execution starts after only this point & when we starts executing from index=2 its value is first pushed 
    prevResults[index] = result
    console.log(`Curr Result is `,result)
    return result
}

console.time('FibbonaciRecusriveWithMemoization')
console.log(findFibbonacciAtIndexWMemo(8))
console.log(findFibbonacciAtIndexWMemo(40))
console.timeEnd('FibbonaciRecusriveWithMemoization')