// Next Array Problem - Combining Arrays and Removing Duplicate Values
const arrOne = ["sachin", "virat", "rohit", "bumrah", "dravid"]
const arrTwo = ["rishab pant", "surya kumar yadav", "sachin", "dravid", "hardik pandya"]


// // Solution 1
// combine the arrays using spread operator
const combineArr = [...arrOne, ...arrTwo]
console.log(`Combined Arr with duplicates is `, combineArr)

// remove the duplicates by converting it into an SET
const combineSet = new Set(combineArr)
console.log(`Combined Set without duplicates is `, combineSet)

// convert the Set with only unique elements back into array - 2 ways - using Array.from() && ...spread operator
const reCombineArr = Array.from(combineSet)
// const reCombineArr = [...combineSet]
console.log(`Combined Set without duplicates is `, reCombineArr)


// If you don't want to use SET for the duplicate removal && again convert the SET to ARRAY you can do the solution
const combineUniqueArr = combineArr.filter((item, index, arr) => arr.indexOf(item) === index)
console.log(combineUniqueArr)


// YOU can COMBINE all of the Obove steps in a single line
const combineUniqueArrTwo = [...new Set([...arrOne, ...arrTwo])]
console.log(combineUniqueArrTwo)




// The Above Solution will work perfectly well if your array contains only primitives or object types that have same references - but if you have a couple of objects that contains the same exact Information/Key_value pairs but have different references than this won't work


// What if your array contains objects - how do we resolve it one of the ways would be convert only the objects in the array into a string with the help of JSON.stringify
const objOne = {name: "dravid", role: "coach", nickName: "wall"}
const objTwo = {name: "dravid",     role: "coach", teamTraining() {console.log('meet me')},  nickName: "wall"}

const arrThree = ["sachin", "virat", "rohit", "bumrah", objOne]
const arrFour = ["rishab pant", "surya kumar yadav", "sachin", objTwo, "hardik pandya"]

// here we are taking the array & checking if it contains any object & if it does we are transforming those objects into strings with JSON.stringify & so now if any two objects that has the exact same values are compared they will return yes since they are plain string & not some reference
// this scenario will work for most things i.e. as long as our objects are JSON compatible i.e. we dont have any methods inside our objects because methods are not valid JSON so it will be ignored during JSON.stringify transformation
// As you can see above objTwo above does have many whitespaces inbetween prop declarations & additionally a method teamTraining but those are removed when we push it through JSON.stringify
function transformArray(arr) {
    return arr.map(item => typeof item === 'object' ? JSON.stringify(item) : item)
} 

const combineUniqueArrThree = [...new Set([...transformArray(arrOne), ...transformArray(arrTwo)])]
const combineUniqueArrFour = [...new Set([...transformArray(arrThree), ...transformArray(arrFour)])]
console.log(combineUniqueArrThree)
console.log(combineUniqueArrFour)


// One thing to remember is when you want to use it somewhere you can transform it back to JS object with JSON.parse() when you access those individual objects