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
// var jQuery = function (selector) {
//     return new jQuery.fn.init(selector);
// };
//
// function camlize(string) {
//     return string.replace(/-+(.)?/, function (match, string_imp) {
//         return string_imp.toUpperCase();
//     });
// }
//
// jQuery.prototype = jQuery.fn = {
//     constructor: init,
//     css(property, value) {
//         if (arguments.length < 2) {
//             var element = this[0];
//             if (!element) return;
//             return element.style[camlize(property)] || getComputedStyle(element, '').getPropertyValue(property);
//         }
//     },
//     html(value) {
//
//     }
// };
// var init = jQuery.fn.init = function (selector) {
//     var slice = Array.prototype.slice,
//         dom = slice.call(document.querySelectorAll(selector)),
//         len = dom ? dom.length : 0;
//     for (var i = 0; i < len; i++) {
//         this[i] = dom[i];
//     }
//     this.length = len;
//     this.selector = selector;
// };
// init.prototype = jQuery.fn;
// var p = jQuery('p');
// console.log(p.css('font-size'));
// jQuery.fn.getNodeName = function () {
//     return this[0].nodeName;
// };
// $(function() {
//     var p = $("p");
//     console.log(p);
//     console.log(p.getNodeName());
// });
// 同步代码立即执行
// 异步代码会先放进异步队列中,暂不执行
// 主进程中的同步代码执行完毕之后,轮询异步队列中的异步代码
// setTimeout(function timer(){
//     console.log('a');
// });
// console.log('b');
// setTimeout(function timer(){
//     console.log('a');
// }, 1000);
// setTimeout(function timer(){
//     console.log('b');
// });
// console.log('c');
// let xhr = new XMLHttpRequest();
// xhr.open('get', '../data/data.json', false);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText));
//         }
//     }
// };
// xhr.send(null);
// $.ajax({
//     url: "../data/data.json",
//     dataType: "json",
//     type: "get",
//     contentType: "application/json",
//     success(response, status) {
//         console.log(response);
//     }
// });
// setTimeout(function timer() {
//     console.log("a");
// }, 1000);
// setTimeout(function timer() {
//     console.log("b");
// });
// console.log("c");
// 对扩展开放，对修改封闭
// $.ajax({
//     url: "../data/data.json",
//     type: "get",
//     dataType: "json",
//     contentType: "application/json",
//     success(response, status) {
//         console.log(response.header);
//         console.log(response.body);
//     },
//     error() {
//         console.log("fail");
//     }
// });
// var ajax = $.ajax("../data/data.json", {type: "get", dataType: "json", contentType: "application/json"});
// ajax.done(function done(data) {
//     console.log("success 1");
//     console.log(data);
// }).fail(function fail() {
//     console.log("fail 1");
// }).done(function done(data) {
//     console.log("success 2");
//     console.log(data);
// }).fail(function fail() {
//     console.log("fail 2")
// });
// var ajax = $.ajax("../data/data.json", {type: "get", dataType: "json", contentType: "application/json", async: false});
// ajax.then(function resolve(data) {
//     console.log("success 1");
//     console.log(data);
//     return data;
// }, function reject() {
//     console.log("fail");
// }).then(function resolve(data) {
//     console.log("success 2");
//     console.log(data);
//     return data;
// }, function reject() {
//     console.log("fail");
// }).then(function resolve(data) {
//     console.log("success 3");
//     console.log(data);
// }, function reject() {
//     console.log("fail");
// });
// function wait() {
//     function task() {
//         console.log("执行完毕~");
//     }
//     setTimeout(task, 2000);
// }
// wait();
// function wget() {
//     var dfd = $.Deferred();
//     var wait = function (dfd) {
//         var task = function () {
//             console.log("执行成功");
//             dfd.resolve();
//             // dfd.reject();
//         };
//         setTimeout(task, 2000);
//         return dfd;
//     };
//     return wait(dfd);
// }
// var w = wget();
// w.then(function resolve() {
//     console.log("ok 1");
// }, function reject() {
//     console.log("error 1");
// });
// w.then(function resolve() {
//     console.log("ok 2");
// }, function reject() {
//     console.log("error 2");
// });
// w.reject();
// w.then(function resolve() {
//     console.log("ok 1");
// }, function reject() {
//     console.log("error 1");
// }).then(function resolve() {
//     console.log("ok 2");
// }, function reject() {
//     console.log("error 2");
// });
// $.Deferred() $.when(w)
// function wget() {
//     var dfd = $.Deferred();
//     var wait = function (dfd) {
//         var task = function () {
//             console.log("执行完毕");
//             dfd.resolve();
//         };
//         setTimeout(task, 2000);
//         return dfd.promise;
//     };
//     return wait(dfd);
// }
// var w = wget();
// w.reject();
// $.when(w).then(function resolve() {
//     console.log("ok 1");
// }, function reject() {
//     console.log("error 1");
// }).then(function resolve() {
//     console.log("ok 2");
// }, function reject() {
//     console.log("error 2");
// });
// 捕获错误:
// 1.在reject不存在定义的情况下,语法错误
// 2.在reject不存在定义的情况下,reject图片错误
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         var image = document.createElement("img");
// throw new Error("自定义错误");
// image.onload = function () {
//             resolve(image);
//         };
//         image.onerror = function () {
//             reject("图片错误~");
//         };
//         image.src = src;
//     });
// }
// var result = loadImage("https://www.1jtec.com/images/keryiBarter_description_bg1.png");
// result.then(function resolve(img) {
//     console.log(img.width);
//     return img;
// }).then(function resolve(img) {
//     console.log(img.height);
// }).catch(function err(error) {
//     console.log(error);
// });
// 串联
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         var image = document.createElement("img");
//         image.onload = function () {
//             resolve(image);
//         };
//         image.onerror = function () {
//             reject();
//         };
//         image.src = src;
//     });
// }
// var result_one = loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png"),
//     result_two = loadImage("https://www.1jtec.com/images/keryiBarter_login_bg.png");
// result_one.then(function resolve(image) {
//     console.log(image.width);
//     return result_two;
// }, function reject() {
//     console.log("error 1~");
// }).then(function resolve(image) {
//     console.log(image.width);
// }, function reject() {
//     console.log("error 2~");
// }).catch(function err(error) {
//     console.log(error);
// });
// all and race
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         var img = document.createElement("img");
//         img.onload = function () {
//             resolve(img);
//         };
//         img.onerror = function () {
//             reject();
//         };
//         img.src = src;
//     });
// }
// function putImage(images) {
// console.log(images);
//     for (let i = 0; i < images.length; i++) {
//         document.body.appendChild(images[i]);
//     }
// }
// Promise.all([
//     loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png"),
//     loadImage("https://www.1jtec.com/images/keryiBarter_login_bg.png"),
//     loadImage("https://www.1jtec.com/images/keryiBarter_register_bg.png")
// ]).then(putImage);
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         var img = document.createElement("img");
//         img.onload = function () {
//             resolve(img);
//         };
//         img.onerror = function () {
//             reject();
//         };
//         img.src = src;
//     });
// }
// function putImage(image) {
//     document.body.appendChild(image);
// }
// Promise.race([
//     loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png"),
//     loadImage("https://www.1jtec.com/images/keryiBarter_login_bg.png"),
//     loadImage("https://www.1jtec.com/images/keryiBarter_register_bg.png")
// ]).then(putImage);
// async function sayNumber() {
//     var girl = await "sun shine girl";
//     console.log(girl);
//     var age = await 99;
//     console.log(age);
// }
// sayNumber();
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         let img = document.createElement("img");
//         img.src = src;
//         img.onload = function () {
//             resolve(img);
//         };
//         img.onerror = function () {
//             reject();
//         };
//     });
// }
// let result_one = loadImage("https://www.1jtec.com/images/keryiBarter_login_bg.png"),
//     result_two = loadImage("https://www.1jtec.com/images/keryiBarter_description_bg.png");
// async function load() {
//     let result = await result_one.then(function resolve(img) {
//         console.log(img.width);
//         return img.width;
//     }, function reject() {
//         console.log("error 1~");
//     });
//     console.log(result);
//     let result_ano = await result_two.then(function resolve(img) {
//         console.log(img.width);
//         return img.height;
//     }, function reject() {
//         console.log("error 2~");
//     });
//     console.log(result_ano);
// }
// load();
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         let img = document.createElement("img");
//         img.src = src;
//         img.onload = function () {
//             resolve(img);
//         };
//         img.onerror = function () {
//             reject();
//         };
//     });
// }
// function* load() {
//     let a = yield loadImage("https://www.1jtec.com/images/keryiBarter_login_bg.png");
//     console.log(a);
//     let b = yield loadImage("https://www.1jtec.com/images/keryiBarter_register_bg.png");
//     console.log(b);
//     return b;
// }
// coLoad(load).then(function resolve(imgWidth) {
//     console.log(imgWidth);
// }, function reject() {
//
// });
// function coLoad(gen) {
//     let lg = gen();
//     return new Promise(function promise(resolve, reject) {
//         (function nextImg(img) {
//             let img_generator = lg.next(img ? img.height : undefined),
//                 value = img_generator.value,
//                 done = img_generator.done;
//             if (done) {
//                 resolve(value);
//             } else {
//                 value.then(nextImg, reject);
//             }
//         })();
//     });
// }
// function loadImage(src) {
//     return new Promise(function promise(resolve, reject) {
//         let img = document.createElement("img");
//         img.onload = function () {
//             resolve(img);
//         };
//         img.onerror = function () {
//             reject();
//         };
//         img.src = src;
//     });
// }
//pending直接返回fulfiled或者rejected的结果
// async function load() {
//     let a = await loadImage("https://www.1jtec.com/images/keryiBarter_login_bg.png");
//     console.log(a.height);
//     let b = await loadImage("https://www.1jtec.com/images/keryiBarter_register_bg.png");
//     console.log(b.height);
//     return b;
// }
// load().then(function resolve(img) {
//     console.log(img.height);
// }, function reject() {
//
// });
// 使用正则表达式去除'aabbccddeexxxxaa'中的相邻重复字母，得到abcdexa
// function excuteRepeat(string) {
//     let result = "",
//         conLetter = "";
//     return (function nextExec(string_ano) {
//         let regExp = /[a-zA-Z]?/,
//             execString = regExp.exec(string_ano)[0],
//             splitString = string_ano.replace(regExp, "");
//         if (conLetter !== execString) {
//             conLetter = execString;
//             result += conLetter;
//         }
//         splitString && nextExec(splitString);
//         return result;
//     })(string);
// }
// let result_string = excuteRepeat("aabbccddeexxxxaazz");
// console.log(result_string);
// console.log('aabbccddeexxxxaa'.replace(/([a-zA-Z])\1*/g, "$1"));
// \1识别的是()中的值
// replace第二个参数function识别的也是()中的值
// let regExp = /([a-zA-Z])\1*/g,
//     string = "aabbccddeexxxxaaz";
// console.log(string.replace(regExp, function (match, string){
//     return string;
// }));
// 使用正则表达式去除'aabbccddeexxxxaa'中的相邻重复字母，得到abcdexa
// console.log('aabbccddeexxxxaa'.replace(/([a-zA-Z])\1*/g, function (match, string) {
//     return string;
// }));
// let data = [{
//     name: "Gary",
//     city: "杭州",
//     job: "前端工程师"
// }, {
//     name: "Aaron",
//     city: "上海",
//     job: "服务端工程师"
// }, {
//     name: "Doris",
//     city: "北京",
//     job: "架构工程师"
// }];
// function render(data) {
//     let container = $("#container"),
//         table = $("<table>");
//     container.html("");
//     table.append(`<th><tr><td>name</td><td>city</td><td>job</td></tr></th>`);
//     data.forEach(function each(dataItem, dataIndex) {
//         table.append(`<tr><td>${dataItem["name"]}</td><td>${dataItem["city"]}</td><td>${dataItem["job"]}</td></tr>`);
//     });
//     container.append(table);
// }
// $("button").on("click", function changeDate(e) {
//     data[0]["city"] = "广州";
//     data[2]["job"] = "测试工程师";
//     render(data);
//     e.stopImmediatePropagation();
// });
// render(data);
// const snabbdom = require("snabbdom");
// const patch = snabbdom.init([
//     require("snabbdom/modules/class").default,
//     require("snabbdom/modules/props").default,
//     require("snabbdom/modules/style").default,
//     require("snabbdom/modules/eventlisteners").default
// ]);
// const h = snabbdom.h;
// let container = document.getElementById("container"),
//     change = $("#changeData"),
//     vcode = h("ul#list", {style: {color: "brown"}}, [
//         h("li.listItem", {}, "item one"),
//         h("li.listItem", {}, "item two")
//     ]);
// patch(container, vcode);
// let newVCode = h("ul#list", {style: {color: "brown"}}, [
//     h('li.listItem', {}, 'item one'),
//     h('li.listItem', {}, 'item Number B'),
//     h('li.listItem', {}, 'item three')
// ]);
// change.on("click", function (e) {
//     patch(vcode, newVCode);
//     e.stopImmediatePropagation();
// });
// demo重做
// const snabbdom = require("snabbdom"),
//     patch = snabbdom.init([
//         require("snabbdom/modules/class").default,
//         require("snabbdom/modules/props").default,
//         require("snabbdom/modules/style").default,
//         require("snabbdom/modules/eventlisteners").default
//     ]),
//     h = snabbdom.h;
// const data = [{
//     name: "姓名",
//     city: "城市",
//     job: "工作"
// }, {
//     name: "Gary",
//     city: "深圳",
//     job: "前端工程师"
// }, {
//     name: "Aaron",
//     city: "上海",
//     job: "服务端工程师"
// }, {
//     name: "Doris",
//     city: "杭州",
//     job: "架构师"
// }];
// let vcode,
//     container = document.getElementById("container"),
//     btn = $("#changeData");
// function render(data) {
//     let newVCode = h("table.table_mine", {style: {color: "brown"}}, data.map(function dataItem(item, index) {
//         let tdArr = [];
//         for (let [key, value] of Object.entries(item)) {
//             if (item.hasOwnProperty(key)) {
//                 tdArr = [...tdArr, h("td.td_mine", {}, value)];
//             }
//         }
//         return h("tr.tr_mine", {}, tdArr);
//     }));
//     if (vcode) {
//         patch(vcode, newVCode);
//     } else {
//         patch(container, newVCode);
//     }
//     vcode = newVCode;
// }
// btn.on("click", function (e) {
//     data[1]["city"] = "北京";
//     data[2]["job"] = "测试工程师";
//     render(data);
//     e.stopImmediatePropagation();
// });
// render(data);
// diff算法
// const data_format = {
//     tag: "ul",
//     attrs: {
//         id: "list",
//         className: "list"
//     },
//     children: [{
//         tag: "li",
//         attrs: {
//             className: "list-item"
//         },
//         children: ["item one"]
//     }, {
//         tag: "li",
//         attrs: {
//             className: "list-item"
//         },
//         children: ["item two"]
//     }]
// };
// function createElement(vcode) {
//     let tag = vcode.tag,
//         attrs = vcode.attrs || {},
//         children = vcode.children || [];
//     if (!tag) {
//         return null;
//     }
//     let elem = document.createElement(tag);
//     for (let [key, value] of Object.entries(attrs)) {
//         if (attrs.hasOwnProperty(key)) {
//             elem.setAttribute(key, value);
//         }
//     }
//     children && children.length && children.forEach((item, index) => {
//         elem.appendChild(createElement(item));
//     });
//     return elem;
// }
// const snabbdom = require("snabbdom"),
//     patch = snabbdom.init([
//         require("snabbdom/modules/class").default,
//         require("snabbdom/modules/props").default,
//         require("snabbdom/modules/style").default,
//         require("snabbdom/modules/eventlisteners").default
//     ]),
//     h = snabbdom.h;
// const data = [{
//     name: "姓名",
//     city: "城市",
//     job: "工作"
// }, {
//     name: "Gary",
//     city: "杭州",
//     job: "前端工程师"
// }, {
//     name: "Aaron",
//     city: "上海",
//     job: "服务端工程师"
// }, {
//     name: "Doris",
//     city: "深圳",
//     job: "架构师"
// }];
// let container = document.getElementById("container"),
//     change = $("#changeData"),
//     vcode;
// function render(data) {
//     let newVCode = h("table#table_mine", {style: {color: "brown"}}, data.map((item, index) => {
//         let tdArr = [];
//         for (let [key, value] of Object.entries(item)) {
//             if(item.hasOwnProperty(key)){
//                 tdArr = [...tdArr, h("td.td_mine", {}, value)];
//             }
//         }
//         return h("tr.tr_mine", {}, tdArr);
//     }));
//     if (vcode) {
//         patch(vcode, newVCode);
//     } else {
//         patch(container, newVCode);
//     }
//     vcode = newVCode;
// }
// change.on("click", (e)=> {
//     data[1]["city"] = "北京";
//     data[2]["job"] = "测试工程师";
//     render(data);
//     e.stopImmediatePropagation();
// });
// render(data);
// function createElement(vcode) {
//     let tag = vcode.tag,
//         attrs = vcode.attrs || {},
//         children = vcode.children || [];
//     if (!tag) {
//         return null;
//     }
//     let elem = document.createElement(tag);
//     for (let [key, value] of Object.entries(attrs)) {
//         elem.setAttribute(key, value);
//     }
//     children.forEach((item, index) => {
//         elem.appendChild(createElement(item));
//     });
//     return elem;
// }
// function updateChildren(vcode, newVCode) {
//     let vcodeChildren = vcode["children"] || [],
//         newVCodeChildren = newVCode["children"] || [];
//     for (let [key, value] of vcodeChildren.entries()) {
//         let newValue = newVCodeChildren[key];
//         if (!newValue) {
//             break;
//         }
//         if (value["tag"] === newValue["tag"]) {
//             updateChildren(value, newValue);
//         }
//         if (value["tag"] !== newValue["tag"]) {
//             replaceChildren(value, newValue);
//         }
//     }
// }
// function replaceChildren(vcode, newCode) {
//
// }
// var addTwoNumbers = function (l1, l2) {
//     let result_num = 0,
//         arg_length = arguments.length,
//         arg_arr = Array.prototype.slice.call(arguments);
//     for (let [key, value] of arg_arr.entries()) {
//         let flag_num = 0;
//         (function addInner(innerValue) {
//             let value = innerValue.val,
//                 next = innerValue.next;
//             result_num += (value * Math.pow(10, flag_num));
//             flag_num++;
//             next && addInner(next);
//         })(value);
//     }
//     let length = result_num.toString().length,
//         result_arr = [];
//     for (let i = 0; i < length; i++) {
//         result_arr[i] = result_num % 10;
//         result_num = Math.trunc(result_num / 10);
//     }
//     return result_arr;
// };
// addTwoNumbers();
// jQuery todoList
// $(function () {
//     let info = $("#user-info"),
//         btn = $("#btn"),
//         list = $("#ulList");
//     btn.on("click", (e) => {
//         let val = info.val(),
//             li = $(`<li>${val}</li>`);
//         list.append(li);
//         info.val("");
//         e.stopImmediatePropagation();
//     });
// });
// import Vue from "vue";
// let app = new Vue({
//     el: "#app",
//     data: {
//         userInfo: "",
//         ulList: []
//     },
//     methods: {
//         addList() {
//             this.ulList.push(this.userInfo);
//             this.userInfo = "";
//         }
//     }
// });
// let lengthOfLongestSubstring = function (s) {
//     let p1 = 0, p2 = 0, len = s.length, longest = 0, hash = {};
//     while (p1 < len) {
//         if (hash[s[p1]] !== undefined) {
//             p2 = Math.max(hash[s[p1]] + 1, p2);
//         }
//         longest = Math.max(longest, p1 - p2 + 1);
//         hash[s[p1]] = p1;
//         p1++;
//     }
//     return longest;
// };
// console.log(lengthOfLongestSubstring("abba"));
// let findMedianSortedArrays = function (nums1, nums2) {
//     let new_arr = nums1.concat(nums2),
//         len = new_arr.length,
//         index = (len / 2).toFixed(0) - 1;
//     new_arr.sort(function (a, b) {
//         return a - b;
//     });
//     if (len % 2 === 0) {
//         return parseFloat(((new_arr[index] + new_arr[index + 1]) / 2).toFixed(1));
//     } else {
//         return parseFloat(new_arr[index].toFixed(1));
//     }
// };
// let medianSorted = findMedianSortedArrays([1, 3], [2, 4]);
// console.log(medianSorted);
// /**
//  * @param {string} s
//  * @return {string}
//  */
// let longestPalindrome = function (s) {
//     let longestString = "",
//         substring = "",
//         len = s.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < s.length; j++) {
//             substring += s[j];
//             if ((substring.split("").reverse().join("") === substring) && (substring.length > longestString.length)) {
//                 longestString = substring;
//             }
//         }
//         s = s.slice(1);
//         substring = "";
//     }
//     return longestString;
// };
// let longestPalindrome = function (s) {
//     let longestString = "",
//         substring = "",
//         len = s.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < s.length; j++) {
//             substring += s[j];
//             if ((substring.split("").reverse().join("") === substring) && (substring.length > longestString.length)) {
//                 longestString = substring;
//             }
//         }
//         s = s.slice(1);
//         substring = "";
//     }
//     return longestString;
// };
// console.log(longestPalindrome("abcba"));
// /**
//  * @param {number} x
//  * @return {number}
//  */
// let reverse = function(x) {
//     let x_string,
//         x_float;
//     if (x >= 0) {
//         x_string = x.toFixed(0).split("").reverse().join("");
//         x_float = parseFloat(x_string);
//         //2的31次方-1
//         if (x_float <= (Math.pow(2, 31) - 1)) {
//             return x_float;
//         } else {
//             return 0;
//         }
//     } else {
//         //-2的31次方
//         x_string = x.toFixed(0).slice(1).split("").reverse().join("");
//         x_float = -parseFloat(x_string);
//         if (x_float >= -Math.pow(2, 31)) {
//             return x_float;
//         } else {
//             return 0;
//         }
//     }
// };
// console.log(reverse(1563847412));
// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// let isMatch = function(s, p) {
//     let regExp = new RegExp(p),
//         emptyRegExp = /^(.\**)\1*$/;
//     if (!s && (p.indexOf("*") === -1) && p !== "") {
//         return false;
//     }
//     if(!s && p.indexOf("*") >= 0) {
//         if(!emptyRegExp.test(p)){
//             return false;
//         }
//     }
//     s = s.replace(regExp, "");
//     return !s;
// };
// console.log(isMatch("", "..*"));
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// let containsDuplicate = function(nums) {
//     let map = {};
//     for (let [key, value] of nums.entries()) {
//         if (!map[`number${value}`]) {
//             map[`number${value}`] = `number${value}`;
//         } else {
//             return true;
//         }
//     }
//     return false;
// };
// console.log(containsDuplicate([0,4,5,0,3,6]));
// var intersect = function (nums1, nums2) {
//     let result_arr = [];
//     for (let [key, value] of nums1.entries()) {
//         for (let [key_ano, value_ano] of nums2.entries()) {
//             if (value === value_ano) {
//                 result_arr = [...result_arr, value];
//                 nums1.splice(key, 1, "");
//                 nums2.splice(key_ano, 1, "");
//                 break;
//             }
//         }
//     }
//     return result_arr;
// };
// console.log(intersect([1, 2], [1, 1]));
// let newDigits = digits.map(function digitsMap(item, index){
//     return item + 1;
// });
// newDigits.sort(function sort(a, b){
//     return b - a;
// });
// return newDigits;
// let newDigits = [];
// for (let [key, value] of digits.entries()) {
//     let newValue = value + 1;
//     if ((newValue) >= 10) {
//         newDigits = [...newDigits, Math.floor(newValue / 10), newValue % 10];
//     } else {
//         newDigits = [...newDigits, value];
//     }
// }
// newDigits.sort(function sort(a, b) {
//     return b - a;
// });
// return newDigits;
// let newDigits = [],
//     digitString = digits.join(""),
//     digitNumber = parseInt(digitString);
// digitNumber += 1;
// newDigits = digitNumber.toString().split("");
// newDigits = newDigits.map(function digits(digitItem, index) {
//     return parseInt(digitItem);
// });
// return newDigits;
// var plusOne = function (digits) {
// };
// console.log(plusOne([1, 0]));
