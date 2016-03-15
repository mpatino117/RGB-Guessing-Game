var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = randomPickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
colors = generateRandomColor(6);
// generate random colors
pickedColor = randomPickColor();
//picks a random color
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
}
h1.style.background = "#232323"
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i <= squares.length; i++) {
	// add additinoal color to squares
	squares[i].style.background = colors[i];
	//click listener to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		//compare color tp pickedColor
		if(clickedColor === pickedColor){
			message.textContent = "Correct!"; 
			h1.style.background = clickedColor;
			// text changed on span
			changeColor(clickedColor);
		} else { this.style.background = "#232323";
		message.textContent = "Try Again";
		resetButton.textContent = "Play Again!"
	}
	
});

}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}

}

function randomPickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an arrray
	var arr = [];
	
	//loop through array 
	for (var i = 0; i < num; i++) {
		// push random # into array 
	arr.push(rgbRandom());
	}
	return arr;
}

function rgbRandom(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
//combine to make rgb 
return "rgb(" + r +", " + g + ", " + b +")"; 

}


