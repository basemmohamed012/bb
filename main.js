const hours = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();


document.getElementById("").innerHTML=hours ;
document.getElementById("").innerHTML=minute ;
document.getElementById("").innerHTML=second ;


hours = hours<10 ? '0' + hours : hours;
minute = minute<10 ? '0' + minute : minute;
second = second<10 ?'0' + second : second;

setInterval()
