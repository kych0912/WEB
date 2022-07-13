const clock = document.querySelector("#clock");
let time = 1
clock.innerText = time;


function sayHello(){
    clock.innerText = time;
    time +=1;
}

//setInterval(sayHello,1000); //1000ms 간격으로 함수 실행
//setTimeout(sayHello,5000);  // 5000ms 딜레이 후 함수 실행