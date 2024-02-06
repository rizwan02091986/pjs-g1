//promise
// setInterval(function(){
//     document.write("Wow!")
// },2000)

// //promise
// setTimeout(function(){
//     console.log("Wow@@2!");
// },2000)

let promiseOne = new Promise(function(resole, reject){
    setTimeout(function(){
        console.log("This is First Promise!");
    },5000)
})