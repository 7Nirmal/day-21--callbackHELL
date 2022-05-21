// const intromsg = function (state,country)   {
//     return `${this.firstname} ${this.lastname} is from ${state} ${country}`;
// };

// let user = {
//     firstname: "nirmal",
//     lastname: "kumar"
// }
// console.log(intromsg.call(user,"tn","india")) 

// const array = ["badminton","chess","cricket","movies","travel"]
// let div = document.createElement("div");
// div.innerText = "list";
// document.body.appendChild(div);
// let orderlist = document.createElement("ul");
// div.appendChild(orderlist);
// array.forEach((e) => {
//     let element = document.createElement("li");
//     element.innerHTML = e;
//     orderlist.appendChild(element);

// })


// function foo (names,saybye){
//     console.log("hi iam foo!!");
//     saybye(names)
// }

// function  bar (names){
//     console.log("welcome to bar function"+ names);
// }
// setTimeout(foo,2000,"johndoe",bar)

let timer = document.getElementById("count");
setTimeout(()=>{
    timer.innerText = "10";
    setTimeout(()=>{
        timer.innerText = "9";
        setTimeout(()=>{
            timer.innerText = "8";
            setTimeout(()=>{
                timer.innerText = "7";
                setTimeout(()=>{
                    timer.innerText = "6";
                    setTimeout(()=>{
                        timer.innerText = "5";
                        setTimeout(()=>{
                            timer.innerText = "4";
                            setTimeout(()=>{
                                timer.innerText = "3";
                                setTimeout(()=>{
                                    timer.innerText = "2";
                                    setTimeout(()=>{
                                        timer.innerText = "1";
                                        setTimeout(()=>{
                                            timer.innerText = "0";
                                            setTimeout(()=>{
                                                timer.innerText = "Happy Independence Day!!";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
// console.log("hello");