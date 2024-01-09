let myData = {
    name : "Peter",
    city : "Karachi",
    age : 54,
    salary : 1000,
    grade : "c"
};

// two method getting data from an object
// first method

console.log(myData["name"]);
console.log(myData["age"]);

// second method
console.log(myData.salary);
console.log(myData.grade);
console.log(myData);

// getting data with using loop

for(let i in myData){
    console.log(i , myData[i]);
}

//arithmetic operator
let a = 45;
let b = 75;

console.log("the sum of a+b is", a+b);
console.log("the sub of a-b is", a-b);
console.log("the mul of a*b is", a*b);
console.log("the div of a/b is", a/b);
console.log("the modulus of a%b is", a%b);


//logical operators

// or operator

console.log("or operator");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// end operator
console.log("end operator");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("not operator");
console.log(!false && !false);

// comparison

// > greater than
// < less than
// >=  greater than equal to
// =< less than equal to

// == it means equal
// === equal with type check