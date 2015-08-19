function onReady(){
	console.log('Hello Chapter 2');

	var clock1  = new Clock('clock1',0,'');
	var clock2 = new Clock('clock2',120);

}

Date.prototype.updateSeconds = function(){
	this.setSeconds(this.getSeconds()+1);
}

Date.prototype.autoclock = function(isAuto){
	clearInterval(this.clockInterval);
	if(isAuto){
		var that = this ;
		this.clockInterval = setInterval(function(){that.updateSeconds()},1000);
	}
}

function Clock(id, offset,label){
	offset = offset || 0 ;
	label = label || '' ;
	var d = new Date() ;
	var offset = (offset + d.getTimezoneOffset())*60*1000;
	this.d = new Date(offset+d.getTime());
	this.d.autoclock(true);
	this.id = id ;
	this.label = label ;

	var that = this ;
	setInterval(function(){
		console.log(that);
		that.updateClock();},1000);
	this.updateClock();

}

Clock.prototype.updateClock = function(){
//			console.log('this.update actionne')
		var date = this.d ;
			//date.updateSeconds();		
		var clock = document.getElementById(this.id);
		clock.innerHTML = this.formatDigits(date.getHours())+" : "
		+this.formatDigits(date.getMinutes())+ " : "+ this.formatDigits(date.getSeconds())+" "+this.label;
}

Clock.prototype.formatDigits = function(val){
	if (val<10) val="0" + val ;
	return val ;
}


window.onload = onReady;

