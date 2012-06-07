//some variables needed for the processing
val1;
val2;
townPart;
items3;

var town = 1;

//generating nice data while window loading
function loady(){
	alert=("hello");
	document.getElementById("test").innerHTML="TESTYE";
	/*printOut();
	printDebug();
	drawMe();*/
}

//This is for the Json brothers
function printOut() {
	items3 = [];
	
	$.getJSON('json/nebenwohnung.json', function(data) {
		//CRAPPY WORKAROUND: Hier wird die ID noch per String ausgelesen (string 1 etc. ne bescheidene Lösung)
	$.each(data.Auswertung.Stadtteil[0].id, function (val1, val2) {
		document.getElementById("townpart").innerHTML=val1+ val2;
	});
	
	  $.each(data.Auswertung.Stadtteil[11].Reihe, function (key, val) {
	    items3[key,val];
		document.getElementById("rawbug").innerHTML=key + val;
	  });
	  $('<ul/>', {
	    'class': 'my-new-list',
	    html: items3.join('')
	  }).appendTo($('.debug'));
	  
	});
	
}	

function printDebug() {
	
};

function drawSvg () {
	var svgselect = document.getElementById(this.selection);
	document.getElementById("attribute").innerHTML=this.text;
	svgselect.setAttribute("style", "fill:red");
}

//get input from form
function getInput (obj) {
	selection = obj.options[obj.selectedIndex].value;
	text = obj.options[obj.selectedIndex].text;
	document.getElementById("selected").innerHTML=selection;
}

//This is for Raphael
function drawMe() {
	var townpart = "Bornim";
	data = [];
	var r = Raphael("draw"),
	xs = [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	ys = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	data = [136, 132, 33,34, 49, 41, 38, 26, 28, 33, 35, 31, 30, 35, 35, 35, 37, 39, 37, 35],
	axisy = [townpart],
	axisx = ["92", "93", "94", "95", "96", "97", "98", "99", "'00", "'01", "'02", "'03", "'04", "'05", "'06", "'07", "'08", "'09", "'10", "'11"];
	r.dotchart(10, 10, 600, 260, xs, ys, data, {symbol: "o", max: 10, heat: true, axis: "0 0 1 1", axisxstep: 19, axisystep: 1, axisxlabels: axisx, axisxtype: " ", axisytype: " ", axisylabels: axisy}).hover(function () {
	this.marker = this.marker || r.tag(this.x, this.y, this.value, 0, this.r + 2).insertBefore(this);
	this.marker.show();
	}, function () {
	this.marker && this.marker.hide();
	}); 
}
