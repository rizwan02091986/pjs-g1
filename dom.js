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
exam[0].style.fontWeight = "bold";
exam[0].style.fontSize = "20px";

exam[0].classList.add("wow");

let newElem = document.createElement('p');

exam[0].appendChild(newElem);

newElem.innerHTML = "My Name is Rizwan";

let secondelem = document.createElement("h1");
newElem.appendChild(secondelem);

secondelem.innerHTML = "I am 38 Year Old"

let newBtn = document.createElement("button");
exam[0].appendChild(newBtn);

newBtn.innerHTML = "Submit";
newBtn.style.padding = "20px 24px";
newBtn.className = "btn btn-primary"
newBtn.style.fontSize = "24px";

//events
newBtn.addEventListener('click' , toggleBtn);
    function toggleBtn(){
        console.log("You Click Me");
        newBtn.innerHTML = "WOW";
    }






