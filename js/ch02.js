function onReady(){
	console.log('Hello Chapter 2');

	var clock1  = new Clock('clock1',0,'ETC');
	var clock2 = new Clock('clock2',120);

	


}

function Clock(id, offset,label){
	offset = offset || 0 ;
	var d = new Date() ;
	this.offset = (offset + d.getTimezoneOffset())*60*1000;
	label = label || '' ;

	this.updateClock = function(){
//			console.log('this.update actionne')
			var date = new Date();		
				date = new Date(this.offset + date.getTime());
			var clock = document.getElementById(id);
			clock.innerHTML = this.formatDigits(date.getHours())+" : "+this.formatDigits(date.getMinutes())+ " : "+ this.formatDigits(date.getSeconds())+" "+label;
	}

	this.formatDigits = function(val){
		if (val<10) val="0" + val ;
		return val ;
	}

	var that = this ;
	setInterval(function(){
		console.log(that);
		that.updateClock();},1000);
	this.updateClock();

}

function updateClock(){
	console.log('update en dehors de la classe')
	var date = new Date();
	//console.log(date);
	//console.log(date.getHours());
	//console.log(date.getMinutes());
	//console.log(date.getSeconds());
	
	var clock = document.getElementById('clock');
	//console.log(clock);
	clock.innerHTML = date.getHours()+" : "+date.getMinutes()+ " : "+ date.getSeconds();
}



window.onload = onReady;

