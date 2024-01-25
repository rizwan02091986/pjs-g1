let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "Hello World";
elem[0].style.backgroundColor = "orange";
elem[0].style.height = "400px";
elem[0].style.textAlign = "center";
elem[0].style.fontSize = "40px";
elem[0].style.color = "white";



let newBtn = document.createElement('button');
console.log(newBtn);
elem[0].appendChild(newBtn);
newBtn.innerHTML = ("Click Me!");
newBtn.className = ('btn btn-dark mt-5')
newBtn.style.display = "block";
newBtn.style.fontSize = "24px";
newBtn.style.letterSpacing = "14px";
newBtn.style.margin = "0px auto";
newBtn.style.border = "2px solid white";
newBtn.style.borderRadius = "50px";
newBtn.style.padding = "15px 10px";

newBtn.addEventListener('click', btnToggle);
    function btnToggle(){
        console.log("Your Button is Clicked!");
        newBtn.innerHTML = "WoW!";
    }

let head = document.createElement('h4');
elem[0].appendChild(head);

let input = document.createElement('input');
head.appendChild(input);
input.className = "form-control mt-3";

input.addEventListener('keyup', newFunc);
    function newFunc(){
        console.log("Fuction Implement on Input Feild");
    }

let oldBtn = document.createElement('button');
console.log(oldBtn);
elem[0].appendChild(oldBtn);
oldBtn.innerHTML = ("Click Me!");
oldBtn.className = ('btn btn-dark mt-5')
oldBtn.style.display = "block";
oldBtn.style.fontSize = "24px";
oldBtn.style.letterSpacing = "14px";
oldBtn.style.margin = "0px auto";
oldBtn.style.border = "2px solid white";
oldBtn.style.borderRadius = "50px";
oldBtn.style.padding = "15px 10px";
    
oldBtn.addEventListener('click', btnOne);
    function btnOne(){
    console.log("Your Button is Clicked!");
    oldBtn.innerHTML = "WoW!";
    input.value = "";
    }
    






