console.log("first class");
console.log("welcome");

// data types
name = "mike";      // String
age = 45;           // integer, Number
isCnic = false;     // Booleon true & false
x = undefined;      // kuch ana hai
y = null;           // empty

console.table(name , age , isCnic , x , y);
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(isCnic))
console.log(typeof(x))
console.log(typeof(y))


// two types of data types

// primitive  string, Int, number, boolean etc
// non primitive  array, functions, objects etc


//three types of decleration
// var can be redeclare and update
// let can't be redeclared but it can be updated
// const can't be redeclared or updated

var city = "Karachi";
console.log(city);
city = "lahore";
console.log(city);
var city = "peshawar";
console.log(city);


let Myage = 15;
console.log(Myage);
Myage = 80;
console.log(Myage);


const pie = 3.14;
console.log(pie);
pie = 1040;
console.log(pie);
