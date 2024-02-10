// //promise
// // setInterval(function(){
// //     document.write("Wow!")
// // },2000)

// // //promise
// // setTimeout(function(){
// //     console.log("Wow@@2!");
// // },2000)

// primise 1
let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("This is First Promise!");
    },3000)
})

// promise Two
let promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name : "Henrry", email : "global@gmail.com"})
    },5000)
})

promiseTwo.then(function(user){
    console.log(user);
})

// Promise Three
let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Henry", password : "12345"})
    },6000)
})

promiseThree.then(function(MyUser){
    return MyUser.password;
})
.then(function(pass){
    console.log(pass);
})

// promise four

let promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "CAMEL", password : "123456"})
        }else{
            reject("Error : Something Went Wrong Here!")
        }
    },7000)
})

promiseFour.then(function(userData){
    return userData.name;
})
.then(function(myData){
    console.log(myData);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Finally");
})


let promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "ASTON", password : "123456789"})
        }else{
            reject("Error : Something Went Wrong Here!")
        }
    },2000)
})

async function consumedPromiseFive(){
    try{
        let res = await promiseFive
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}

consumedPromiseFive()