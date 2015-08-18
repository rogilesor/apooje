function onReady(){
	console.log('Hello Chapter 2');

	var clock = createClock('clock');
	var clock2 = createClock('clock2');
}

function createClock(id){
	var c = new Object();
		c.updateClock = function(){
			var date = new Date();		
			var clock = document.getElementById(id);
			clock.innerHTML = date.getHours()+" : "+date.getMinutes()+ " : "+ date.getSeconds();
		}

	setInterval(c.updateClock,1000);
	c.updateClock();

	return c ;
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

