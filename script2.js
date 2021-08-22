var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.createElement("button")


function displayCss(){
	css.textContent = body.style.background + ";";
};

function setGradient() {
		body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";
	displayCss();

};

function createRandomButton (){
randomButton.innerHTML = "Randomize";
body.appendChild(randomButton);
};

function randomColor(){
	return Math.floor(Math.random()*16777215).toString(16);
}

function randomOnClick (){
body.style.background = "linear-gradient(to right, " 
	+ "#" + randomColor() + ", " 
	+ "#" + randomColor() + ")";
	displayCss();
};


createRandomButton();

randomButton.addEventListener("click", randomOnClick);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

