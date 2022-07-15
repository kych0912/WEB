const clock = document.querySelector("#clock");
getDATA();

function getDATA(){
    const date = new Date();
    
    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());
    clock.innerText = `${hour.padStart(2,0)} : ${minute.padStart(2,0)} : ${second.padStart(2,0)}`;
}



setInterval(getDATA,1000);
//setInterval(sayHello,1000); //1000ms 간격으로 함수 실행
//setTimeout(sayHello,5000);  // 5000ms 딜레이 후 함수 실행