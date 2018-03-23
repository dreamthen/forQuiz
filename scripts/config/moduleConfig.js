// export default {
//     x: 1,
//     y: 1
// };
// export function fn() {
//     console.log("Gary");
// }
// export function fn_ano() {
//     console.log("I'm Gary");
// }
// const fs = require("fs");
// function readFile(file) {
//     return new Promise(function promise(resolve, reject) {
//         fs.readFile(file, "utf-8", function read(err, data) {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }
// function *read() {
//     let a = yield readFile("../../word/1.txt");
//     console.log(a);
//     let b = yield readFile("../../word/2.txt");
//     console.log(b);
//     return b;
// }
// co(read).then(function resolve(data) {
//     console.log(data);
// }, function reject() {
//
// });
// function co(gen) {
//     let lg = gen();
//     return new Promise(function promise(resolve, reject) {
//         (function next(lastValue) {
//             var nextValue = lg.next(lastValue),
//                 value = nextValue.value,
//                 done = nextValue.done;
//             if (done) {
//                 resolve(value);
//             } else {
//                 value.then(next, reject);
//             }
//         })();
//     });
// }
// const fs = require("fs");
// function readFile(file) {
//     return new Promise(function promise(resolve, reject) {
//         fs.readFile(file, "utf-8", function read(err, data) {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }
// async function read() {
//     let a = await readFile("../../word/1.txt");
//     console.log(a);
//     let b = await readFile("../../word/2.txt");
//     console.log(b);
//     return b;
// }
// read().then(function resolve(data){
//     console.log(data);
// }, function reject(){
//     console.log("error 3~");
// });
// const fs = require("fs");
// function readFile(file) {
//     return new Promise(function promise(resolve, reject) {
//         fs.readFile(file, "utf-8", function read(err, data) {
//             if(err) reject(err);
//             resolve(data);
//         });
//     });
// }
// function *read() {
//     let a = yield readFile("../../word/1.txt");
//     console.log(a);
//     let b = yield readFile("../../word/2.txt");
//     console.log(b);
//     return b;
// }
// co(read).then(function resolve(data){
//     console.log(data);
// }, function reject(){
//
// });
// function co(gen) {
//     let lg = gen();
//     return new Promise(function promise(resolve, reject) {
//         (function next(lastValue) {
//             let nextValue = lg.next(lastValue),
//                 value = nextValue.value,
//                 done = nextValue.done;
//             if (done) {
//                 resolve(value);
//             } else {
//                 value.then(next, reject);
//             }
//         })();
//     });
// }