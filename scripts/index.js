// import obj from "./config/moduleConfig";
// import {fn, fn_ano} from "./config/moduleConfig";
// console.log(obj);
// fn();
// fn_ano();
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// function fn(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
// function extend(subClass, superClass) {
//     let F = fn(superClass.prototype);
//     subClass.prototype = F;
//     subClass.prototype.constructor = subClass;
// }
// function Gary(name, age, hobby) {
//     Person.call(this, name, age);
//     this.hobby = hobby;
// }
// extend(Gary, Person);
// Gary.prototype.introduce = function() {
//     console.log(`I'm ${this.name}, ${this.age} year's old, I like ${this.hobby}!`);
// };
// let gary = new Gary("Gary", 24, "basketball");
// gary.introduce();
// console.log(gary.__proto__ === Gary.prototype);
// console.log(gary.__proto__.__proto__ === Person.prototype);
// console.log(gary.__proto__.__proto__.__proto__ === Object.prototype);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`I'm ${this.name},${this.age} year's old`);
    }
}
class Gary extends Person {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
    introduce() {
        console.log(`I'm ${this.name}, ${this.age} year's old, I like ${this.hobby}!`);
    }
    myself() {
        console.log(`My name is ${this.name}`);
    }
}
let gary = new Gary("Gary", 24, "play computer games");
gary.introduce();
gary.myself();
console.log(gary.__proto__ === Gary.prototype);