var a = "The first can opener wasn't invented until almost 50 years after the invention of the can.";
var b = "Despite the optical illusion, the Gateway Arch is exactly as wide (630 feet) as it is tall.";
var c = "When Disneyland was opened in 1955, “Tomorrowland” was designed to look like a year in the distant future: 1986."
var d = "The national animal of Scotland is the unicorn.";
var e = "China owns all of the pandas in the world. They rent them out for about $1 million a year.";


	document.querySelector('#fact1').addEventListener("click", section1);

function section1() {
	document.getElementById('facts').innerHTML = "<h1>" + a + "</h1>";
	document.querySelector("section").style.backgroundImage = "url('images/can.gif')";
	document.querySelector("section").style.backgroundSize = "1375px";
}

document.querySelector('#fact2').addEventListener("click", section2);

function section2() {
	document.getElementById('facts').innerHTML = "<h1>" + b + "</h1>";
	document.querySelector("section").style.backgroundImage = "url('images/gatewayarch.gif')";
	document.querySelector("section").style.backgroundSize = "1200px";
}

document.querySelector('#fact3').addEventListener("click", section3);

function section3() {
	document.getElementById('facts').innerHTML = "<h1>" + c + "</h1>";
	document.querySelector("section").style.backgroundImage = "url('images/disneyland.gif')";
	document.querySelector("section").style.backgroundSize = "825px";
}

document.querySelector('#fact4').addEventListener("click", section4);

function section4() {
	document.getElementById('facts').innerHTML = "<h1>" + d + "</h1>";
	document.querySelector("section").style.backgroundImage = "url('images/unicorn.gif')";
	document.querySelector("section").style.backgroundSize = "1200px";
}

document.querySelector('#fact5').addEventListener("click", section5);

function section5() {
	document.getElementById('facts').innerHTML = "<h1>" + e + "</h1>";
	document.querySelector("section").style.backgroundImage = "url('images/panda.gif')";
	document.querySelector("section").style.backgroundSize = "825px";
}

document.querySelector('#dark').addEventListener("click", section6);

function section6() {
	document.querySelector("main").style.backgroundColor = "rgba(47, 50, 56)";
	document.querySelector("body").style.backgroundColor = "rgba(47, 50, 56)";
}

document.querySelector('#light').addEventListener("click", section7);

function section7() {
	document.querySelector("main").style.backgroundColor = "rgba(242, 240, 240)";
	document.querySelector("body").style.backgroundColor = "rgba(242, 240, 240)";
}

document.querySelector('#turquoise').addEventListener("click", section8);

function section8() {
	document.querySelector("main").style.backgroundColor = "#b1ede8";
	document.querySelector("body").style.backgroundColor = "#b1ede8";
}


