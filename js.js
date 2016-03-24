var numbofSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = randomPickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
// mode  and event listeners 
setupModebuttons();
setupSquares();
reset();
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
		//compare color tp pickedColor
		if(clickedColor === pickedColor){
			message.textContent = "Correct!"; 
			resetButton.textContent = "Play Again!"
			changeColor(clickedColor);
			h1.style.background = clickedColor;

			
		} else { this.style.background = "#232323";
		message.textContent = "Try Again";
	}

});

	}

}
function setupModebuttons(){
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent=="Easy" ? numbofSquares = 3: numbofSquares = 6;
			reset();

		});
	}	
}

function reset(){
	colors = generateRandomColor(numbofSquares);
// generate random colors
pickedColor = randomPickColor();
//picks a random color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Color";
message.textContent = "";

for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display= "block";	
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display="none";	
	}
}
h1.style.background = "#e91e63"


}


resetButton.addEventListener("click", function(){
	reset();

});






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


