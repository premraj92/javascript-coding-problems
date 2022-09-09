    // 8. Move all the zeros to end of an array
    console.log(`------------------------ 6. Move all the zeros to end of an array ----------------`)
    const arrNums = [1, 2, 3, 0, 4, 8, 4, 5, 6, 77, 0, 22, 0, 8, 9, 4]

    const resultArr2 = arrNums.sort((a, b) => a-b).reverse()
    console.log(resultArr2)

    // same logic as above but without using reverse method instead using for
    let reversedArr = arrNums.sort((a, b) => a-b)
    let resultArr3 = []
    for(let i = arrNums.length - 1; i >= 0; i--) {
        resultArr3.push(reversedArr[i])
    }

    // same logic as above but with while loop instead of for
    // let inpArrLength = arrNums.length
    // while(inpArrLength > 0) {
    //     resultArr3.push(reversedArr[inpArrLength -1])
    //     inpArrLength--
    // }

    console.log(resultArr3)