// let a = 1;
// const age = prompt("HI");
// console.log(age);










// const title = document.getElementsByClassName("flex");
// title[0].autofocus = true;
// console.dir(title);          //js로 HTML 변경 가능    해당 클래스를 가진 태그를 가져온다.

// const flex = document.querySelector(".flex div");  //하나만 가져옴  하위 태그를 가져올 수 있다.
// console.dir(flex);

// const flex1 = document.querySelectorAll(".flex div");  //모두 가져옴  가져온 태그 내에 있는 style 객체도 변경 가능
// console.dir(flex1);









// function sayHello(){
//     console.log("Hello")
// }
// player = {
//     name :"h",
//     sayHello:function(){
//         console.log("Hello")
//     }
// }
// player.sayHello();





// function changeclassname(){
//     h1.className = "flex";     //클래스 변경 가능 
//     h1.classList.contains(flex);   //클래스에 flex클래스가 있는지 알려줌
//     h1.classList.add(flex);       //클래스에서 flex클래스 추가
//     h1.classList.remove(flex);     //클래스에서 flex클래스 제거
//     h1.classList.toggle(flex);     //클래스에 flex가 없으면 추가하고, 있으면 제거
// }


// function clickevent(){
//     console.log("hi");
// }

// function mousehere(){
//     console.log("1111");
// }

// function resizewindow(){
//     document.body.style.backgroundColor = "gray";
// }

// flex.addEventListener("click",clickevent);   //클릭이란 이벤트를 추가, 함수 실행
// flex.onclick = clickevent;  //위와 같음
// flex.addEventListener("mouseenter", mousehere);
// window.addEventListener("resize",resizewindow);

const loginform = document.querySelector("#login-form");
const logininput = document.querySelectorAll("#login-form input");
const greeting = document.querySelector("h1");


console.dir(greeting);

function LOGIN_toggle(username){
    greeting.innerText =`Hello ${username}`;
    loginform.classList.add("hidden");
    greeting.classList.remove("hidden");
}

function onSubmit(content){
    content.preventDefault();
    const USERNAME = logininput[0].value;
    console.log(USERNAME);
    localStorage.setItem("username",USERNAME);
    LOGIN_toggle(USERNAME);
}

const CONTENT = localStorage.getItem("username");

if(localStorage.getItem("username") == null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit",onSubmit);
}
else{
    LOGIN_toggle(CONTENT);
}