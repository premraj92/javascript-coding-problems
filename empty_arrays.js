    // 6. Different ways to empty an Array
    console.log(`------------------------ 6. Different Ways to Empty an Array ----------------`)
    let a = [1,2,3];

    // // Way 1 - Via empty array assignment to existing array
    // // This code assigned the array a to a new empty array. It works perfectly if you do not have any references to the original array.
    // a = []

    // the above line works but in the below scenario b which stores reference to a will not be empty  
    let b = a;
    a = []
    // Now a will be empty but b will not be !!
    console.log(`Value of 'a' is empty arr `, a)
    console.log(`Value of 'b' which holds a reference to 'a' is NOT empty `, b) 

    // // Way 2 - Setting the length prop to 0
    // a.length = 0;

    // Way 3 - Using slice method
    const aSliced = a.splice(0,a.length);