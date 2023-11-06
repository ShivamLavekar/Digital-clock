setInterval(showtime,1000);

function showtime(){
    let time = new Date();
	let hour = time.getHours();
	// let hour = 2
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let year = time.getFullYear();
	let month = time.getMonth();
	let day = time.getDay();
	let date = time.getDate();


let weekdays = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

document.getElementById("day").innerHTML = weekdays[day];
document.getElementById("date").innerHTML = date;
document.getElementById("month").innerHTML = months[month];
document.getElementById("year").innerHTML = year;
document.getElementById("hr").innerHTML = hour;
document.getElementById("m").innerHTML = min;
document.getElementById("s").innerHTML = sec;



if(sec<10){
document.getElementById("s").innerHTML = "0"+sec;
}else{
document.getElementById("s").innerHTML = sec;}




if(hour>12){
	document.getElementById("PM").innerHTML = "PM";
	hour-=12
	document.getElementById("hr").innerHTML = "0"+hour;
	

}
else{
	document.getElementById("AM").innerHTML = "AM";
	document.getElementById("hr").innerHTML = hour;
	
}


if(hour>=10){
	document.getElementById("hr").innerHTML = hour;
}





if(min<10){
document.getElementById("m").innerHTML = "0"+min;
}
else{
document.getElementById("m").innerHTML = min;
}





if(date<10){
document.getElementById("date").innerHTML = "0"+date
}else{ 
document.getElementById("date").innerHTML = date
}





// if(day == "MONDAY" || "SUNDAY" || "FRIDAY"){
// 	document.getElementById("day").innerHTML = ""+day;
// }else{
// 	document.getElementById("day").innerHTML = day;
// }

}