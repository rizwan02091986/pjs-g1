// dom (document object model)

let elem = document.getElementById('second');
console.log(elem);

// inner html target to two way
// elem.innerHTML = "An a Apple Day";
elem.textContent = "An a Apple Day";
//styling with js
elem.style.backgroundColor = "black";
elem.style.textAlign = "center";
elem.style.color = "white";

//add the class
elem.classList.add("world");
// change class name
elem.className = "hello";
// remove the class
elem.classList.remove("hello");

let exam = document.getElementsByClassName("container");
console.log(exam[0]);

exam[0].style.textAlign = "center";
exam[0].style.backgroundColor = "black";
exam[0].style.color = "white";


