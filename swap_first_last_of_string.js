    // 10. Swap First & last Character of a String
    console.log(`------------------------ 6. Swap First & last Character of string ----------------`)

    const str5 = 'Really Need To Swap the First & Last Char of This String'

    function modifyString(str) {
        if(!str || typeof str !== 'string' || str?.length < 2) return 'Need minimum 2 Characters in string to Swap First & Last Characters'

        return (str.at(-1) + str.slice(1, str.length - 1) + str.at(0))

        // you can use below logic also
        // return [str.at(0), str.slice(1, str.length-1) ,str.at(-1)].reverse().join('')
    }

    console.log(modifyString(str5))
    console.log(modifyString('TERMINATOR'))
    console.log(modifyString('MonsteR'))
    console.log(modifyString(''))
    console.log(modifyString('T'))
    console.log(modifyString())
    console.log(modifyString(1222))