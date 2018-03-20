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
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`I'm ${this.name},${this.age} year's old`);
//     }
// }
// class Gary extends Person {
//     constructor(name, age, hobby) {
//         super(name, age);
//         this.hobby = hobby;
//     }
//     introduce() {
//         console.log(`I'm ${this.name}, ${this.age} year's old, I like ${this.hobby}!`);
//     }
//     myself() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// let gary = new Gary("Gary", 24, "play computer games");
// gary.introduce();
// gary.myself();
// console.log(gary.__proto__ === Gary.prototype);
// function loadImage(src, success, failed) {
//     let image = document.createElement("img");
//     image.onload = function () {
//         success(image);
//     };
//     image.onerror = function () {
//         failed();
//     };
//     image.src = src;
// }
// loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png", function success(image) {
//     console.log(image.width);
// }, function failed() {
//     console.log("image failed");
// });
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         let image = document.createElement("img");
//         image.onload = function () {
//             resolve(image);
//         };
//         image.onerror = function () {
//             reject();
//         };
//         image.src = src;
//     });
// }
// loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png").then(function resolve(image) {
//     console.log(image.width);
// }, function reject() {
//     console.log("image failed");
// });
// loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png").then(function resolve(image) {
//     console.log(image.height);
// });
// let/const
// {
//     let name = "Gary";
//     console.log(name);
// }
// console.log(name);
// {
//     var name = "Gary";
//     console.log(name);
// }
// console.log(name);
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// let arr = [];
// for (var i = 0; i < 10; i++) {
//     arr[i] = (function (i) {
//         return function () {
//             console.log(i);
//         };
//     })(i);
// }
// for (var j = 0; j < arr.length; j++) {
//     arr[j]();
// }
// for (var i = 0; i < 10; i++) {
//     setTimeout((function (i) {
//         return function () {
//             console.log(i);
//         }
//     })(i), i * 1000);
// }
// for (let i = 0; i < 10; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }
// 块级作用域
// 模板字符串
// 解构赋值
// 参数默认值
// 箭头函数
// zepto源码编写
// var zepto = {};
// zepto.init = function (selector) {
//     var slice = Array.prototype.slice;
//     var dom = slice.call(document.querySelectorAll(selector));
//     return zepto.Z(dom, selector);
// };
// zepto.Z = function (dom, selector) {
//     return new Z(dom, selector);
// };
// var $ = function (selector) {
//     return zepto.init(selector);
// };
// function Z(dom, selector) {
//     var leng = dom ? dom.length : 0;
//     for (var i = 0; i < leng; i++) {
//         this[i] = dom[i];
//     }
//     this.length = leng;
//     this.selector = selector || '';
// }
// function camlize(string) {
//     return string.replace(/-+(.)?/, function (match, string_imp) {
//         return string_imp.toUpperCase();
//     });
// }
// $.fn = {
//     constructor: zepto.Z,
//     css(property, value) {
//         if (arguments.length < 2) {
//             var element = this[0];
//             if(!element) return;
//             //dom节点,伪类
//             return element.style[camlize(property)] || window.getComputedStyle(element, '').getPropertyValue(property);
//         }
//     },
//     html(value) {
//
//     }
// };
// zepto.Z.prototype = Z.prototype = $.fn;
// var p = $('p');
// console.log(p.css('font-size'));
var jQuery = function (selector) {
    return new jQuery.fn.init(selector);
};

function camlize(string) {
    return string.replace(/-+(.)?/, function (match, string_imp) {
        return string_imp.toUpperCase();
    });
}

jQuery.prototype = jQuery.fn = {
    constructor: init,
    css(property, value) {
        if (arguments.length < 2) {
            var element = this[0];
            if (!element) return;
            return element.style[camlize(property)] || getComputedStyle(element, '').getPropertyValue(property);
        }
    },
    html(value) {

    }
};
var init = jQuery.fn.init = function (selector) {
    var slice = Array.prototype.slice,
        dom = slice.call(document.querySelectorAll(selector)),
        len = dom ? dom.length : 0;
    for (var i = 0; i < len; i++) {
        this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector;
};
init.prototype = jQuery.fn;
var p = jQuery('p');
console.log(p.css('font-size'));
