let hour = document.querySelector(".hour")
let second = document.querySelector(".second")
let minute = document.querySelector(".minute")

setInterval(()=>{
    let date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    second.style.transform = `rotate(${seconds*6}deg)`
    hour.style.transform = `rotate(${hours*30+0.5*minutes}deg)`
    minute.style.transform = `rotate(${minutes*6}deg)`
},1000)


let clock = document.querySelector("#clock")

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    clock.innerHTML = currentTime;

}



// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();











// // setInterval(()=>{
// //      console.log("hello");
// // },1000)

// // it will execute again and again

// // setTimeout(()=>{
// //      console.log("hiii");
// // },2000)

// // it will execute after the time mention in the parameter

// let promises1 = new Promise((resolve,reject)=>{
//     if(10>20){
//         resolve("promoise is resolve")
//     }
//     else{
//         reject("promise is rejected")
//     }
// })

// // console.log(promises1);
// promises1.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// // promises is used to handle async opn it has 3 states pending resolve reject

// // promises function
// // Any All AllSettled race