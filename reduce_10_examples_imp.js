// 10 Examples/Use Cases for Reduce function

const people = [
    {id: 1, name: 'John Doe', age: 33},
    {id: 2, name: 'Jane Doe', age: 52},
    {id: 3, name: 'Albert Einstien', age: 29}
]

let result


// 1. count - find the count of people in the people array above

const peopleCount = people.reduce((acc, curr) => ++acc , 0)
console.log(peopleCount)


// 2. sum - of ages in the people array

const sumOfAges = people.reduce((acc, curr) => acc + curr.age , 0)
console.log(sumOfAges)


// 3. map - new array of names from people array

// const nameList = people.reduce((acc, curr, index) => acc[index] = curr.name , [])

const nameList = people.reduce((acc, curr) => [...acc, curr.name] , [])
console.log(nameList)








// 4. Converting Array of Objects to a Dictonary OR a LOOK UP Table

// Lets imagine we have a simple useCase where you have to lookup/find a person based on their id 
// Normally you can use a find method or any other iterative implementation but we can array to a Dictonary where the id becomes the key && all the other key/value pairs in each people object becomes the new value object for ex the above people object becomes the below dictonary or LookUp Table
    // {1: {id: 1, name: 'John Doe', age: 33}, 2:{name: 'Jane Doe', age: 22}, {name: 'Albert Einstien', age: 29}


// const peopleDictonary = people.reduce((acc, person) => {
//     // if you want the whole person object as the new value the below line would work
//     return {...acc, [person.id]: person }

//     // or if you wanna omit the id prop from thr new object the below code works
//     // const {name, age} =  person
//     // return {...acc, [person.id]: {name, age}}
// } ,  {})


// single line implementation of the above logic
const peopleDictonary = people.reduce((acc, person) => ( {...acc, [person.id]: person} ) , {})

console.log(peopleDictonary)

// now to access any person by Id you just simply have to use the Key - this is far more effecient than using a iterative solution
console.log(peopleDictonary[1]) 









// // 5. Group together array elements by a specific key & create an array of arrays for example - 
// // input array
const films = [
    {
      name: 'film 1',
      year: '1992'
    },
    {
      name: 'film 2',
      year: '1992'
    },
    {
      name: 'film 3',
      year: '1995'
    },
    {
      name: 'film 4',
      year: '1995'
    },
    {
      name: 'film 5',
      year: '1995'
    },
    {
      name: 'film 6',
      year: '1998'
    },
    {
      name: 'film 7',
      year: '1998'
    }
  ]

// // expected output

const filmsSortedOne = { 
    1992 : [ { name: 'film 1', year: '1992' },
             { name: 'film 2', year: '1992' } 
           ],
    1995:  [ { name: 'film 3', year: '1995' },
             { name: 'film 4', year: '1995' },
             { name: 'film 5', year: '1995' } 
           ],
   1998:   [ { name: 'film 6', year: '1998' },
             { name: 'film 7', year: '1998' } 
           ], 
}

                            // // ----  OR -----------

const filmsSortedTwo  = [
    [
      {
        name:'film 1',
        year:'1992'
      },
      {
        name:'film 2',
        year:'1992'
      },
    ],
    [
      {
        name:'film 3',
        year:'1995'
      },
      {
        name:'film 4',
        year:'1995'
      },
      {
        name:'film 5',
        year:'1995'
      },
    ],
    [
      {
        name:'film 6',
        year:'1998'
      },
      {
        name:'film 7',
        year:'1998'
      },
    ]
  ]

//   if you want the output to be like the first output - filmsSortedOne above implement the below logic  
  const sortedFilms = films.reduce((acc, film) => {
    const filmTwo = acc[film.year] ? acc[film.year].push(film) : acc[film.year] = [film]
    return {...acc, filmTwo}
  }, {})

  console.log(sortedFilms)


  const sortedAndMappedFilms = Object.values(sortedFilms)
  console.log(sortedAndMappedFilms)








//   6. Finding MAX age from the people array using reduce
// this is better than using Math.max() or Math.min() because you have to first create an array of ages from the array of persons with help of MAP method & than we have to use Math.min() or Math.max()
// reduce is also slightly better than using sorting & than picking the first or last element for similar reason

const maxAgedPerson = people.reduce((acc, person) => person.age > acc.age ? acc = person : acc)
console.log(maxAgedPerson)





//  7. Finding MIN age from the people array using reduce

const minAgedPerson = people.reduce((acc, person) => person.age < acc.age ? person : acc)
console.log(minAgedPerson)







// 8. Find a person by their name - with reduce - this is just for showing the versatility of reduce method
// But don't use reduce for this particular task because it will loop over everything FIND array helper will be a much better fit for this

const findPersonByName = (people, name) => {
   return people.reduce((acc, person) => person.name === name ? person : acc , null)
}

console.log(findPersonByName(people, 'John Doe'))








// 9. check if ALL the PEOPLE in the array are OVER > 18 years old
// Eventhough performance wise this may match .every() method using every() would be a lot more contextual & meaningful

const areAllPeopleOver18 = (people) => people?.reduce((acc, person) => person.age >= 18 && acc === true ? true : false , true)
console.log(areAllPeopleOver18(people))
console.log(areAllPeopleOver18([...people, {id: 4, name: 'raj', age: 14}]))





// 10. check if ATLEAST One of the PEOPLE in the array are OVER > 18 years old
// Both Performance & ease of Use wise Some method is much better for this

const isAtleastOnePersonOver18 = (people) => people?.reduce((acc, person) => person.age >= 18 ? true : acc , false)
console.log(isAtleastOnePersonOver18(people))
console.log(isAtleastOnePersonOver18([...people, {id: 4, name: 'raj', age: 14}]))





// 11. Count Occurences using reduce

const orders = [
    {id: "1", status: "pending"},
    {id: "2", status: "pending"},
    {id: "3", status: "cancelled"},
    {id: "4", status: "pending"},
    {id: "5", status: "delivered"},
    {id: "6", status: "pending"}
]

// lets count the occuerences of each status & store it as a key value pair inside an object
// so that we can find how many orders are in each category - 
// a very useful real world use case - an ecommerce store would want constant updates on what % of total orders are delivered && what % is pending && what % is cancelled so they can measure importance business metrics like conversion & return rates & their delivery speed && effeciency

const statusOccurences = orders.reduce((acc, order) => {

    // if(acc[order.status]) return {...acc , [order.status] : acc[order.status] + 1}
    // return { ...acc, [order.status] : 1 }

    // // the above two lines can be simplified into a single one
    return {...acc , [order.status] : (acc[order.status] || 0) + 1}

} , {})


// // // compact implementation of the above logic
// const statusOccurences = orders.reduce( (acc, order) => ( {...acc, [order.status] : (acc[order.status] ?? 0 ) + 1} ) , {}) 

console.log(statusOccurences)








// 12. Flatten an array

const folders = [
    "index.js",
    ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js", ["doc", "xls", "pdf", ["mp4", "ogg"] ]]]
]

// solution 1 - Recursive flattening implementation WITHOUT REDUCE
function flatten(arr, flattenedArr = []) {
    for(let curr of arr) {
        const isArr = Array.isArray(curr)
        
        // 1. recursive function call
        if(isArr) flatten(curr, flattenedArr)

        // 2. base case
        if(!isArr) flattenedArr.push(curr)
    }

    return flattenedArr
}
console.log(flatten(folders))


// solution 2 - Recursive flattening WITH REDUCE
function flattenReduce(arr, flattenedArr = []) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? flattenReduce(curr, acc) : [...acc, curr], flattenedArr)
}

console.log(flattenReduce(folders))


// solution 3 - Recursive Flattening With REDUCE but where the reduce & function is reversed
function flattenReduceTwo(acc, item) {
    console.log(item, acc)
    if(Array.isArray(item)) {
        return [...acc, ...item.reduce(flattenReduceTwo, [])]
    }

    return [...acc, item]
}

const flattenedOutputTwo = folders.reduce(flattenReduceTwo, [])
console.log(flattenedOutputTwo)






// Polyfill Implementation of Reduce
function reduceMe(array, callback, initialValue) {
    let acc = initialValue == null ? array[0] : initialValue
    
    for(let i=0; i < array.length ;i++) {
        if(initialValue == null && i === 0) continue
        acc = callback(acc, array[i], i, array)
    }

    return acc
}

const reduceResultOne = reduceMe([1, 2, 3, 4, 5], (acc, item) => acc + item)
console.log(reduceResultOne)

const reduceResultTwo = reduceMe(["play ", "rock", "paper", "scisscors"], (acc, item) => acc + item)
console.log(reduceResultTwo)

const reduceResultThree = reduceMe([["play ", "rock"], "paper", "scisscors", ['1', '2']], (acc, item) => [...acc, item])
console.log(reduceResultThree)