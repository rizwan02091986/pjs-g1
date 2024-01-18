let name = prompt("Enter The Name");
let math = parseInt(prompt("Enter The Math Marks"));
let urdu = parseInt(prompt("Enter The Urdu Marks"));
let english = parseInt(prompt("Enter The English Marks"));
let islamiat = parseInt(prompt("Enter The Islamiat Marks"));
let computer = parseInt(prompt("Enter The Computer Marks"));

console.log(name);
console.log("Total Marks of Math", math);
console.log("Total Marks of Urdu", urdu);
console.log("Total Marks of English", english);
console.log("Total Marks of Islamiat", islamiat);
console.log("Total Marks of Computer", computer);

let total = math+urdu+english+islamiat+computer;
console.log("Total Obtain Marks", total);

let totalMarks = 500;
console.log("Total Marks", totalMarks);

let per = ((total/totalMarks)*100);
console.log(`Your Percentage ${per}%`);

if(per >=90 && per <=100){
    console.log("Your Grade is A+");
}else if(per >=80 && per<=90){
    console.log("Your Grade is A");
}else if(per >=70 && per<=80){
    console.log("Your Grade is B");
}else if(per >=60 && per<=70){
    console.log("Your Grade is C");
}else if(per >=50 && per<=60){
    console.log("Your Grade is D");
}else if(per >=40 && per<=50){
    console.log("Your Grade is E");
}else if(per<=40){
    console.log("You are Fail");
}


