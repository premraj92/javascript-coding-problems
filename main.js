// 1. Declare a javascript class with some props & methods 
console.log(`------------------------ 1. A basic JS Class definition----------------`)
class Car {
    constructor(model, name) {
        this.model = model
        this.name = name
    }

    // method to start the car
    start() {
        console.log(`${this.model} ${this.name} has started successfully`)
    }
}

const carOne = new Car('1980', 'Jeep Wrangler')
    carOne.start()
    console.log(`Car name is `,carOne.name)
    console.log(`Car model is `,carOne.model)



// 2. Javascript class based inheritance - how it works 
console.log(`------------------------ 2. JS Class based Inheritance implementation----------------`)

class Hybrid extends Car {
    constructor(name, model, battery, fuelSavings) {

        // here the super keyword refers to the parent class & by calling the super() method in the child constructor we call the parent constructor & gets access to the parent's props & methods
        super(name, model)
        
        this.fuelSavings = fuelSavings
        this.battery = battery
    }

    break() {
        this.start()
        console.log(`&& in our Hybrid Breaking helps in generating power for battery & increased the battery capacity by ${this.battery} & thus resulting in fuelSavings of ${this.fuelSavings}`  )
    }
} 

const hybridCarOne = new Hybrid('Toyota', 'Hyryder', '10kwh', '10%')
console.log(`hybridCarOne name is `, hybridCarOne.name)
hybridCarOne.break()



// 3. Using Setters & Getters in class - how it works 
console.log(`------------------------ 3. Setter & Getter method
implementation in classes----------------`)
class CarSetterGetter {
    constructor(name, model) {
        this._model = model
        this._name = name
    }

    // Getter & Setter method names cannot be same as the property name its trying to setTo OR getFrom
    // the most common practice is to use underscore before property names to differentiate between two

    get name() {
        return this._name
    }

    set name (x) {
        this._name = x
    }

    get model() {
        return this._model
    }

    set model(x) {
        this._model = x
    }

    // method to start the car
    start() {
        console.log(`${this.model} ${this.name} has started successfully`)
    }
}

const carThree = new CarSetterGetter('Ford', 'Mustang')

// As you can see below we are using setter & getter methods to access & change the CarSetterGetter class props
// And evenThough set/get are methods we will not use parentheses to do set/get operations
console.log(`Car Name accesed using getter method is `, carThree.name)
console.log(`Car Model accesed using getter method is `, carThree.model)
carThree.name = 'Tata'
carThree.model = 'Safari'
console.log(`Car Name after using setter method is `, carThree.name)
console.log(`Car Model after using setter method is `, carThree.model)














   
    














    









    









    // HACKER RANK - 7 day Interview Preperation KIT

    function timeConversion(s) {
        // Write your code here
        const isAM = s.includes('AM') ? true : false
        const [hour, minute, second] = s.slice(0, -2).split(':').map(str => Number(str))    
         
        if(isAM && hour < 12) {
            return s.slice(0, -2)
        }
        
        if(isAM &&  hour === 12 && minute === 0 && second ===0) {
            return '00:00:00'
        }
        
        if(isAM && hour === 12 && (minute > 0 || second > 0)) {
            return `00:${minute < 10 ? String(minute).padStart(2, '0'): minute}:${second < 10 ? String(second).padStart(2, '0') : second}`
        }
        
        if(!isAM && hour === 12) {
            return s.slice(0, -2)
        }
        
        if(!isAM && hour < 12) {
            return `${hour + 12}:${minute < 10 ? String(minute).padStart(2, '0'): minute}:${second < 10 ? String(second).padStart(2, '0') : second}`
        }
    }
    
    console.log(timeConversion('12:00:00AM'))
    console.log(timeConversion('12:00:00PM'))
    console.log(timeConversion('12:55:7AM'))
    console.log(timeConversion('11:55:7AM'))
    console.log(timeConversion('1:22:7AM'))
    console.log(timeConversion('11:55:7PM'))
    console.log(timeConversion('9:5:7PM'))


