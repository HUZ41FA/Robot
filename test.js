class Human{
    constructor(name, age, gender){
        this.name = name 
        this.age = age
        this.gender = gender
    }
    walk(){
        console.log(`${this.name} is walking`)
    }
    returnSelf(){
        return this
    }
}

let me = new Human("huzaifa", 34, "M")


console.log(me.walk())
console.log(me.returnSelf())