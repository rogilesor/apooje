function onReady(){
	console.log('Hello Chapter 2');
	setInterval(updateClock,1000);
	updateClock();
}

function updateClock(){
	var date = new Date();
	//console.log(date);
	//console.log(date.getHours());
	//console.log(date.getMinutes());
	//console.log(date.getSeconds());
	
	var clock = document.getElementById('clock');
	//console.log(clock);
	clock.innerHTML = date.getHours()+" : "+date.getMinutes()+ " : "+ date.getSeconds();
}

function formatDigits(val){
	if (val<10) val="0" + val ;
	return val ;
}

window.onload = onReady;

