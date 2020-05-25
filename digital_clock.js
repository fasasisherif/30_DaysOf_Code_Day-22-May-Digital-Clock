var hour = document.getElementById("hour");
var day = document.getElementById("day");
var second = document.getElementById("second");

function myfunc(){

var now_date = new Date()
var start_date = new Date(now_date.getFullYear(),0 ,0)
var date_diff = now_date - start_date
var a_day = 1000 * 60 * 60 * 24
var days_passed = Math.round(date_diff / a_day);
day.innerHTML = days_passed; 
second.innerHTML = now_date.getSeconds(); 
hour.innerHTML = now_date.getHours(); 

}

setInterval(myfunc,1000)
myfunc()
