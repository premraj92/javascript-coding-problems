// Compare two Objects to see if they are qual to one another

// Now with Objects we know that when its reassigned/copied, its shallowCopied that is Only its reference is copied which means both the original & copied objects point to the Same memory location



// Very simple example of a shallowCopy of objOne into objTwo & now both points to the same location so a simple comparison with === should evaluate to true as shown below
const objOne = {name: "Rocky", age: 70}
const objTwo = objOne
console.log(`Is objects objOne && objTwo same : `, objOne === objTwo)





// But the same is not the case for the next two Objects objThree & objFour because even though both objects have the same exact information/key_value_pairs - they point to Different references so a simple `objThree === objFour` won't work
const objThree = {name: "James", age: 30, eyes: 'Blue'}
const objFour = {name: "James", age: 30, eyes: 'Blue'}

console.log(`Is objects objThree & objFour are same `, objThree === objFour)







// So while we know that these two Objects are same how do we verify it programatically
function compareObjects(objOne , objTwo) {
    // 1. First lets make sure the length of both objects i.e. number of keys are same - if not we dont have to proceed further
    const objOneKeys = Object.keys(objOne)
    if(objOneKeys.length !== Object.keys(objTwo).length) return false

    // 2. we have to iterate through the keys of one object make sure each key is also available in the other object as its own Key & not as a key from its Prototype - use hasOwnProperty for that
    // 3. we also have to check the corresponding values of the keys are also equal
    return objOneKeys.every(key => objTwo.hasOwnProperty(key) && objOne[key] === objTwo[key])
}

console.log(compareObjects(objThree, objFour))



// USING RECURSIVE IMPLEMENTATION of ABOVE function for Deeply Nested Objects
// You can SCALE UP the above solution for Nested Object comparsion using RECURSION
// You can implement recursion using a baseCase to check whether the value we are comparing within the every method is an object are note - If its an object than you can recursively call the function otherwise you can just use === for normal comparison of primitives




// USING JSON.stringify
// More ready simple solution that can be suitable in many cases
// In some cases if you don't have methods in your Objects you can use JSON.Stringify to compare your complex Nested Objects
console.log('Compared Objects objThree & objFour with JSON.Stringify -- Are they same ? ', JSON.stringify(objThree) === JSON.stringify(objFour))