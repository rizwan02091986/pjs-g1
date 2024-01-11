let age = 20;

if(age>=20){
    console.log("you cast the vote");
}if(age<20){
    console.log("you can't cast the vote");
}

if(age>=20){
    console.log("you cast the vote");
}else{
    console.log("you can't cast the vote");
}

let mode = prompt(`Enter your Mode
1) DARK
2) LIGHT`);

let color;

if(mode === "DARK"){
    color = "Black";
}if(mode === "LIGHT"){
    color = "White";
}

console.log("you choose the color", color);