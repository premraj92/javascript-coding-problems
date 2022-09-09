    // 12. Insert a new Array in the Middle of an Existing array
    const arrOne = [1, 2, 3, 4, 5, 6, 7, 8]
    const arrTwo = [9, 10, 11, 12, 13, 14, 15, 16]

    // now lets insert arrTwo in the middle of arrOne - PSUEDOCODE
        // 1. first find the midlle of the first Array - i.e. index to insert
        // 2. either split the original array in the Centre & 
        // 3. add the new Array there

        
        // // Solution One - this MUTATES the Original Array
        // function insertInTheMiddle(arrOne, ...valuesToBeInserted) {
        //     console.log(valuesToBeInserted)
        //     arrOne.splice((Math.ceil(arrOne.length / 2)) , 0, ...valuesToBeInserted)
        //     return arrOne
        // }

        // console.log(insertInTheMiddle(arrOne, arrTwo))
        // console.log(insertInTheMiddle(arrOne, 11, 12, 13 ))



        // // Solution Two - similar logic to above code this creates a fresh Array & returns 
        function insertInTheMiddle2(arrOne, ...valuesToBeInserted) {
            console.log(valuesToBeInserted)

            const middleIndex = Math.ceil((arrOne.length-1) / 2)
            return [ ...arrOne.slice(0, middleIndex), ...valuesToBeInserted, ...arrOne.slice(middleIndex, arrOne.length)]
        }

        console.log(insertInTheMiddle2(arrOne, arrTwo))
        console.log(insertInTheMiddle2(arrOne, 11, 12, 13 ))