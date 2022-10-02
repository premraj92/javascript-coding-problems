// What is a Polyfill ??
// A Polyfill - as the name suggests we are filling in some gaps in multiple things
// Those things are nothing but browsers in our context - so any new feature of javascript that we may wanna use may not be implemented by all browsers - but if we still wanna use that feature & make sure it does not break in unsupported browser that's where polyfills come in

// In the end polyfills are nothing but our own piece of code that replicates the internal implementation of the original feature we are using with a older syntax that is accepted by every browser

// For example if methods like forEach, map & filter were not supported initially we will write a polyfill for the same using a plain for-loop, same is the case for replacing restParameters in functions with good old arguments object etc.




// A Good POLYFILL Implementation should have the following Characteristics
    // It should support/do all the things that is done by original feature we are replicating 
        // For ex: if its forEach it should
            // 1. Accept a callback like forEach
            // 2. That callback should in turn have access to all the 3 arguments that a forEach callback normally have like currValue, index, originalArray itself on top of which our forEach was called
            // 3. And our implementation should be callable on Any Array in our program just like forEach
            // 4. It should not return any value by default just like forEach




// Before implementing polyfill for any feature we should always check if the said feature exists in the current browser or not

// we will temporarily make Array.prototype.forEach absent here by assigning it null

Array.prototype.forEach = null
Array.prototype.map = null
Array.prototype.filter = null
Array.prototype.some = null
Array.prototype.every = null
Array.prototype.reduce = null
Array.prototype.flat = null


// if(!Array.prototype.forEach) {
//     // Our Implementation of forEach goes here since by default forEach is not available

//     Array.prototype.forEach = forEach     

//     function forEach(callbackFunc) {
//         const array = this
//         for (let [index, value] of array.entries()) {
//             callbackFunc(index, value, array)
//         }
//     }
// }

[1, 2, 3, 4].forEach((currIndex, currValue, wholeArray) => {
    console.log({currIndex, currValue, wholeArray})
})





// THIS IMPLEMENTATION is NOT COMPLETE mean to say none of the below implementations is attached to the Array.prototype so you can call these implementations like a normal 

// Array helper methods implemented with ES5 syntax

// forEach 
// should accept an array & a callback & execute the callback for every element in the array
// gives you access to three things as params - currValue, currIndex, array Itself in that order 
// doesn't mutate the original array
// doesn't return anything by default

function forEach(arr, callback) {
    for(let i=0; i < arr.length ;i++) {
        callback(arr[i], i, arr)
    }
}


// map
// should accept an array & a callback & execute the callback for every element in the array
// gives you access to three things as params - currValue, currIndex, array Itself in that order 
// doesn't mutate the original array
// Main difference lies in the fact that map returns once for every callback execution i.e. everytime the callback is executed it transforms the currentValue to a new form as per the transformation logic & returns the transformed value
// And for each transformed value returned is stored in a new array & that array is returned to us after executing the callback on all elements in the array 

function map(arr, callback) {
    const transformedArr = []

    for(let i=0; i < arr.length; i++) {
        transformedArr.push(callback(arr[i], i, arr))
    }

    return transformedArr
}

// find
// the callback/predicate & the args it provides your callback are all same as forEach & map
// but slightly different from both of them
// it executes the callback on every element till one satisfies the conition inside the callback & than it returns that matched value/element
// it ignores all the elements that comes after it

function find(arr, callback) {
    let firstMatch

    for(let i=0; i < arr.length; i++) {
        if( callback(arr[i], i, arr) ) {
            firstMatch = arr[i]
            break
        }
    }

    return firstMatch
}


// filter
// similar to find but this returns all the values that matches the predicate/condition not just the first one 

function filter (arr, callback) {
    const matchingElements = []

    for(let i=0; i < arr.length; i++) {
        callback(arr[i], i, arr) ? matchingElements.push(arr[i]) : matchingElements
    }

    return matchingElements
}


// some
// returns a boolean - either true or false depending upon whether atleast one element in the given array satisfies the predicate/condition inside the callback

function some (arr, callback) {
    for(let i=0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) return true
    }

    return false
}


// every
// similar to some - returns a boolean but whether it returns true/false is not dependent on atleast one value satisfying the predicate/condition inside the callback but rather on all values in the array satisfying the said condition

function every(arr, callback) {

    for(let i=0; i < arr.length; i++) {
        if(!callback(arr[i], i ,arr)) return false
    }

    return true
}


// flat
// flattens deeply nested array till the given depth && by default flattens one level
const arr2 = [0, 1, 2, [[[3, 4]]]];

// flattening a deeply nested array using recursion
function flat(arr, depth=1, flattenedArr = []) {
    for(let val of arr) {
        const isArray = Array.isArray(val)

        if(!isArray) flattenedArr.push(val)

        if(isArray && depth <= 1 ) {
            flattenedArr.push(...val)
        }

        if(isArray && depth > 1) {
            flat(val, depth-1, flattenedArr)
        }
    }
    return flattenedArr
}


// reduce
// reduces all the elements in the original array into a single value 
// the reduce method accepts a callback just like most other higher order array helpers here but one of the two main differences is apart from accepting the callback as the first argument reduce also expects a second value to be passed i.e. the initial value in the same datatype as the final value, for example if we expected the final accumulated value to be a string than "", number than 0, array than [] or object than {} 
// the callback passed to reduce is also slightly different in that the first argument is the accumulator that is the result of the previous execution of the callback

function reduce(arr, callback, starterVal) {
    let prevAccValue = starterVal == null ? arr[0] : starterVal

    for (let i=0; i < arr.length; i++) {
        if(starterVal == null && i === 0) continue

        prevAccValue = callback(prevAccValue, arr[i], i, arr)
    }

    return prevAccValue
}


module.exports = {
    forEach,
    map,
    find,
    filter,
    some,
    every,
    flat,
    reduce
}