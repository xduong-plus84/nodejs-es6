// var
// let, const

// 1 hoisting
// 2 phạm vi hoạt động
// var => function scope
// let, const => block scope
// 3 khai báo lại
// 4 let != const

// var title;
// var title2;


let soMot = 1; // => mình code 
soMot = 2;
// console.log(soMot + 1);
const title = { name: "node 27" };
// title = { name: "hello" };


let ham = (list = 123) => {

    return console.log(list) //=> 10

}
// ham(10);

let a = { id: 1, title: "A", name: "B" };

let { id, title2 } = a;


let b = {};
let name = "age";
// b = { ...a, age };

b[name] = 50;
a.age = 50;

a.id = 3;

// console.log(b.id)

// spread operator


//for of => lấy phần tử
//for in => lấy index

//          0  1  2  3  4
let mang = [5, 4, 3, 2, 1];
for (let item of mang) {
    //console.log(item) // => index
}
// for (let item of mang) {
//     console.log(item) // => mang[index]
// }


// 4 tính chất OOP
// 1 - kế thừa => extends
// 2 - đóng gói => private, public, protected
// 3 - trừu tượng => abstract class, interface
// 4 - đa hình => 

// import { tinhTong } from './script.js';
const { tinhTong } = require('./script.js');
tinhTong();


// ES Module
// commonjs Module
