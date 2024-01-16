let heroes = ["super man", "bat man", "hulk", "iron man","spider man"];
console.log(heroes);
console.log(heroes[3]);

// array method
// last index main add karta ha
console.log(heroes.push("acha man"));
console.log(heroes.length);
console.log(heroes);

// last index element ko remove karta hai
console.log(heroes.pop());
console.log(heroes);

// shift first element ko remove karta ha
console.log(heroes.shift());

// unshift first element main add karta ha
console.log(heroes.unshift("why man"));
console.log(heroes);

// slice
// selection show portion with slice
console.log(heroes.slice(1,4));

//splice
// splice show selection 1 is element and second value is delete 0 is no delete and 1 is delete after in string we add the element
console.log(heroes.splice(3, 0, "hello", "apple"));
console.log(heroes);


let bbq = ["tikka", "seekh kabab", "charga", "malai boti"];
let seaFood = ["Fish", "Prawns", "lobster"];
let sweetDish = ["custard", "ice cream", "gulab jaman", "halwa"];

let menu = bbq.concat(seaFood, sweetDish);
console.log(menu);
