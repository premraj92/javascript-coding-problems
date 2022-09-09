    // 7. Capitalize first letter of Every WORD in the string
    console.log(`------------------------ 6. Capitalize first letter of Every WORD in the string ----------------`)
    const str = `The URL to which to connect; this should be the URL to which the WebSocket server will respond.`
    const str2 = `At first glance, it may seem like arrow functions can be used or defined in every way a regular JavaScript function can, but that is not true. Arrow functions, for very good reasons, are not meant to behave exactly the same way as regular JavaScript functions. Perhaps arrow functions can be considered JavaScript functions with anomalies.`

    const capitalizeString = (string) => string.split(' ').map(item => item.replace(item[0], item[0].toUpperCase()))

    console.log(capitalizeString(str))
    console.log(capitalizeString(str2))