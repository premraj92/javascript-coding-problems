    // 9. Fizzbuzz - interview question
        // 1. Write a program the prints the number from 1 to 100
        // 2. If the number is multiple of 3 print Fizz instead of the number
        // 3. For the multiples of 5 print Buzz
        // 4. For multiples of both 3 & 5 print FizzBuzz
        // 5. If its none of the above print the number

        console.log(`------------------------ 6. Fizzbuzz - interview question ----------------`)

        // SOLUTION - 1
        function fizzBuzz(rangeStart, rangeEnd) {
            for(let i=rangeStart; i <= rangeEnd; i++) {
                if(i % 5 === 0 && i%3 === 0) {
                    console.log(`FizzBuzz & the corresponding number is ${i}`)
                    continue
                }
                if(i % 5 === 0) {
                    console.log(`Buzz & the corresponding number is ${i}`)
                    continue
                }
                if(i%3 === 0) {
                    console.log(`Fizz & the corresponding number is ${i}`)
                    continue
                }
    
                console.log(`${i}`)
            }
        }
    
        console.time('fizbuzzExecuted')
        fizzBuzz(1, 100)
        console.timeEnd('fizbuzzExecuted')
    
        // Solution 1.1
        // Now this is the same solution as above but instead of using continue inside each independent if, we use if else statement 
        function fizzBuzzTwo(rangeStart, rangeEnd) {
            for(let i=rangeStart; i <= rangeEnd; i++) {
                if(i % 5 === 0 && i%3 === 0) {
                    console.log(`FizzBuzz & the  number is ${i}`)
                }else if (i % 5 === 0) {
                    console.log(`Buzz & the  number is ${i}`)
                }else if(i%3 === 0) {
                    console.log(`Fizz & the  number is ${i}`)
                }else {
                    console.log(`${i}`)
                }
            }
        }
    
        console.time('fizbuzzTwoExecuted')
        fizzBuzzTwo(1, 100)
        console.timeEnd('fizbuzzTwoExecuted')
    
    
        // SOLUTION 2
        function fizzBuzzThree (rangeStart, rangeEnd) {
            for(let i=rangeStart; i<=rangeEnd; i++) {
                console.log(
                    ((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')) || i 
                )
            }
        }
    
        console.time('fizbuzzCompactSolnExecuted')
        fizzBuzzThree(1, 100)
        console.timeEnd('fizbuzzCompactSolnExecuted')